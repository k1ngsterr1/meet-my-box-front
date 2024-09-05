import React, { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faqAccordions,
  type AccordionItem,
} from "@shared/lib/content/Accordion";

export const FAQList = () => {
  return (
    <div className={styles.faq__group}>
      {faqAccordions.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion__item}>
      <div className={styles.accordion__question} onClick={toggleAccordion}>
        <span className={styles.accordion__question__item}>{question}</span>
        <button className={styles.accordion__toggle}>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className={styles.accordion__answer}>
          <p className={styles.accordion__answer__item}>{answer}</p>
        </div>
      )}
    </div>
  );
};
