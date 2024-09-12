import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";

interface Packages {
  id: number;
  name: string;
  country: string;
  quantity: number;
  weight: number;
  cost: number;
}

export interface ApplicationProps {
  id: number;
  name: string;
  departure: string;
  contacts: string;
  packages: Packages[];
}

interface ApplicationsProps {
  items: ApplicationProps[];
}

export const ApplicationCards: React.FC<ApplicationsProps> = ({ items }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.applications__list}>
      {items.map((item) => (
        <div key={item.id} className={styles.applications__list__info}>
          <span className={styles.applications__list__id}>
            Посылка #{item.id}
          </span>
          <div className={styles.applications__list__name}>
            <div className={styles.applications__list__name__circle} />
            <span className={styles.applications__list__name__text}>
              {item.name}
            </span>
          </div>
          <div className={styles.applications__list__date}>
            Дата отправки:
            <span className="text-main"> {item.departure}</span>
          </div>
          <div className={styles.applications__list__date}>
            Контакты:
            <span className="text-main"> {item.contacts}</span>
          </div>
          <Button
            text="Подробнее"
            buttonType="filled"
            margin="mt-4"
            onClick={() => setShow(true)}
          />
        </div>
      ))}
      {show && <a></a>}
    </div>
  );
};
export const ApplicationsCardsPC: React.FC<ApplicationsProps> = ({ items }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.applications_pc__list}>
      {items.map((item) => (
        <div key={item.id} className={styles.applications_pc__list__info}>
          <div key={item.id} className={styles.applications_pc__list__left}>
            <span className={styles.applications_pc__list__id}>
              Посылка #{item.id}
            </span>
            <div className={styles.applications_pc__list__name}>
              <div className={styles.applications_pc__list__name__circle} />
              <span className={styles.applications_pc__list__name__text}>
                {item.name}
              </span>
            </div>
            <div className="mt-2">
              <div className={styles.applications_pc__list__date}>
                Дата отправки:
                <span className="text-main"> {item.departure}</span>
              </div>
              <div className={styles.applications_pc__list__date}>
                Дата получения:
                <span className="text-main"> {item.contacts}</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end w-[50%]">
            <button
              children="Подробнее"
              className={styles.button}
              onClick={() => setShow(true)}
            />
          </div>
        </div>
      ))}
      {show && <a></a>}
    </div>
  );
};
