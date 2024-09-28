import type { DateArray, TimeArray } from "@entities/RatesList";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@shared/ui/Button/ui/button";
import { InfoScreen } from "@widgets/ui/HomePage/InfoScreen/InfoScreen";
import type React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
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
  const [showInfo, setShowInfo] = useState(false);
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
        <button
          className={styles.btn}
          onClick={() => {
            window.location.href = "/packages/add";
          }}
        >
          {price}
        </button>
      </div>
      <div className="absolute bottom-[-15px]">
        <span
          onClick={() => {
            setShowInfo(!showInfo);
          }}
          className="bg-main text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-secondary transition transform hover:scale-105"
        >
          Details
        </span>
      </div>
      {showInfo && <InfoScreen />}
    </div>
  );
};
export const RatesCardPC: React.FC<Props> = ({ day, price, date, url }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={styles.rates_pc__list__card}>
      <div className={styles.rates_pc__list__card__time}>
        <span className={styles.rates_pc__list__card__time1}>
          {day.estimateNumber}
        </span>
        <span className={styles.rates_pc__list__card__time2}>
          {day.estimateTime}
        </span>
        <span className={styles.rates_pc__list__card__time3}>ESTIMATED</span>
      </div>
      <div className="flex flex-col justify-between items-center mt-8 mb-8">
        <img
          src={url}
          alt="logo_delivery"
          className={styles.rates_pc__list__card__img}
        />
        <span className={styles.rates_pc__list__card__time2}>
          Компания доставки
        </span>
      </div>

      <div className="flex ml-12 mt-8 justify-between">
        <FontAwesomeIcon icon={faClock} className="mt-1 mr-4" size="lg" />
        <time
          dateTime={date.datetime}
          className={styles.rates_pc__list__card__date}
        >
          Прибытие: <br />
          {date.text}
        </time>
      </div>

      <div className="flex flex-col justify-between items-end mr-10 mt-8 mb-8 ">
        <span className={styles.rates_pc__list__card__price}>{price}</span>
        <Button
          text="Заказать"
          buttonType="filled"
          onClick={() => {
            window.location.href = "/packages/add";
          }}
        ></Button>
      </div>
    </div>
  );
};
