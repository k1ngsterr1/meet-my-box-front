import { Services } from "@entities/Services";
import styles from "./styles.module.scss";

export const RulesPage = () => {
  return (
    <section className={styles.rules}>
      <h1 className={styles.rules__heading}>Условия и правила перевозки</h1>
      <p className={styles.rules__paragraph}>
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </p>
      <Services />
    </section>
  );
};
