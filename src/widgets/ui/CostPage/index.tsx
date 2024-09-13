import PricingTable, { PricingTableExpress } from "@entities/CostTable";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import Button from "@shared/ui/Button/ui/button";
export const CostPage = () => {
  return (
    <div className={styles.cost}>
      <img src={bg_face.src} alt="" className={styles.cost__img} />
      <h2 className={styles.cost__heading}>Цены</h2>
      <h3 className={styles.cost__subheading}>Стандарт</h3>
      <PricingTable />
      <h3 className={styles.cost__subheading}>Эксперсс</h3>
      <PricingTableExpress />
      <Button
        text="Доп. услуги"
        buttonType="filled"
        margin="mt-12"
        onClick={() => {
          window.location.href = "/additional-service";
        }}
      />
    </div>
  );
};
