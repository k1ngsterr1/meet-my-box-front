import React from "react";
import Button from "../Button/ui/button";
import styles from "./styles.module.scss";
interface Props {
  onClick: () => void;
}

export const Documents: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.documents_pc}>
      <p className={styles.documents_pc__p}>Вес максимум 1 кг</p>
      <p className={styles.documents_pc__p}>Сумма трех сторон максимум 85 см</p>
      <p className={styles.documents_pc__p}>
        Самая длинная сторона максимум 50 см
      </p>
      <p className={styles.documents_pc__p}>
        Примеры подходящих конвертов на{" "}
        <a
          href="https://www.amazon.it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-main font-bold"
        >
          amazon.it
        </a>
      </p>
      <Button
        text="Узнать цену"
        buttonType="filled"
        margin="mt-4"
        onClick={onClick}
      />
    </div>
  );
};
