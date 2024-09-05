import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import styles from "./styles.module.scss";
export const FAQScreen = () => {
  return (
    <div className={styles.faq}>
      <h2 className={styles.faq__heading}>FAQ</h2>
      <FAQList />
    </div>
  );
};
