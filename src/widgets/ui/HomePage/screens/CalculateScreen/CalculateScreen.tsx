import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
import { CalculateForm } from "@features/Form/Calculate/calculate-form";
export const CalculateScreen = () => {
  return (
    <div className={styles.calculate}>
      <h2 className={styles.calculate__heading}>
        Рассчитать стоимость доставки
      </h2>
      <Button text="Посылка" buttonType="filled" margin="mt-6" />
      <Button text="Документы" buttonType="outline" margin="mt-4" />
      <CalculateForm />
    </div>
  );
};
