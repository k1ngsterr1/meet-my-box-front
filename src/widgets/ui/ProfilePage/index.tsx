import { useUpdateProfile } from "@shared/lib/hooks/useUpdateProfile";
import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./styles.module.scss";
import ConsentCheckbox from "@features/AgreeCheck";

// Sample list of countries in Russian
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
  // Add more countries as needed
];

// Regular expressions for postal code validation by country
const postalCodePatterns: Record<string, RegExp> = {
  KZ: /^\d{6}$/, // Kazakhstan
  RU: /^\d{6}$/, // Russia
  BY: /^\d{6}$/, // Belarus
  UA: /^\d{5}$/, // Ukraine
  UZ: /^\d{6}$/, // Uzbekistan
  KG: /^\d{6}$/, // Kyrgyzstan
  TJ: /^\d{6}$/, // Tajikistan
  TM: /^\d{6}$/, // Turkmenistan
  AZ: /^\d{4}$/, // Azerbaijan
  GE: /^\d{4}$/, // Georgia
};

export const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState({
    lastName: "",
    firstName: "",
    lastNameLatin: "",
    firstNameLatin: "",
    phoneNumber: "",
    email: "",
    postalCode: "",
    country: "",
    city: "",
    street: "",
    building: "",
    apartment: "",
    intercomName: "",
    whatsapp: "",
  });
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validatePostalCode = (country: string, postalCode: string): boolean => {
    const pattern = postalCodePatterns[country];
    return pattern ? pattern.test(postalCode) : true; // Return true if no pattern exists
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

    // Validate postal code based on selected country
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
      setError("An error occurred while updating the profile.");
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
          Подсказка{" "}
        </span>
        <Tooltip id="my-tooltip" />
      </div>
      <hr className="bg-main border-2 border-main rounded-full mb-6" />
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
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
            label: "Номер мобильного телефона с кодом страны",
            placeholder: "87759932587",
          },
          {
            name: "email",
            label: "Ваш e-mail",
            placeholder: "example@gmail.com",
            type: "email",
          },
          { name: "postalCode", label: "Индекс", placeholder: "000000" },
          {
            name: "city",
            label: "Город/населенный пункт",
            placeholder: "Ваш Город",
          },
          { name: "street", label: "Улица", placeholder: "Ваша Улица" },
          { name: "building", label: "Дом", placeholder: "Номер вашего дома" },
          {
            name: "apartment",
            label: "Квартира",
            placeholder: "Номер квартиры",
          },
          {
            name: "intercomName",
            label: "Имя на домофоне",
            placeholder: "Код домофона",
          },
          { name: "whatsapp", label: "WhatsApp", placeholder: "Ваш WhatsApp" },
        ].map(({ name, label, placeholder, type = "text" }) => (
          <div className="flex flex-col" key={name}>
            <label className="mb-1 text-gray-700">{label}</label>
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
        {/* Dropdown for Country Selection */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Страна</label>
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
