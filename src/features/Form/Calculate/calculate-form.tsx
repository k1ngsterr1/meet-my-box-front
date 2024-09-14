import { CalculateInput } from "@shared/ui/Input/Calculate/calculate-input";
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

export const CalculateForm = () => {
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [cost, setCost] = useState(0);
  const [fromCountry, setFromCountry] = useState("GB");
  const [toCountry, setToCountry] = useState("AT");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");

  const handleNumberInput = (setter) => (e) => {
    const value = parseFloat(e.target.value);
    setter(!isNaN(value) ? value : 0);
  };

  useEffect(() => {
    const calculatedCost = width * height * length * weight * 0.5; // Placeholder calculation
    setCost(calculatedCost);
  }, [weight, width, height, length]);

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
      <span className={styles.calculate__form__result}>{cost.toFixed(0)}₽</span>
    </div>
  );
};

export const CalculateFormPC = () => {
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [cost, setCost] = useState(0);
  const [fromCountry, setFromCountry] = useState("GB");
  const [toCountry, setToCountry] = useState("AT");
  const [fromPostcode, setFromPostcode] = useState("");
  const [toPostcode, setToPostcode] = useState("");

  const handleNumberInput = (setter) => (e) => {
    const value = parseFloat(e.target.value);
    setter(!isNaN(value) ? value : 0);
  };

  useEffect(() => {
    const calculatedCost = width * height * length * weight * 0.5;
    setCost(calculatedCost);
  }, [weight, width, height, length]);

  return (
    <div className={styles.calculate_pc__form}>
      <h5 className={styles.calculate_pc__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate_pc__form__inputs}>
        <div className="flex flex-col">
          <div className="flex items-center jusify-center">
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
            <div className="w-full flex items-center gap-4 ">
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
                className="border p-2 rounded w-50" // Adjust the width here
              />
            </div>
            <div className="flex items-center gap-4 ">
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
                className="border p-2 rounded w-50" // Adjust the width here
              />
            </div>
          </div>
        </div>
      </form>
      <span className={styles.calculate__form__result}>{cost.toFixed(0)}₽</span>
    </div>
  );
};
