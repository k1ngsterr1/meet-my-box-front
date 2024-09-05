import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { AboutGroup } from "@shared/ui/Card/ui/About/about-card";
export const AboutScreen = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__heading}>Meet My Box это:</h3>
      <Paragraph isCentered width="w-4/5" margin="mt-4">
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </Paragraph>
      <AboutGroup />
    </div>
  );
};
