import PricingTable from "@entities/CostTable";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import Button from "@shared/ui/Button/ui/button";
export const CostPage = () => {
  return (
    <div className={styles.cost}>
      <img src={bg_face.src} alt="" className={styles.cost__img} />
      <h2 className={styles.cost__heading}>Цены</h2>
      <PricingTable />
      <Button text="Допуслуги" buttonType="filled" margin="mt-12" />
    </div>
  );
};
