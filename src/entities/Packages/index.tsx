import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export interface PackageProps {
  id: number;
  status: string;
  departure: string;
  arrival: string;
  items: IItem[];
  courier: string;
  insurance: string;
  payed: boolean;
}

interface IItem {
  cost: number;
  name: string;
  weight: number;
  country: string;
  quantity: number;
}

interface PackagesProps {
  items: PackageProps[];
}

export const Packages: React.FC<PackagesProps> = ({ items }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  return (
    <div className={styles.packages__list}>
      {items.map((item, index) => (
        <div key={item.id} className=" flex gap-3 flex-col w-full">
          <div
            className={styles.packages__list__info}
            style={{ position: "relative", width: "100%" }}
          >
            <span className={styles.packages__list__id}>
              Посылка #{index + 1}
            </span>
            <div className={styles.packages__list__status}>
              <div className={styles.packages__list__status__circle} />
              <span className={styles.packages__list__status__text}>
                {item.status === "Pending" ? "Отправлена" : "Получено"}
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
            <Button
              text="Отследить"
              buttonType="filled"
              margin="mt-4"
              onClick={() => window.open("https://parcelsapp.com/en/tracking/")}
            />
            <div className="absolute bottom-[-15px] right-[0]">
              <span
                onClick={() => {
                  setSelectedCardIndex(
                    selectedCardIndex === index ? null : index
                  );
                }}
                className="bg-main cursor-pointer hover:opacity-70 duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition transform hover:scale-105"
              >
                Details
              </span>
            </div>
          </div>
          {selectedCardIndex === index && (
            <div
              className={styles.packages_pc__list__info}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>Курьер: {item.courier}</p>
              <p>Страховка: {item.insurance}</p>
              <p>Дата отправки: {item.departure}</p>
              <p>Оплачено: {item.payed ? "Да" : "Нет"}</p>
              <p>Количество предметов: {item.items.length}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export const PackagesPC: React.FC<PackagesProps> = ({ items }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  console.log("items:", items);
  return (
    <div className={styles.packages_pc__list} style={{ gap: "3rem" }}>
      {items.map((item, index) => (
        <div key={item.id} className=" flex gap-3 flex-col">
          <div
            className={styles.packages_pc__list__info}
            style={{ position: "relative" }}
          >
            <div key={item.id} className={styles.packages_pc__list__left}>
              <span className={styles.packages_pc__list__id}>
                Посылка #{index + 1}
              </span>
              <div className={styles.packages_pc__list__status}>
                <div className={styles.packages_pc__list__status__circle} />
                <span className={styles.packages_pc__list__status__text}>
                  {item.status === "Pending" ? "Отправлена" : "Получено"}
                </span>
              </div>
              <div className="mt-2">
                <div className={styles.packages_pc__list__date}>
                  Дата отправки:
                  <span className="text-main"> {item.departure}</span>
                </div>
                <div className={styles.packages_pc__list__date}>
                  Дата получения:
                  <span className="text-main"> {item.arrival}</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end w-[50%]">
              <button
                children="Отследить"
                className={styles.button}
                onClick={() =>
                  window.open("https://parcelsapp.com/en/tracking/")
                }
              />
            </div>
            <div className="absolute bottom-[-15px] right-[0]">
              <span
                onClick={() => {
                  setSelectedCardIndex(
                    selectedCardIndex === index ? null : index
                  );
                }}
                className="bg-main cursor-pointer hover:opacity-70 duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition transform hover:scale-105"
              >
                Details
              </span>
            </div>
          </div>
          {selectedCardIndex === index && (
            <div
              className={styles.packages_pc__list__info}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p>Курьер: {item.courier}</p>
              <p>Страховка: {item.insurance}</p>
              <p>Дата отправки: {item.departure}</p>
              <p>Оплачено: {item.payed ? "Да" : "Нет"}</p>
              <p>Предметы:</p>
              <ul>
                {item.items.map((product) => (
                  <li key={product.name} className="text-sm list-decimal ml-4">
                    <p>Название: {product.name}</p>
                    <ul className="list-disc ml-4">
                      <li>Вес: {product.weight}</li>
                      <li>Количество: {product.quantity}</li>
                      <li>Страна: {product.country}</li>
                      <li>Цена: {product.cost}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
