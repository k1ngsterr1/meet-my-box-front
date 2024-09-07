import React from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";

export interface PackageProps {
  id: number;
  status: string;
  departure: string;
  arrival: string;
}

interface PackagesProps {
  items: PackageProps[];
}

export const Packages: React.FC<PackagesProps> = ({ items }) => {
  return (
    <div className={styles.packages__list}>
      {items.map((item, index) => (
        <div key={item.id} className={styles.packages__list__info}>
          <span className={styles.packages__list__id}>
            Посылка #{index + 1}
          </span>
          <div className={styles.packages__list__status}>
            <div className={styles.packages__list__status__circle} />
            <span className={styles.packages__list__status__text}>
              {item.status}
            </span>
          </div>
          <div className={styles.packages__list__date}>
            Дата отправки:
            <span className="text-main"> {item.departure}</span>
          </div>
          <div className={styles.packages__list__date}>
            Дата получения:
            <span className="text-main"> {item.arrival}</span>
          </div>
          <Button text="Отследить" buttonType="filled" margin="mt-4" />
        </div>
      ))}
    </div>
  );
};
