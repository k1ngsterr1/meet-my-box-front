import { CalculateInput } from "@shared/ui/Input/Calculate/calculate-input";
import styles from "./styles.module.scss";
import { calculateInputs } from "@shared/lib/content/Input";
export const CalculateForm = () => {
  return (
    <div className={styles.calculate__form}>
      <h5 className={styles.calculate__form__heading}>
        Заполните все поля, чтобы рассчитать стоимость
      </h5>
      <form className={styles.calculate__form__inputs}>
        {calculateInputs.map((input, index) => (
          <CalculateInput
            key={index}
            placeholder={input.placeholder}
            margin="mt-4"
          />
        ))}
      </form>
      <span className={styles.calculate__form__result}>0₽</span>
    </div>
  );
};
