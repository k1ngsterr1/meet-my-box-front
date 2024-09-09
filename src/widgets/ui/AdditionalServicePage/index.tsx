import PricingTable from "@entities/AdditionalServiceTable";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import Button from "@shared/ui/Button/ui/button";
export const AdditonalServicePage = () => {
  return (
    <div className={styles.additional_service}>
      <img
        src={bg_face.src}
        alt=""
        className={styles.additional_service__img}
      />
      <h2 className={styles.additional_service__heading}>
        Дополнительные услуги
      </h2>
      <PricingTable />
    </div>
  );
};
