import logo from "@assets/brandmark-design 2.svg";
import PostcodeDropdown from "@entities/Postcodes";
import {
  addMargin,
  getDateInfo,
  getFinalPrice,
} from "@shared/lib/content/CostTables";
import { useGetRates } from "@shared/lib/hooks/useGetRates";
import { validatePostcode } from "@shared/lib/hooks/usePostCodeValidate";
import { CalculateInput } from "@shared/ui/Input/Calculate/calculate-input";
import axios from "axios";
import { useEffect, useState } from "react";

const countriesFrom = [
  { value: "Italy", label: "Италия" },
  { value: "France", label: "Франция" },
  { value: "Germany", label: "Германия" },
  { value: "Spain", label: "Испания" },
  { value: "Netherlands", label: "Нидерланды" },
  { value: "Austria", label: "Австрия" },
  { value: "Poland", label: "Польша" },
  { value: "Switzerland", label: "Швейцария" },
  { value: "United Kingdom", label: "Великобритания" },
  { value: "Cyprus", label: "Кипр" },
  // Add more countries as needed
];

const countriesTo = [
  { value: "Russia", label: "Россия" },
  { value: "Kazakhstan", label: "Казахстан" },
  { value: "Belarus", label: "Беларусь" },
  { value: "Kyrgyzstan", label: "Кыргыстан" },
  { value: "Georgia", label: "Грузия" },
  { value: "Turkmenistan", label: "Туркменистан" },
  { value: "Azerbaijan", label: "Азербайджан" },
  // Add more countries as needed
];

// const shippoToken = process.env.SHIPPO_API_TOKEN; // Use environment variable

export interface ShippingRatesParams {
  weight: number;
  width: number;
  height: number;
  length: number;
  fromCountry: string;
  toCountry: string;
  fromPostcode: string;
  toPostcode: string;
}

// Define the type for the shipping rates
export interface ShippingRate {
  provider: string;
  amount: string;
  currency: string;
  [key: string]: any; // Add other fields as needed
}

