import type React from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
interface Items {
  name: string;
  country: string;
  quantity: number;
  weight: number;
  cost: number;
}
export interface Props {
  name: string;
  email: string;
  departure: string;
  items: Items[];
}

export interface Cards {
  items: Props[];
}
export const ApplicationCards: React.FC<Cards> = ({ items }) => {
  return (
    <div className={styles.application__cards}>
      {items.map((item, index) => (
        <ApplicationCard
          key={index}
          name={item.name}
          departure={item.departure}
          email={item.email}
          items={item.items}
        />
      ))}
    </div>
  );
};

export const ApplicationCard: React.FC<Props> = ({ name, email, items }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className={styles.card}>
      <span className={styles.card__name}>{name}</span>
      <span className={styles.card__email}>
        Email:{" "}
        <a href={`mailto:${email}`} className="text-main">
          {email}
        </a>
      </span>
      {!show && (
        <ul className={styles.card__items}>
          <li className={styles.card__items__item}>
            <span className={styles.card__items__item__heading}>
              Предмет №1
            </span>
            <span className={styles.card__items__text}>
              Название: {items[0].name}
            </span>
          </li>
        </ul>
      )}

      {show && (
        <ul className={styles.card__items}>
          {items.map((item, index) => (
            <li className={styles.card__items__item}>
              <span className={styles.card__items__item__heading}>
                Предмет №{index + 1}
              </span>
              <span className={styles.card__items__text}>
                Название: {item.name}
              </span>
              <span className={styles.card__items__text}>
                Страна: {item.country}
              </span>
              <span className={styles.card__items__text}>
                Количество: {item.quantity}, шт
              </span>
              <span className={styles.card__items__text}>
                Вес: {item.weight} кг
              </span>
              <span className={styles.card__items__text}>
                Цена: {item.cost}
                {"€"}
              </span>
            </li>
          ))}
        </ul>
      )}
      <Button
        text={!show ? "Подробнее" : "Закрыть"}
        buttonType="filled"
        onClick={toggleShow}
        margin="mt-4"
      />
    </div>
  );
};
