import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
export const CostCard = ({ onCostClick }: any) => {
  const handleClick = () => {
    onCostClick();
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.cost__heading}>
        Тариф: Тариф Cтандарт Италия - Россия
      </h3>
      <p className={styles.cost__paragraph}>
        <span className="font-bold">Посылка:</span> 1 кг, размеры: 15 x 15 x 15
        см
      </p>
      <p className={styles.cost__paragraph}>
        <span className="font-bold">Цена:</span> 37.00€
      </p>
      <p className={styles.cost__paragraph}>
        <span className="font-bold">Содержимое:</span> 0 предметов на сумму 0
        евро
      </p>
      <p className={styles.cost__paragraph}>
        <span className="font-bold">Всего:</span> 37.00€
      </p>
      <Button
        text="Далее"
        buttonType="filled"
        onClick={onCostClick}
        margin="mt-4"
      />
    </div>
  );
};
