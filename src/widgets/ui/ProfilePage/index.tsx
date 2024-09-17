import { useUpdateProfile } from "@shared/lib/hooks/useUpdateProfile";
import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./styles.module.scss";

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
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Фамилия</label>
          <input
            type="text"
            name="lastName"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваша фамилия"
            value={profileData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя</label>
          <input
            type="text"
            name="firstName"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваше имя"
            value={profileData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Фамилия на латинице</label>
          <input
            type="text"
            name="lastNameLatin"
            className="p-2 border border-gray-300 rounded"
            placeholder="Фамилия на латинице"
            value={profileData.lastNameLatin}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя на латинице</label>
          <input
            type="text"
            name="firstNameLatin"
            className="p-2 border border-gray-300 rounded"
            placeholder="Имя на латинице"
            value={profileData.firstNameLatin}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">
            Номер мобильного телефона с кодом страны
          </label>
          <input
            type="text"
            name="phone"
            className="p-2 border border-gray-300 rounded"
            placeholder="87759932587"
            value={profileData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Ваш e-mail</label>
          <input
            type="email"
            name="email"
            className="p-2 border border-gray-300 rounded"
            placeholder="example@gmail.com"
            value={profileData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Индекс</label>
          <input
            type="text"
            name="postalCode"
            className="p-2 border border-gray-300 rounded"
            placeholder="000000"
            value={profileData.postalCode}
            onChange={handleChange}
          />
        </div>
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
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Город/населенный пункт</label>
          <input
            type="text"
            name="city"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваш Город"
            value={profileData.city}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Улица</label>
          <input
            type="text"
            name="street"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваша Улица"
            value={profileData.street}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Дом</label>
          <input
            type="text"
            name="building"
            className="p-2 border border-gray-300 rounded"
            placeholder="Номер вашего дома"
            value={profileData.building}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Квартира</label>
          <input
            type="text"
            name="apartment"
            className="p-2 border border-gray-300 rounded"
            placeholder="Номер квартиры"
            value={profileData.apartment}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Имя на домофоне</label>
          <input
            type="text"
            name="intercomName"
            className="p-2 border border-gray-300 rounded"
            placeholder="Код домофона"
            value={profileData.intercomName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">WhatsApp</label>
          <input
            type="text"
            name="whatsapp"
            className="p-2 border border-gray-300 rounded"
            placeholder="Ваш WhatsApp"
            value={profileData.whatsapp}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-500 col-span-2">{error}</p>}
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
