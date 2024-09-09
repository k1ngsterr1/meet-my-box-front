import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Documents } from "@shared/ui/Documents";
export const CalculateScreen = () => {
  const [isForm, setIsForm] = useState(true);
  const handleToggleForm = () => {
    setIsForm(!isForm);
  };
  return (
    <>
      <section className={styles.calculate} id="calculate-mob">
        <h2 className={styles.calculate__heading}>
          Рассчитать стоимость доставки
        </h2>
        <Button
          text="Посылка"
          buttonType={isForm ? "filled" : "outline"}
          margin="mt-6"
          onClick={handleToggleForm}
        />
        <Button
          text="Документы"
          buttonType={!isForm ? "filled" : "outline"}
          margin="mt-4"
          onClick={handleToggleForm}
        />
        {isForm && <CalculateForm />}
        {!isForm && <Documents onClick={handleToggleForm} />}
      </section>
      <section className={styles.calculate_pc} id="calculate-pc">
        <h2 className={styles.calculate_pc__heading}>
          Рассчитать стоимость доставки
        </h2>
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Button
            text="Посылка"
            buttonType={isForm ? "filled" : "outline"}
            margin="mt-6"
            onClick={handleToggleForm}
          />
          <Button
            text="Документы"
            buttonType={!isForm ? "filled" : "outline"}
            margin="mt-4"
            onClick={handleToggleForm}
          />
        </div>
        {isForm && <CalculateFormPC />}
        {!isForm && <Documents onClick={handleToggleForm} />}
      </section>
    </>
  );
};
