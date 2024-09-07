import { AboutGroup } from "@shared/ui/Card/ui/About/about-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const AboutScreen = () => {
  return (
    <>
      <div className={styles.about}>
        <Fade>
          <h3 className={styles.about__heading}>Meet My Box это:</h3>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph isCentered width="w-4/5" margin="mt-4">
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </Paragraph>
        </Fade>
        <AboutGroup />
      </div>
      <div className={styles.about_pc}>
        <Fade>
          <h3 className={styles.about_pc__heading}>Meet My Box это:</h3>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph isCentered width="w-[40%]" margin="mt-4">
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </Paragraph>
        </Fade>
        <AboutGroup />
      </div>
    </>
  );
};
