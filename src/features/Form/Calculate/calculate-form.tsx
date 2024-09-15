import { CalculateInput } from "@shared/ui/Input/Calculate/calculate-input";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const countries = [
  { value: "GB", label: "United Kingdom" },
  { value: "IT", label: "Italy" },
  { value: "FR", label: "France" },
  { value: "AT", label: "Austria" },
  { value: "DE", label: "Germany" },
  { value: "ES", label: "Spain" },
  // Add more countries as needed
];

const shippoToken = process.env.SHIPPO_API_TOKEN; // Use environment variable

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
                  distance_unit: "cm",
                  weight: weight.toString(),
                  mass_unit: "kg",
                },
              ],
              async: false,
            },
            {
              headers: {
                Authorization: shippoToken,
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
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [fromCountry, setFromCountry] = useState("GB");
  const [toCountry, setToCountry] = useState("AT");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");

  const shippingRates = useShippingRates({
    weight,
    width,
    height,
    length,
    fromCountry,
    toCountry,
    fromPostcode,
    toPostcode,
  });

  const handleNumberInput = (setter: any) => (e: any) => {
    const value = parseFloat(e.target.value);
    setter(!isNaN(value) ? value : 0);
  };

  return (
    <div className={styles.calculate__form}>
      <h5 className={styles.calculate__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate__form__inputs}>
        <CalculateInput
          value={weight}
          placeholder="Weight (kg)"
          margin=""
          onChange={handleNumberInput(setWeight)}
        />
        <CalculateInput
          value={width}
          placeholder="Width (cm)"
          margin="mt-4"
          onChange={handleNumberInput(setWidth)}
        />
        <CalculateInput
          value={height}
          placeholder="Height (cm)"
          margin="mt-4"
          onChange={handleNumberInput(setHeight)}
        />
        <CalculateInput
          value={length}
          placeholder="Length (cm)"
          margin="mt-4"
          onChange={handleNumberInput(setLength)}
        />
        <div className="flex items-center gap-4 mt-4">
          <select
            value={fromCountry}
            onChange={(e) => setFromCountry(e.target.value)}
            className="border p-2 rounded"
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <CalculateInput
            value={fromPostcode}
            placeholder="From Postcode"
            onChange={(e) => setFromPostcode(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <select
            value={toCountry}
            onChange={(e) => setToCountry(e.target.value)}
            className="border p-2 rounded"
          >
            {countries.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          <CalculateInput
            value={toPostcode}
            placeholder="To Postcode"
            onChange={(e) => setToPostcode(e.target.value)}
          />
        </div>
      </form>
      <div className={styles.calculate__form__result}>
        {shippingRates.length > 0 ? (
          <ul>
            {shippingRates.map((rate, index) => (
              <li key={index}>
                {rate.provider} ({rate.servicelevel.name}): {rate.amount_local}{" "}
                {rate.currency_local}
              </li>
            ))}
          </ul>
        ) : (
          <span>Введите данные для расчета стоимости доставки</span>
        )}
      </div>
    </div>
  );
};

export const CalculateFormPC = () => {
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [fromCountry, setFromCountry] = useState("GB");
  const [toCountry, setToCountry] = useState("AT");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");

  const shippingRates = useShippingRates({
    weight,
    width,
    height,
    length,
    fromCountry,
    toCountry,
    fromPostcode,
    toPostcode,
  });

  const handleNumberInput = (setter: any) => (e: any) => {
    const value = parseFloat(e.target.value);
    setter(!isNaN(value) ? value : 0);
  };

  return (
    <div className={styles.calculate_pc__form}>
      <h5 className={styles.calculate_pc__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate_pc__form__inputs}>
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <span className="text-dark">Вес (kg)</span>
              <CalculateInput
                value={weight}
                placeholder="Weight"
                margin="mt-4"
                onChange={handleNumberInput(setWeight)}
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <span className="text-dark">Ширина (cm)</span>
              <CalculateInput
                value={width}
                placeholder="Width"
                margin="mt-4"
                onChange={handleNumberInput(setWidth)}
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <span className="text-dark">Высота (cm)</span>
              <CalculateInput
                value={height}
                placeholder="Height"
                margin="mt-4"
                onChange={handleNumberInput(setHeight)}
              />
            </div>
            <div className="w-full flex flex-col items-center">
              <span className="text-dark">Длина (cm)</span>
              <CalculateInput
                value={length}
                placeholder="Length"
                margin="mt-4"
                onChange={handleNumberInput(setLength)}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-4">
            <div className="w-full flex items-center gap-4">
              <select
                value={fromCountry}
                onChange={(e) => setFromCountry(e.target.value)}
                className="border p-2 rounded"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <CalculateInput
                value={fromPostcode}
                placeholder="From Postcode"
                onChange={(e) => setFromPostcode(e.target.value)}
                className="border p-2 rounded w-50"
              />
            </div>
            <div className="flex items-center gap-4">
              <select
                value={toCountry}
                onChange={(e) => setToCountry(e.target.value)}
                className="border p-2 rounded"
              >
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <CalculateInput
                value={toPostcode}
                placeholder="To Postcode"
                onChange={(e) => setToPostcode(e.target.value)}
                className="border p-2 rounded w-50"
              />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.calculate_pc__form__result}>
        {shippingRates.length > 0 ? (
          <ul>
            {shippingRates.map((rate, index) => (
              <li key={index}>
                {rate.provider} ({rate.servicelevel.name}): {rate.amount_local}{" "}
                {rate.currency_local}
              </li>
            ))}
          </ul>
        ) : (
          <span>Введите данные для расчета стоимости доставки</span>
        )}
      </div>
    </div>
  );
};
