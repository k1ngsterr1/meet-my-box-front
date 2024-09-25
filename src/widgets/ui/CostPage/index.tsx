import bg_face from "@assets/bg_face.svg";
import PricingTable, { PricingTableExpress } from "@entities/CostTable";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
import styles from "./styles.module.scss";
import ServicePricingTable from "@entities/AdditionalServiceTable";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

export const CostPage = () => {
  const [tableState, setTableState] = useState<string>("Стандарт");

  return (
    <div className={styles.cost}>
      <img src={bg_face.src} alt="" className={styles.cost__img} />
      <h2 className={styles.cost__heading}>Цены</h2>
      <Paragraph isCentered margin="mt-4" width="w-[30%]">
        Фиксированная цена действует только для отправлений из Италии и Германии
        в страны СНГ
      </Paragraph>

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
      <h3 className={`${styles.cost__heading} mt-4 mb-4`}>
        Дополнительные услуги
      </h3>
      <ServicePricingTable />
      <Button
        text="FAQ"
        buttonType="filled"
        margin="mt-8"
        onClick={() => {
          window.location.href = "/links";
        }}
      ></Button>
    </div>
  );
};
