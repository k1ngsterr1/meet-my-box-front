import { CalculateInput } from "@shared/ui/Input/Calculate/calculate-input";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
export const CalculateForm = () => {
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [cost, setCost] = useState(0);

  // Helper function to handle number input
  const handleNumberInput = (setter: any) => (e: any) => {
    const value = parseFloat(e.target.value); // Convert input to a number
    setter(!isNaN(value) ? value : 0); // Set the value or default to 0 if NaN
  };

  // Calculate cost whenever the dimensions or weight change
  useEffect(() => {
    const calculatedCost = width * height * length * weight * 0.5;
    setCost(calculatedCost);
  }, [weight, width, height, length]); // Dependency array includes all variables that affect the cost

  return (
    <div className={styles.calculate__form}>
      <h5 className={styles.calculate__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate__form__inputs}>
        <CalculateInput
          value={weight}
          placeholder="Вес"
          margin="mt-4"
          onChange={handleNumberInput(setWeight)}
        />
        <CalculateInput
          value={width}
          placeholder="Ширина"
          margin="mt-4"
          onChange={handleNumberInput(setWidth)}
        />
        <CalculateInput
          value={height}
          placeholder="Длина"
          margin="mt-4"
          onChange={handleNumberInput(setHeight)}
        />
        <CalculateInput
          value={length}
          placeholder="Высота"
          margin="mt-4"
          onChange={handleNumberInput(setLength)}
        />
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

  // Helper function to handle number input
  const handleNumberInput = (setter: any) => (e: any) => {
    const value = parseFloat(e.target.value); // Convert input to a number
    setter(!isNaN(value) ? value : 0); // Set the value or default to 0 if NaN
  };

  // Calculate cost whenever the dimensions or weight change
  useEffect(() => {
    const calculatedCost = width * height * length * weight * 0.5;
    setCost(calculatedCost);
  }, [weight, width, height, length]); // Dependency array includes all variables that affect the cost
  return (
    <div className={styles.calculate_pc__form}>
      <h5 className={styles.calculate_pc__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate_pc__form__inputs}>
        <div className="w-full flex flex-col items-center">
          <span className="text-dark">Вес</span>
          <CalculateInput
            value={weight}
            placeholder="Вес"
            margin="mt-4"
            onChange={handleNumberInput(setWeight)}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <span className="text-dark">Ширина</span>
          <CalculateInput
            value={width}
            placeholder="Ширина"
            margin="mt-4"
            onChange={handleNumberInput(setWidth)}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <span className="text-dark">Длина</span>
          <CalculateInput
            value={height}
            placeholder="Длина"
            margin="mt-4"
            onChange={handleNumberInput(setHeight)}
          />
        </div>
        <div className="w-full flex flex-col items-center">
          <span className="text-dark">Высота</span>
          <CalculateInput
            value={length}
            placeholder="Высота"
            margin="mt-4"
            onChange={handleNumberInput(setLength)}
          />
        </div>
      </form>
      <span className={styles.calculate__form__result}>{cost.toFixed(0)}₽</span>
    </div>
  );
};
