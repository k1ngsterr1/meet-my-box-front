import styles from "./styles.module.scss";

const PricingTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__head__row}>
          <th className={styles.table__head__cell}>Услуги</th>
          <th className={styles.table__head__cell}>Цена €</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Прием и переупаковка</td>
          <td className={styles.table__body__cell}></td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Посылки до 5 кг</td>
          <td className={styles.table__body__cell}>15€</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Посылки от 5 до 7 кг</td>
          <td className={styles.table__body__cell}>20€</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Посылки от 7 до 9 кг</td>
          <td className={styles.table__body__cell}>25€</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Посылки от 9 до 14 кг</td>
          <td className={styles.table__body__cell}>35€</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>Посылки от 20 до 30 кг</td>
          <td className={styles.table__body__cell}>40€</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTable;
