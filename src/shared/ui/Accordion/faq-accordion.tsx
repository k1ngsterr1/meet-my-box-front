import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type AccordionItem as AccordionItemType } from "@shared/lib/content/Accordion";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  items: AccordionItemType[];
}

export const FAQList: React.FC<Props> = ({ items }) => {
  return (
    <div className={styles.faq__group}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export const AccordionItem: React.FC<AccordionItemType> = ({
  question,
  answer,
}) => {
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
          <p
            className={styles.accordion__answer__item}
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        </div>
      )}
    </div>
  );
};
export const AccordionItemText: React.FC<AccordionItemType> = ({
  question,
  answer,
}) => {
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
