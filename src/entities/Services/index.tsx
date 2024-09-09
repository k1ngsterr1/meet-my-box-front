import { servicesAccordion } from "@shared/lib/content/ServicesList";
import { AccordionItem } from "@shared/ui/Accordion/faq-accordion";
import styles from "./styles.module.scss";

export const Services = () => {
  return (
    <div className={styles.services_list}>
      {servicesAccordion.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};
