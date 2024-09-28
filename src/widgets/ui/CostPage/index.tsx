import bg_face from "@assets/bg_face.svg";
import ServicePricingTable from "@entities/AdditionalServiceTable";
import PricingTable from "@entities/CostTable";
import Button from "@shared/ui/Button/ui/button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { useState } from "react";
import { AboutScreen } from "../HomePage/screens/AboutScreen/AboutScreen";
import { ContactScreen } from "../HomePage/screens/ContactScreen/ContactScreen";
import styles from "./styles.module.scss";

export const CostPage = () => {
  const [tableState, setTableState] = useState<string>("Стандарт");
  return (
    <>
      <div className={styles.cost}>
        <img src={bg_face.src} alt="" className={styles.cost__img} />
        <h2 className={styles.cost__heading}>Цены</h2>
        <Paragraph isCentered margin="mt-4" width="w-[30%]">
          Фиксированная цена действует только для отправлений из Италии и
          Германии в страны СНГ
        </Paragraph>

        <div className="w-full flex flex-col md:flex-row justify-center items-start space-x-4">
          <>
            <PricingTable />
          </>
        </div>
        <h3 className={`${styles.cost__heading} mt-4 mb-4`}>
          Помощь с покупкой
        </h3>
        <ServicePricingTable />
        <Button
          text="Помощь с покупкой"
          buttonType="filled"
          margin="mt-12"
          onClick={() => {
            window.location.href = "/faq";
          }}
        />
      </div>
      <AboutScreen />
      <ContactScreen />
    </>
  );
};
