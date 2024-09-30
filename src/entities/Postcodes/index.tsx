import React, { useEffect, useState } from "react";

interface PostcodeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  country: string | undefined;
}

interface PostcodeSuggestion {
  postalCode: string;
  countryCode: string;
}

const PostcodeDropdown: React.FC<PostcodeDropdownProps> = ({
  value,
  onChange,
  placeholder = "Введите индекс",
  country,
}) => {
  const [suggestions, setSuggestions] = useState<PostcodeSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (value.length >= 3) {
      fetchPostcodes(value, country);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [value]);

  // Функция для загрузки почтовых индексов с использованием GeoNames API
  const fetchPostcodes = async (
    postcode: string,
    countryCode: string | undefined
  ) => {
    setLoading(true);
    try {
      const username = "k1ngsterr"; // Ваш username на GeoNames.org
      const response = await fetch(
        `https://secure.geonames.org/postalCodeSearchJSON?postalcode_startsWith=${postcode}&country=${countryCode}&username=${username}&maxRows=5`
      );
      const data = await response.json();
      console.log("GeoNames API Response:", data); // Логируем полный ответ API

      if (!data.postalCodes || data.postalCodes.length === 0) {
        console.warn(`Нет результатов для ${postcode} в стране ${countryCode}`);
        setSuggestions([]);
        return;
      }

      // Формируем список подсказок
      const postcodes = data.postalCodes.map((item: any) => ({
        postalCode: item.postalCode,
        placeName: item.placeName,
        countryCode: item.countryCode,
      }));

      console.log("Найденные индексы:", postcodes);
      setSuggestions(postcodes);
    } catch (error) {
      console.error("Ошибка загрузки индексов: ", error);
    } finally {
      setLoading(false);
    }
  };

  // Функция для выбора элемента и скрытия списка
  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setShowSuggestions(false); // Скрываем выпадающий список после выбора
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded-md mt-1 shadow-sm w-full"
        onFocus={() => value.length >= 3 && setShowSuggestions(true)} // Показываем список при фокусе, если длина >= 3
      />

      {/* Выпадающий список для отображения подсказок */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-md">
          {loading ? (
            <li className="p-2 text-gray-500">Загрузка...</li>
          ) : (
            suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                onClick={() => handleSelect(suggestion.postalCode)} // Вызываем handleSelect при клике на элемент
              >
                <span>{suggestion.postalCode}</span>
                <span className="text-gray-500">
                  ({suggestion.countryCode})
                </span>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default PostcodeDropdown;
