import type React from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
import { AddressDetails } from "@entities/AddressDetails";
export interface AddressProps {
  id: number;
  type: "receiver" | "sender";
  full_name: string;
  mobile_number: string;
  street: string;
  house: string;
  building: string;
  apartment: string;
  city: string;
  postal_code: string;
}
interface Items {
  items: AddressProps[];
}
export const Address: React.FC<Items> = ({ items }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.packages__list}>
      {items.map((item, index) => (
        <div key={index} className={styles.packages__list__info}>
          <span className={styles.packages__list__id}>
            {item.full_name || "Неизвестно"}
          </span>
          <div className={styles.packages__list__status}>
            <div className={styles.packages__list__status__circle} />
            <span className={styles.packages__list__status__text}>
              {item.type}
            </span>
          </div>
          <div className={styles.packages__list__date}>
            Номер телефона:
            <span className="text-main"> {item.mobile_number}</span>
          </div>
          <div className={styles.packages__list__date}>
            Город:
            <span className="text-main"> {item.city}</span>
          </div>
          {show && (
            <AddressDetails items={items} onClick={() => setShow(false)} />
          )}
          <Button
            text="Подробнее"
            buttonType="filled"
            margin="mt-4"
            onClick={() => window.open("https://parcelsapp.com/en/tracking/")}
          />
        </div>
      ))}
    </div>
  );
};
export const AddressPC: React.FC<Items> = ({ items }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.packages_pc__list}>
      {items.map((item, index) => (
        <div key={index} className={styles.packages_pc__list__info}>
          <div className={styles.packages_pc__list__left}>
            <span className={styles.packages_pc__list__id}>
              {item.full_name || "Неизвестно"}
            </span>
            <div className={styles.packages_pc__list__status}>
              <div className={styles.packages_pc__list__status__circle} />
              <span className={styles.packages_pc__list__status__text}>
                {item.type !== "receiver" ? "Получатель" : "Отправитель"}
              </span>
            </div>
            <div className="mt-2">
              <div className={styles.packages_pc__list__date}>
                Номер телефона:
                <span className="text-main"> {item.mobile_number}</span>
              </div>
              <div className={styles.packages_pc__list__date}>
                Город:
                <span className="text-main"> {item.city}</span>
              </div>
            </div>
          </div>
          {show && (
            <AddressDetails items={items} onClick={() => setShow(false)} />
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
    </div>
  );
};
