import type React from "react";
import styles from "./styles.module.scss";
import { RatesCard, RatesCardPC } from "@features/RatesCard";
export type TimeArray = {
  estimateNumber: string;
  estimateTime: string;
};
export type DateArray = {
  text: string;
  datetime: string;
};
interface Props {
  days: TimeArray[];
  prices: string[];
  dates: DateArray[];
  urls: string[];
}
export const RatesList: React.FC<Props> = ({ days, prices, dates, urls }) => {
  return (
    <div className={styles.rates__list}>
      {days.map((item, index) =>
        prices[index] !== undefined &&
        dates[index] !== undefined &&
        urls[index] !== undefined ? (
          <RatesCard
            day={item}
            price={prices[index]}
            date={dates[index]}
            url={urls[index]}
            key={index}
          />
        ) : null
      )}
    </div>
  );
};
export const RatesListPC: React.FC<Props> = ({ days, prices, dates, urls }) => {
  return (
    <div className={styles.rates__list}>
      {days.map((item, index) =>
        prices[index] !== undefined &&
        dates[index] !== undefined &&
        urls[index] !== undefined ? (
          <RatesCardPC
            day={item}
            price={prices[index]}
            date={dates[index]}
            url={urls[index]}
            key={index}
          />
        ) : null
      )}
    </div>
  );
};
