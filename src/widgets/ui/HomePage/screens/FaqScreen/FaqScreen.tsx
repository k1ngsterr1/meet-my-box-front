import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import styles from "./styles.module.scss";
import { faqAccordions } from "@shared/lib/content/Accordion";

export const FAQScreen = () => {
  return (
    <section className={styles.faq} id="faq">
      <h2 className={styles.faq__heading}>FAQ</h2>
      <FAQList items={faqAccordions} />
    </section>
  );
};
