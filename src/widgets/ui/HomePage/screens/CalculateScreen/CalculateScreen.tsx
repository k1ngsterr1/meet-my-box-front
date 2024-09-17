import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
import { calcFaqAccordions } from "@shared/lib/content/Accordion";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import { Documents } from "@shared/ui/Documents";
import { useState } from "react";
import { InfoScreen } from "../../InfoScreen/InfoScreen";
import styles from "./styles.module.scss";

export const CalculateScreen = () => {
  const [calculate, setCalculate] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/calculate-blocks/1");
        setCalculate(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  const [isForm, setIsForm] = useState(true);

  const handleToggleForm = () => {
    setIsForm(!isForm);
    console.log("lol");
  };

  return (
    <>
      <section className={styles.calculate} id="calculate-mob">
        <h2 className={styles.calculate__heading}>
          Рассчитать стоимость доставки
        </h2>
        <Button
          text="Посылка"
          buttonType={isForm ? "filled" : "outline"}
          margin="mt-6"
          onClick={handleToggleForm}
        />
        <Button
          text="Документы"
          buttonType={!isForm ? "filled" : "outline"}
          margin="mt-4"
          onClick={handleToggleForm}
        />
        {isForm && <CalculateForm />}
        {!isForm && <Documents onClick={handleToggleForm} />}
      </section>
      <section className={styles.calculate_pc} id="calculate-pc">
        <h2 className={styles.calculate_pc__heading}>
          Рассчитать стоимость доставки
        </h2>
        <div className="w-full flex items-center justify-center gap-4 mt-25">
          <Button
            text="Посылка"
            buttonType={isForm ? "filled" : "outline"}
            margin="mt-6"
            onClick={handleToggleForm}
          />
          <Button
            text="Документы"
            buttonType={!isForm ? "filled" : "outline"}
            margin="mt-6"
            onClick={handleToggleForm}
          />
        </div>
        {isForm && <CalculateFormPC />}
        {!isForm && <Documents onClick={handleToggleForm} />}
        <InfoScreen />
      </section>
      <div className="w-[90%] lg:w-[86.6%]">
        <FAQList items={calcFaqAccordions} />
      </div>
    </>
  );
};
