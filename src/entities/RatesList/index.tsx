import type React from "react";
import styles from "./styles.module.scss";
import { RatesCard, RatesCardPC } from "@features/RatesCard";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
import { InfoScreen } from "@widgets/ui/HomePage/InfoScreen/InfoScreen";
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
        urls[index] !== undefined &&
        index < 1 ? (
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
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={styles.rates__list}>
      {days.map((item, index) =>
        prices[index] !== undefined &&
        dates[index] !== undefined &&
        urls[index] !== undefined &&
        index < 1 ? (
          <>
            <RatesCardPC
              day={item}
              price={prices[index]}
              date={dates[index]}
              url={urls[index]}
              key={index}
            />
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
          </>
        ) : null
      )}
    </div>
  );
};
