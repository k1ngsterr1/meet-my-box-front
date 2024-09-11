import styles from "./styles.module.scss";
export const CourierCard = ({ onCourierClick }: any) => {
  const handleClick = (value: boolean) => {
    onCourierClick(value);
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.courier__heading}>
        Нужен ли курьер, чтобы забрать посылку?
      </h3>
      <div className={styles.answer}>
        <div className={styles.box}>
          <label className={styles.box__container}>
            <input
              type="checkbox"
              className={styles.input}
              onClick={() => handleClick(true)}
            />
            <span className={styles.checkmark}></span>
            Да
          </label>
        </div>
        <div className={styles.box}>
          <label className={styles.box__container}>
            <input
              type="checkbox"
              className={styles.input}
              onClick={() => handleClick(false)}
            />
            <span className={styles.checkmark}></span>
            Нет
          </label>
        </div>
      </div>
    </div>
  );
};
