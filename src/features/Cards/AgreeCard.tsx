import React from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";

export const AgreeCard = ({ onAgreeClick, toggle1, toggle2 }: any) => {
  const handleClick = () => {
    onAgreeClick();
  };

  return (
    <div className={styles.card}>
      <div className={styles.agree_box}>
        <div className={styles["box--agree"]}>
          <label className={styles["box--agree__container"]}>
            <input type="checkbox" className={styles.input} onClick={toggle1} />
            <span className={styles.checkmark}></span>
            Даю согласие на обработку{" "}
            <a
              href="#"
              className={styles.link}
              onClick={(e) => e.stopPropagation()}
            >
              персональный данных
            </a>
          </label>
        </div>
        <div className={styles["box--agree"]}>
          <label className={styles["box--agree__container"]}>
            <input type="checkbox" className={styles.input} onClick={toggle2} />
            <span className={styles.checkmark}></span>
            Принимаю пользовательское соглашение
          </label>
        </div>
      </div>
      <Button text="Закончить" buttonType="filled" onClick={onAgreeClick} />
    </div>
  );
};
