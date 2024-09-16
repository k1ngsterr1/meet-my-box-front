import { PackageDetails } from "@entities/PackageDetails";
import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
import styles from "./styles.module.scss";

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
  user: {
    lastName: string | "Неизвестно";
    firstName: string | "Неизвестно";
    phoneNumber: string;
  };
  departure: string;
  contacts: string;
  items: Packages[];
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
              {(item.user.firstName ? item.user.firstName : "Неизвестно") +
                " " +
                (item.user.lastName ? item.user.lastName : "Неизвестно")}
            </span>
          </div>
          <div className={styles.applications__list__date}>
            Дата отправки:
            <span className="text-main"> {item.departure}</span>
          </div>
          <div className={styles.applications__list__date}>
            Контакты:
            <span className="text-main">
              {item.user.phoneNumber ? item.user.phoneNumber : "Неизвестно"}
            </span>
          </div>
          {show && (
            <PackageDetails
              items={item.items}
              onClick={() => {
                setShow(false);
              }}
            />
          )}
          <Button
            text="Подробнее"
            buttonType="filled"
            margin="mt-4"
            onClick={() => setShow(true)}
          />
        </div>
      ))}
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
                {(item.user.firstName ? item.user.firstName : "Неизвестно") +
                  " " +
                  (item.user.lastName ? item.user.lastName : "Неизвестно")}
              </span>
            </div>
            <div className="mt-2">
              <div className={styles.applications_pc__list__date}>
                Дата отправки:
                <span className="text-main"> {item.departure}</span>
              </div>
              <div className={styles.applications_pc__list__date}>
                Контакты:
                <span className="text-main">
                  {" "}
                  {item.user.phoneNumber ? item.user.phoneNumber : "Неизвестно"}
                </span>
              </div>
            </div>
          </div>
          {show && (
            <PackageDetails items={item.items} onClick={() => setShow(false)} />
          )}
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
