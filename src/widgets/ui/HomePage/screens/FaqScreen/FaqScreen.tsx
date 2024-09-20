import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import styles from "./styles.module.scss";
import { faqAccordions } from "@shared/lib/content/Accordion";
import { useEffect, useState } from "react";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";

export const FAQScreen = () => {
  const [items, setItems] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/faqs/1");
        setItems(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {items ? (
        <>
          <section className={styles.faq} id="faq">
            <h2 className={styles.faq__heading}>FAQ</h2>
            <FAQList items={items.questions} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
