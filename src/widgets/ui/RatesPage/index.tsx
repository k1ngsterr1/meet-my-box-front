import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { RatesList, RatesListPC } from "@entities/RatesList";
export const RatesPage = () => {
  const [showInfo, setShowInfo] = useState();
  const [rates, setRates] = useState<any>(null);
  useEffect(() => {
    const fetchedRates = () => {
      const all_rates = localStorage.getItem("rates");
      if (all_rates) {
        setRates(JSON.parse(all_rates));
      }
    };

    fetchedRates(); // Call the function to fetch rates
  }, []);
  return (
    <>
      <div className={styles.rates}>
        <h2 className={styles.rates__heading}>Информация о доставках</h2>
        {rates ? (
          <RatesList
            days={rates.days}
            prices={rates.price}
            dates={rates.dates}
            urls={rates.urls}
          />
        ) : (
          <></>
        )}
        {}
      </div>
      <div className={styles.rates_pc}>
        <h2 className={styles.rates_pc__heading}>Информация о доставках</h2>
        {rates ? (
          <RatesListPC
            days={rates.days}
            prices={rates.price}
            dates={rates.dates}
            urls={rates.urls}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
