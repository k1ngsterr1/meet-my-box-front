import ConsentCheckbox from "@features/AgreeCheck";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkAuth } from "@shared/lib/hooks/useCheckAuth";
import { useGetProfile } from "@shared/lib/hooks/useGetProfile";
import { useUpdateProfile } from "@shared/lib/hooks/useUpdateProfile";
import Button from "@shared/ui/Button/ui/button";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./styles.module.scss";

// Список стран на русском
const countries = [
  { value: "KZ", label: "Казахстан" },
  { value: "RU", label: "Россия" },
  { value: "BY", label: "Беларусь" },
  { value: "UA", label: "Украина" },
  { value: "UZ", label: "Узбекистан" },
  { value: "KG", label: "Киргизия" },
  { value: "TJ", label: "Таджикистан" },
  { value: "TM", label: "Туркменистан" },
  { value: "AZ", label: "Азербайджан" },
  { value: "GE", label: "Грузия" },
];

// Регулярные выражения для индексов по странам
const postalCodePatterns: Record<string, RegExp> = {
  KZ: /^\d{6}$/,
  RU: /^\d{6}$/,
  BY: /^\d{6}$/,
  UA: /^\d{5}$/,
  UZ: /^\d{6}$/,
  KG: /^\d{6}$/,
  TJ: /^\d{6}$/,
  TM: /^\d{6}$/,
  AZ: /^\d{4}$/,
  GE: /^\d{4}$/,
};

