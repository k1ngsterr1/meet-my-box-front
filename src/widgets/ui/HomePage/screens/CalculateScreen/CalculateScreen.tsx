// src/components/CalculateScreen.jsx
import { useEffect, useState } from "react";
import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
import { calcFaqAccordions } from "@shared/lib/content/Accordion";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import { Documents } from "@shared/ui/Documents";
import { InfoScreen } from "../../InfoScreen/InfoScreen";
import styles from "./styles.module.scss";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { Loader } from "@widgets/ui/Loader/ui/loader";

export const CalculateScreen = () => {
  const [calculate, setCalculate] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isForm, setIsForm] = useState(true);

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/calculate-blocks/1");
        setCalculate(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlock();
  }, []);

  const handleToggleForm = () => {
    setIsForm(!isForm);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className={styles.calculate} id="calculate-mob">
        <h2 className={styles.calculate__heading}>{calculate.heading}</h2>
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
        {isForm ? <CalculateForm /> : <Documents onClick={handleToggleForm} />}
      </section>
      <section className={styles.calculate_pc} id="calculate-pc">
        <h2 className={styles.calculate_pc__heading}>{calculate.heading}</h2>
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
        {isForm ? (
          <CalculateFormPC />
        ) : (
          <Documents onClick={handleToggleForm} />
        )}
        <InfoScreen />
      </section>
      <div className="w-[90%] lg:w-[86.6%]">
        <FAQList items={calculate.questions} />
      </div>
    </>
  );
};
