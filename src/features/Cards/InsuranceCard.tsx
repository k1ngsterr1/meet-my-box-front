import type React from "react";
import styles from "./styles.module.scss";
export const InsuranceCard = ({ onInsuranceClick }: any) => {
  const handleClick = (value: boolean) => {
    onInsuranceClick(value);
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.insurance__heading}>Страховка</h3>
      <p className={styles.insurance__paragraph}>
        *5% от стоимости содержимого.Подробнее о правилах страхования читать
      </p>
      <div className={styles.answer}>
        <div className={styles.box}>
          <label className={styles.box__container}>
            <input
              type="checkbox"
              className={styles.input}
              onClick={() => handleClick(true)}
            />
            <span className={styles.checkmark}></span>
            Да
          </label>
        </div>
        <div className={styles.box}>
          <label className={styles.box__container}>
            <input
              type="checkbox"
              className={styles.input}
              onClick={() => handleClick(false)}
            />
            <span className={styles.checkmark}></span>
            Нет
          </label>
        </div>
      </div>
    </div>
  );
};
