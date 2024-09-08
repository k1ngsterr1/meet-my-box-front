import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
export const CalculateScreen = () => {
  return (
    <>
      <section className={styles.calculate} id="calculate-mob">
        <h2 className={styles.calculate__heading}>
          Рассчитать стоимость доставки
        </h2>
        <Button text="Посылка" buttonType="filled" margin="mt-6" />
        <Button text="Документы" buttonType="outline" margin="mt-4" />
        <CalculateForm />
      </section>
      <section className={styles.calculate_pc} id="calculate-pc">
        <h2 className={styles.calculate_pc__heading}>
          Рассчитать стоимость доставки
        </h2>
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Button text="Посылка" buttonType="filled" />
          <Button text="Документы" buttonType="outline" />
        </div>
        <CalculateFormPC />
      </section>
    </>
  );
};
