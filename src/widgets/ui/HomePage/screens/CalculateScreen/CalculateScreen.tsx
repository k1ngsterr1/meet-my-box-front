import {
  CalculateForm,
  CalculateFormPC,
} from "@features/Form/Calculate/calculate-form";
import { calcFaqAccordions } from "@shared/lib/content/Accordion";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import { Documents } from "@shared/ui/Documents";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";

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
  };
  return (
    <>
      {calculate ? (
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
            {isForm && <CalculateForm text={calculate.form_text} />}
            {!isForm && <Documents onClick={handleToggleForm} />}
          </section>
          <section className={styles.calculate_pc} id="calculate-pc">
            <h2 className={styles.calculate_pc__heading}>
              {calculate.heading}
            </h2>
            <div className="w-full flex items-center justify-center gap-4 mt-4">
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
            </div>
            {isForm && <CalculateFormPC text={calculate.form_text} />}
            {!isForm && <Documents onClick={handleToggleForm} />}
          </section>
          <div className="w-[90%] lg:w-[86.6%]">
            <FAQList items={calculate.questions} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
