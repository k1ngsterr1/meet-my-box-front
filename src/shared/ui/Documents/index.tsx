import React from "react";
import Button from "../Button/ui/button";
import styles from "./styles.module.scss";
interface Props {
  onClick: () => void;
}

export const Documents: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.documents_pc}>
      <p className={styles.documents_pc__p}>Максимальный вес: 10 кг</p>
      <p className={styles.documents_pc__p}>
        Длина + Высота + Ширина: <strong>&lt; 150 см</strong>
      </p>
      <p className={styles.documents_pc__p}>
        Самая длинная сторона не должна превышать: 100 см
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
