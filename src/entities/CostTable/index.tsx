import styles from "./styles.module.scss";

const PricingTable = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__head__row}>
          <th className={styles.table__head__cell}>Стоимость</th>
          <th className={styles.table__head__cell}>Вес</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>36€</td>
          <td className={styles.table__body__cell}>1.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>38€</td>
          <td className={styles.table__body__cell}>2.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>42€</td>
          <td className={styles.table__body__cell}>3.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>44€</td>
          <td className={styles.table__body__cell}>4.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>47€</td>
          <td className={styles.table__body__cell}>5.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>48€</td>
          <td className={styles.table__body__cell}>6.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>51€</td>
          <td className={styles.table__body__cell}>7.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>54€</td>
          <td className={styles.table__body__cell}>8.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>56€</td>
          <td className={styles.table__body__cell}>9.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>58€</td>
          <td className={styles.table__body__cell}>10.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>63€</td>
          <td className={styles.table__body__cell}>11.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export const PricingTableExpress = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
        <tr className={styles.table__head__row}>
          <th className={styles.table__head__cell}>Стоимость</th>
          <th className={styles.table__head__cell}>Вес</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>39€</td>
          <td className={styles.table__body__cell}>0.50 - 1.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>43€</td>
          <td className={styles.table__body__cell}>1.50 - 2.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>50€</td>
          <td className={styles.table__body__cell}>2.50 - 3.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>57€</td>
          <td className={styles.table__body__cell}>3.50 - 4.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>60€</td>
          <td className={styles.table__body__cell}>4.50 - 5.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>65€</td>
          <td className={styles.table__body__cell}>5.50 - 6.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>70€</td>
          <td className={styles.table__body__cell}>6.50 - 7.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>75€</td>
          <td className={styles.table__body__cell}>7.50 - 8.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>79€</td>
          <td className={styles.table__body__cell}>8.50 - 9.00</td>
        </tr>
        <tr className={styles.table__body__row}>
          <td className={styles.table__body__cell}>82€</td>
          <td className={styles.table__body__cell}>9.50 - 10.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTable;