export const ProfilePage: React.FC = () => {
  const { result } = useGetProfile(); // Функция получения данных профиля
  const [popup, setPopup] = useState<boolean>(false);

  useEffect(() => {
    checkAuth();
  });

  useEffect(() => {
    const isAuthenticated = checkAuth();
    if (!isAuthenticated) return;
  }, []);

  const [profileData, setProfileData] = useState({
    lastName: result?.lastName ?? "",
    firstName: result?.firstName ?? "",
    lastNameLatin: result?.lastNameLatin ?? "",
    firstNameLatin: result?.firstNameLatin ?? "",
    phoneNumber: result?.phoneNumber ?? "",
    email: result?.email ?? "",
    postalCode: result?.postalCode ?? "",
    country: result?.country ?? "",
    city: result?.city ?? "",
    street: result?.street ?? "",
    building: result?.building ?? "",
    apartment: result?.apartment ?? "",
    intercomName: result?.intercomName ?? "",
    whatsapp: result?.whatsapp ?? "",
  });

  React.useEffect(() => {
    if (result) {
      setProfileData({
        lastName: result.lastName ?? "",
        firstName: result.firstName ?? "",
        lastNameLatin: result.lastNameLatin ?? "",
        firstNameLatin: result.firstNameLatin ?? "",
        phoneNumber: result.phoneNumber ?? "",
        email: result.email ?? "",
        postalCode: result.postalCode ?? "",
        country: result.country ?? "",
        city: result.city ?? "",
        street: result.street ?? "",
        building: result.building ?? "",
        apartment: result.apartment ?? "",
        intercomName: result.intercomName ?? "",
        whatsapp: result.phoneNumber ?? "",
      });
    }
  }, [result]); // Обновлять состояние только когда результат загрузится

  // Установить начальные значения из profileDataBack, если они есть

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const validatePostalCode = (country: string, postalCode: string): boolean => {
    const pattern = postalCodePatterns[country];
    return pattern ? pattern.test(postalCode) : true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!checked) {
      setError("Согласие об обработке персональных данных не подтверждено.");
      return;
    }

    // Валидация почтового индекса
    if (!validatePostalCode(profileData.country, profileData.postalCode)) {
      setError("Индекс не соответствует формату выбранной страны.");
      return;
    }

    try {
      const result = await useUpdateProfile(profileData);

      if (result === "Profile updated successfully") {
        setPopup(true);
        setSuccessMessage("Профиль успешно обновлён");
      } else {
        setPopup(false);
        setError(result);
      }
    } catch (error) {
      setError("Ошибка при обновлении профиля.");
    }
  };

  return (
    <main className={`${styles.profile_page} p-6  mt-8 mb-8 rounded-lg`}>
      {popup && (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Ваш адрес обновлен!
              </h2>
              <button
                onClick={() => setPopup(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Закрыть
              </button>
            </div>
          </div>
          );
        </>
      )}
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-xl mb-4">Профиль клиента</h1>
        <span
          className="text-main"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content="Заполните профиль сейчас, чтобы не делать это при доставке"
        >
          <FontAwesomeIcon icon={faCircleInfo} size="lg" />
        </span>
        <Tooltip
          id="my-tooltip"
          style={{ fontSize: "16px", fontWeight: 400 }}
        />
      </div>
      <hr className="bg-main border-2 border-main rounded-full mb-6" />
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-8 rounded-lg"
        onSubmit={handleSubmit}
      >
        {[
          {
            name: "lastName",
            label: "Фамилия",
            placeholder: "Ваша фамилия",
            info: "Введите вашу фамилию, как в документе. Пример: Иванов.",
          },
          {
            name: "firstName",
            label: "Имя",
            placeholder: "Ваше имя",
            info: "Введите ваше имя, как в паспорте. Пример: Алексей.",
          },
          {
            name: "lastNameLatin",
            label: "Фамилия на латинице",
            placeholder: "Фамилия на латинице",
            info: "Укажите фамилию латинскими буквами. Пример: Ivanov.",
          },
          {
            name: "firstNameLatin",
            label: "Имя на латинице",
            placeholder: "Имя на латинице",
            info: "Укажите имя латинскими буквами. Пример: Alexey.",
          },
          {
            name: "phoneNumber",
            label: "Номер мобильного телефона с кодом страны",
            placeholder: "87759932587",
            info: "Введите номер с кодом страны. Пример: +7 775 993 2587.",
          },
          {
            name: "email",
            label: "Ваш e-mail",
            placeholder: "example@gmail.com",
            type: "email",
            info: "Введите ваш действующий e-mail. Пример: example@gmail.com.",
          },
          {
            name: "postalCode",
            label: "Индекс",
            placeholder: "000000",
            info: "Введите ваш почтовый индекс. Пример: 050000.",
          },
          {
            name: "city",
            label: "Город/населенный пункт",
            placeholder: "Ваш Город",
            info: "Введите название города. Пример: Алматы.",
          },
          {
            name: "street",
            label: "Улица",
            placeholder: "Ваша Улица",
            info: "Введите название улицы. Пример: Абая.",
          },
          {
            name: "building",
            label: "Дом",
            placeholder: "Номер вашего дома",
            info: "Укажите номер вашего дома. Пример: 45.",
          },
          {
            name: "apartment",
            label: "Квартира",
            placeholder: "Номер квартиры",
            info: "Укажите номер квартиры (если применимо). Пример: 12.",
          },
          {
            name: "intercomName",
            label: "Имя на домофоне",
            placeholder: "Код домофона",
            info: "Введите код или имя на домофоне. Пример: Иванов.",
          },
          {
            name: "whatsapp",
            label: "WhatsApp",
            placeholder: "Ваш WhatsApp",
            info: "Укажите номер для WhatsApp. Пример: +7 775 993 2587.",
          },
        ].map(({ name, label, placeholder, info, type = "text" }) => (
          <div className="flex flex-col" key={name}>
            <div className="flex items-center justify-between">
              <label className="mb-1 text-gray-700 text-sm">{label}</label>
              <span
                className="text-main"
                data-tooltip-id={`${name}`}
                data-tooltip-place="bottom"
                data-tooltip-content={info}
              >
                <FontAwesomeIcon icon={faCircleInfo} size="sm" />
              </span>
              <Tooltip
                id={`${name}`}
                style={{ fontSize: "16px", fontWeight: 400 }}
              />
            </div>
            <input
              type={type}
              name={name}
              className="p-2 border border-gray-300 rounded"
              placeholder={placeholder}
              value={profileData[name as keyof typeof profileData]}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 text-sm">Страна</label>
          <select
            name="country"
            className="p-2 border border-gray-300 rounded bg-white"
            value={profileData.country}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Выберите страну
            </option>
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex items-start mt-2">
          <ConsentCheckbox
            checked={checked}
            handleCheck={handleCheckboxChange}
          />
        </div>
        {error && (
          <p className="text-red-500 col-span-1 md:col-span-2">{error}</p>
        )}
        {successMessage && (
          <p className="text-green-500 col-span-1 md:col-span-2">
            {successMessage}
          </p>
        )}

        <Button
          type="submit"
          buttonType="filled"
          text="Сохранить"
          margin="col-span-1 md:col-span-2"
        />
      </form>
    </main>
  );
};
