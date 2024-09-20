import type { DateArray, TimeArray } from "@entities/RatesList";
import styles from "./styles.module.scss";
import type React from "react";
import Button from "@shared/ui/Button/ui/button";
interface Props {
  day: TimeArray;
  price: string;
  date: DateArray;
  url: string;
}
const translateTime = {
  DAYS: "Дней",
  HOURS: "Часов",
  MONTHS: "Месяцев",
  WEEKS: "Недель",
  DAY: "День",
  HOUR: "Час",
  MONTH: "Месяц",
  WEEK: "Неделя",
};
export const RatesCard: React.FC<Props> = ({ day, price, date, url }) => {
  return (
    <div className={styles.rates__list__card}>
      <div className={styles.rates__list__card__left}>
        <span className={styles.rates__list__card__time}>
          {day.estimateNumber} {day.estimateTime}
        </span>
        <time
          dateTime={date.datetime}
          className={styles.rates__list__card__date}
        >
          Прибытие: <br />
          {date.text}
        </time>
      </div>
      <div className={styles.rates__list__card__right}>
        <img
          src={url}
          alt="logo_delivery"
          className={styles.rates__list__card__img}
        />
        <button className={styles.btn}>{price}</button>
      </div>
    </div>
  );
};
export const RatesCardPC: React.FC<Props> = ({ day, price, date, url }) => {
  return (
    <div className={styles.rates_pc__list__card}>
      <div className={styles.rates_pc__list__card__time}>
        <span className={styles.rates_pc__list__card__time1}>
          {day.estimateNumber}
        </span>
        <span className={styles.rates_pc__list__card__time2}>
          {day.estimateTime}
        </span>
      </div>
      <img
        src={url}
        alt="logo_delivery"
        className={styles.rates_pc__list__card__img}
      />
      <div className="flex ml-12 mt-12">
        <time
          dateTime={date.datetime}
          className={styles.rates_pc__list__card__date}
        >
          Прибытие: <br />
          {date.text}
        </time>
      </div>

      <div className="flex flex-col justify-evenly items-center mr-10">
        <span className={styles.rates_pc__list__card__price}>{price}</span>
        <Button text="Заказать" buttonType="filled"></Button>
      </div>
    </div>
  );
};
