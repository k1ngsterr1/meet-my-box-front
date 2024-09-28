import ConsentCheckbox from "@features/AgreeCheck";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetProfile } from "@shared/lib/hooks/useGetProfile";
import { useUpdateProfile } from "@shared/lib/hooks/useUpdateProfile";
import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
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

  console.log("result:", result);

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
        setSuccessMessage("Профиль успешно обновлён");
      } else {
        setError(result);
      }
    } catch (error) {
      setError("Ошибка при обновлении профиля.");
    }
  };

  return (
    <main
      className={`${styles.profile_page} p-6 bg-blue-50 mt-8 mb-8 rounded-lg`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl mb-4">Профиль клиента</h1>
        <span
          className="text-main"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="bottom"
          data-tooltip-content="Заполните профиль сейчас, чтобы не делать это при доставке"
        >
          <FontAwesomeIcon icon={faCircleInfo} size="lg" />
        </span>
        <Tooltip id="my-tooltip" />
      </div>
      <hr className="bg-main border-2 border-main rounded-full mb-6" />
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {/* Отображение полей профиля */}
        {[
          { name: "lastName", label: "Фамилия", placeholder: "Ваша фамилия" },
          { name: "firstName", label: "Имя", placeholder: "Ваше имя" },
          {
            name: "lastNameLatin",
            label: "Фамилия на латинице",
            placeholder: "Фамилия на латинице",
          },
          {
            name: "firstNameLatin",
            label: "Имя на латинице",
            placeholder: "Имя на латинице",
          },
          {
            name: "phoneNumber",
            label: "Номер телефона",
            placeholder: "+7 777 777 7777",
          },
          {
            name: "email",
            label: "Ваш e-mail",
            placeholder: "example@gmail.com",
            type: "email",
          },
          { name: "postalCode", label: "Индекс", placeholder: "050000" },
          { name: "city", label: "Город", placeholder: "Алматы" },
          { name: "street", label: "Улица", placeholder: "Абая" },
          { name: "building", label: "Дом", placeholder: "45" },
          { name: "apartment", label: "Квартира", placeholder: "12" },
          {
            name: "intercomName",
            label: "Имя на домофоне",
            placeholder: "Иванов",
          },
          {
            name: "whatsapp",
            label: "WhatsApp",
            placeholder: "+7 777 777 7777",
          },
        ].map(({ name, label, placeholder, type = "text" }) => (
          <div className="flex flex-col" key={name}>
            <label className="mb-1 text-gray-700 text-sm">{label}</label>
            <input
              type={type}
              name={name}
              className="p-2 border border-gray-300 rounded"
              placeholder={placeholder}
              value={profileData[name as keyof typeof profileData] || ""}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* Dropdown для выбора страны */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700 text-sm">Страна</label>
          <select
            name="country"
            className="p-2 border border-gray-300 rounded bg-white"
            value={profileData.country || ""}
            onChange={handleChange}
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

        {/* Поле для согласия с обработкой данных */}
        <div className="w-full flex items-start mt-2">
          <ConsentCheckbox
            checked={checked}
            handleCheck={handleCheckboxChange}
          />
        </div>

        {/* Сообщения об ошибках или успешном обновлении */}
        {error && (
          <p className="text-red-500 col-span-1 md:col-span-2">{error}</p>
        )}
        {successMessage && (
          <p className="text-green-500 col-span-1 md:col-span-2">
            {successMessage}
          </p>
        )}

        {/* Кнопка Сохранить */}
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