const useShippingRates = ({
  weight,
  width,
  height,
  length,
  fromCountry,
  toCountry,
  fromPostcode,
  toPostcode,
}: ShippingRatesParams): ShippingRate[] => {
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([]);

  useEffect(() => {
    const fetchRates = async () => {
      if (
        weight > 0 &&
        width > 0 &&
        height > 0 &&
        length > 0 &&
        fromPostcode &&
        toPostcode
      ) {
        try {
          const response = await axios.post(
            "https://api.goshippo.com/shipments/",
            {
              address_from: {
                country: fromCountry,
                zip: fromPostcode,
              },
              address_to: {
                country: toCountry,
                zip: toPostcode,
              },
              parcels: [
                {
                  length: length.toString(),
                  width: width.toString(),
                  height: height.toString(),
                  distance_unit: "см",
                  weight: weight.toString(),
                  mass_unit: "kg",
                },
              ],
              async: false,
            },
            {
              headers: {
                Authorization:
                  "ShippoToken shippo_live_ee85e3da2e43029c6ce3e09509b90309c0887c08",
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
          setShippingRates(response.data.rates || []);
        } catch (error) {
          console.error("Error fetching rates from Shippo:", error);
          setShippingRates([]);
        }
      } else {
        setShippingRates([]);
      }
    };

    fetchRates();
  }, [
    weight,
    width,
    height,
    length,
    fromCountry,
    toCountry,
    fromPostcode,
    toPostcode,
  ]);

  return shippingRates;
};

export const CalculateForm = () => {
  let [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [fromCountry, setFromCountry] = useState("Italy");
  const [toCountry, setToCountry] = useState("Russia");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");
  const [shippingRates, setShippingRates] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null); // Reset error state
    setIsLoading(true);
    console.log();

    const isFromPostcodeValid = await validatePostcode(
      fromCountry,
      fromPostcode
    );
    const isToPostcodeValid = await validatePostcode(toCountry, toPostcode);

    if (!isFromPostcodeValid) {
      setError("Неверный почтовый индекс отправителя.");
      return;
    }

    if (!isToPostcodeValid) {
      setError("Неверный почтовый индекс получателя.");
      return;
    }
    if (weight < (length * width * height) / 5000) {
      weight = (length * width * height) / 5000;
      setWeight((length * width * height) / 5000);
    }

    const shipmentData = {
      weight: weight,
      length: length,
      width: width,
      height: height,
      fromZipCode: fromPostcode,
      toZipCode: toPostcode,
      fromCountry: fromCountry,
      toCountry: toCountry,
    };
    const roundWeight = (weight: number) => {
      const decimalPart = weight % 1; // Get the decimal part
      if (decimalPart > 0) {
        return Math.ceil(weight); // Round up
      } else {
        return Math.floor(weight); // Round down
      }
    };
    console.log(roundWeight(weight));

    if (fromCountry === "Italy" || fromCountry === "Germany") {
      let response = {
        days: [
          {
            estimateNumber: "10",
            estimateTime: "DAYS",
          },
          {
            estimateNumber: "14",
            estimateTime: "DAYS",
          },
        ],
        price: getFinalPrice(roundWeight(weight), toCountry),
        dates: [getDateInfo(10), getDateInfo(14)],
        urls: [logo.src, logo.src],
      };
      setIsLoading(false);
      if (weight > 10) {
        setError(
          "Дисклеймер: Вес, который вы указали (объемный или фактический) превышает 10 кг. Наш совет: разбейте посылку на две коробки поменьше или напишите нам для решения вопроса."
        );
        return;
      }
      localStorage.setItem("rates", JSON.stringify(response));
      window.location.href = `/rates`;
    } else {
      try {
        // Call the Shippo API
        const response = await useGetRates(shipmentData);
        if (response === "Error") {
          throw new Error("Failed to fetch shipping rates");
        }
        setIsLoading(false);
        response.price = addMargin(response.price, roundWeight(weight));
        localStorage.setItem("rates", JSON.stringify(response));
        window.location.href = `/rates`;
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  const handleNumberInput = (setter: any) => (e: any) => {
    let value = e.target.value;

    // If the input is empty, set it as an empty string
    if (value === "") {
      setter("");
      return;
    }

    // Convert the value to a float
    let floatValue = parseFloat(value);

    // Handle NaN or values out of bounds
    if (isNaN(floatValue)) floatValue = 0;
    if (floatValue > 100) floatValue = 100;

    setter(floatValue);
  };

  const handleNumberInputWeight = (setter: any) => (e: any) => {
    let value = e.target.value;

    // If the input is empty, set it as an empty string
    if (value === "") {
      setter("");
      return;
    }
    value = parseFloat(e.target.value);
    if (isNaN(value)) value = 0;
    if (value > 10) value = 10; // Limit the value to a maximum of 100
    setter(value);
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md mt-4">
      <h5 className="text-lg font-semibold text-center mb-4">
        Рассчитайте стоимость
      </h5>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* From Country and Postcode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Откуда:
          </label>
          <select
            value={fromCountry}
            onChange={(e) => setFromCountry(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          >
            {countriesFrom.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <CalculateInput
            value={fromPostcode}
            placeholder="Почтовый индекс"
            onChange={(e) => setFromPostcode(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* To Country and Postcode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Куда:
          </label>
          <select
            value={toCountry}
            onChange={(e) => setToCountry(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          >
            {countriesTo.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <CalculateInput
            value={toPostcode}
            placeholder="Почтовый индекс"
            onChange={(e) => setToPostcode(e.target.value)}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* Dimensions Inputs */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Вес (кг):
            </label>
            <CalculateInput
              value={weight}
              placeholder="Вес"
              min={1}
              type="number"
              max={10}
              step={0.1}
              onChange={handleNumberInputWeight(setWeight)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Длина (см):
            </label>
            <CalculateInput
              value={length}
              placeholder="Длина"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setLength)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ширина (см):
            </label>
            <CalculateInput
              value={width}
              placeholder="Ширина"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setWidth)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Высота (см):
            </label>
            <CalculateInput
              value={height}
              placeholder="Высота"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setHeight)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-main hover:bg-hover text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Рассчитать
          </button>
        </div>
      </form>
      <div className="mt-6">
        {error && <p className="text-red-500">{error}</p>}
        {shippingRates.length > 0 ? (
          <ul className="list-disc list-inside">
            {shippingRates.map((rate: any, index: number) => (
              <li key={index} className="text-gray-700">
                {rate.provider} ({rate.servicelevel.name}): {rate.amount_local}{" "}
                {rate.currency_local}
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-500">
            Заполните все необходимые поля, чтобы рассчитать стоимость
          </span>
        )}
      </div>
    </div>
  );
};

export const CalculateFormPC = () => {
  let [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [fromCountry, setFromCountry] = useState("Italy");
  const [toCountry, setToCountry] = useState("Russia");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");
  const [shippingRates, setShippingRates] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log("fromCountry:", fromCountry);

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null); // Reset error state
    setIsLoading(true);
    console.log();

    const isFromPostcodeValid = await validatePostcode(
      fromCountry,
      fromPostcode
    );
    const isToPostcodeValid = await validatePostcode(toCountry, toPostcode);

    if (!isFromPostcodeValid) {
      setError("Неверный почтовый индекс отправителя.");
      return;
    }

    if (!isToPostcodeValid) {
      setError("Неверный почтовый индекс получателя.");
      return;
    }
    if (weight < (length * width * height) / 5000) {
      weight = (length * width * height) / 5000;
      setWeight((length * width * height) / 5000);
    }

    const shipmentData = {
      weight: weight,
      length: length,
      width: width,
      height: height,
      fromZipCode: fromPostcode,
      toZipCode: toPostcode,
      fromCountry: fromCountry,
      toCountry: toCountry,
    };
    const roundWeight = (weight: number) => {
      const decimalPart = weight % 1; // Get the decimal part
      if (decimalPart > 0) {
        return Math.ceil(weight); // Round up
      } else {
        return Math.floor(weight); // Round down
      }
    };
    console.log(roundWeight(weight));

    if (fromCountry === "Italy" || fromCountry === "Germany") {
      let response = {
        days: [
          {
            estimateNumber: "10",
            estimateTime: "DAYS",
          },
          {
            estimateNumber: "14",
            estimateTime: "DAYS",
          },
        ],
        price: getFinalPrice(roundWeight(weight), toCountry),
        dates: [getDateInfo(10), getDateInfo(14)],
        urls: [logo.src, logo.src],
      };
      setIsLoading(false);
      if (weight > 10) {
        setError(
          "Дисклеймер: Вес, который вы указали (объемный или фактический) превышает 10 кг. Наш совет: разбейте посылку на две коробки поменьше или напишите нам для решения вопроса."
        );
        return;
      }
      localStorage.setItem("rates", JSON.stringify(response));
      window.location.href = `/rates`;
    } else {
      try {
        // Call the Shippo API
        const response = await useGetRates(shipmentData);
        if (response === "Error") {
          throw new Error("Failed to fetch shipping rates");
        }
        setIsLoading(false);
        response.price = addMargin(response.price, roundWeight(weight));
        localStorage.setItem("rates", JSON.stringify(response));
        window.location.href = `/rates`;
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
      }
    }
  };

  const handleNumberInput = (setter: any) => (e: any) => {
    let value = e.target.value;

    // If the input is empty, set it as an empty string
    if (value === "") {
      setter("");
      return;
    }

    // Convert the value to a float
    let floatValue = parseFloat(value);

    // Handle NaN or values out of bounds
    if (isNaN(floatValue)) floatValue = 0;
    if (floatValue > 100) floatValue = 100;

    setter(floatValue);
  };

  const handleNumberInputWeight = (setter: any) => (e: any) => {
    let value = e.target.value;

    // If the input is empty, set it as an empty string
    if (value === "") {
      setter("");
      return;
    }
    value = parseFloat(e.target.value);
    if (isNaN(value)) value = 0;
    if (value > 10) value = 10; // Limit the value to a maximum of 100
    setter(value);
  };
  const handleClick = (setter: any) => {
    setter("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-8">
      <h5 className="text-xl font-semibold text-center mb-6">
        Рассчитайте стоимость
      </h5>
      <form className="space-y-4" onSubmit={handleSubmit} method="POST">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Откуда:
            </label>
            <select
              value={fromCountry}
              onChange={(e) => setFromCountry(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              {countriesFrom.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Ваш индекс:
            </label>
            <PostcodeDropdown
              value={fromPostcode}
              onChange={setFromPostcode}
              placeholder="Введите индекс"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Куда:
            </label>
            <select
              value={toCountry}
              onChange={(e) => setToCountry(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              {countriesTo.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Ваш индекс:
            </label>
            <CalculateInput
              value={toPostcode}
              placeholder="Почтовый индекс"
              onChange={(e) => setToPostcode(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Вес (кг):
            </label>
            <CalculateInput
              value={weight}
              placeholder="Вес"
              min={1}
              type="number"
              max={10}
              step={0.1}
              onChange={handleNumberInputWeight(setWeight)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Длина (см):
            </label>
            <CalculateInput
              value={length}
              placeholder="Длина"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setLength)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Ширина (см):
            </label>
            <CalculateInput
              value={width}
              placeholder="Ширина"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setWidth)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Высота (см):
            </label>
            <CalculateInput
              value={height}
              placeholder="Высота"
              min={1}
              type="number"
              max={100}
              onChange={handleNumberInput(setHeight)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        {fromCountry === "Italy" && (
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Количество посылок:
            </label>
            <CalculateInput
              value={quantity}
              placeholder="Введите количество"
              min={1}
              type="number"
              max={100}
              step={1}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            // type="submit"
            onClick={() => console.log("lol")}
            className="bg-main hover:bg-hover text-white font-semibold py-2 px-6 rounded-md shadow-md"
          >
            {isLoading ? "Загружаем..." : "Рассчитать"}
          </button>
        </div>
      </form>
      <div className="mt-6">
        {error && <p className="text-red-500">{error}</p>}
        {shippingRates.length > 0 ? (
          <ul className="list-disc list-inside">
            {shippingRates.map((rate: any, index: number) => (
              <li key={index} className="text-gray-700">
                {rate.provider} ({rate.servicelevel.name}): {rate.amount_local}{" "}
                {rate.currency_local}
              </li>
            ))}
          </ul>
        ) : (
          <span className="text-gray-500">
            Заполните все необходимые поля, чтобы рассчитать стоимость
          </span>
        )}
      </div>
    </div>
  );
};
