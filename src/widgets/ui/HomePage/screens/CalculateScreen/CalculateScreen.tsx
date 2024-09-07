import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
export const CalculateScreen = () => {
  return (
    <>
      <div className={styles.calculate}>
        <h2 className={styles.calculate__heading}>
          Рассчитать стоимость доставки
        </h2>
        <Button text="Посылка" buttonType="filled" margin="mt-6" />
        <Button text="Документы" buttonType="outline" margin="mt-4" />
        <CalculateForm />
      </div>
      <div className={styles.calculate_pc}>
        <h2 className={styles.calculate_pc__heading}>
          Рассчитать стоимость доставки
        </h2>
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Button text="Посылка" buttonType="filled" />
          <Button text="Документы" buttonType="outline" />
        </div>
        <CalculateFormPC />
      </div>
    </>
  );
};
