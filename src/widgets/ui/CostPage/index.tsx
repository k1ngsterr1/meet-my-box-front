import bg_face from "@assets/bg_face.svg";
import PricingTable, { PricingTableExpress } from "@entities/CostTable";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
import styles from "./styles.module.scss";

export const CostPage = () => {
  const [tableState, setTableState] = useState<string>("Стандарт");

  return (
    <div className={styles.cost}>
      <img src={bg_face.src} alt="" className={styles.cost__img} />
      <h2 className={styles.cost__heading}>Цены</h2>
      <div className="flex items-center justify-between gap-4 mt-4 mb-8">
        <Button
          text="Стандарт"
          onClick={() => setTableState("Стандарт")}
          buttonType={tableState === "Стандарт" ? "filled" : "outline"}
        />
        <Button
          text="Экспресс"
          onClick={() => setTableState("Экспресс")}
          buttonType={tableState === "Экспресс" ? "filled" : "outline"}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-start space-x-4">
        {tableState === "Стандарт" ? (
          <>
            <PricingTable />
          </>
        ) : (
          <>
            <PricingTableExpress />
          </>
        )}
      </div>
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
