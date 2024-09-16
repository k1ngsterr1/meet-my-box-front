import { AboutGroup, AboutGroupPC } from "@shared/ui/Card/ui/About/about-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <>
      <section className={styles.about} id="about-mob">
        <Fade>
          <h3 className={styles.about__heading}>Meet My Box</h3>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph isCentered width="w-[80%]" margin="mt-4">
            Доставка в Россию из любой страны ЕС Мы доставляем посылки в Россию
            и страны СНГ практически из всех стран Европы: Италия, Франция,
            Германия, Испания, Нидерланды, Австрия, Польша, Швейцария,
            Великобритания, Кипр.
          </Paragraph>
        </Fade>
        <AboutGroup />
      </section>
      <section className={styles.about_pc} id="about-pc">
        <Fade>
          <h3 className={styles.about_pc__heading}>Meet My Box</h3>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph isCentered width="w-[60%]" margin="mt-4">
            Доставка в Россию из любой страны ЕС Мы доставляем посылки в Россию
            и страны СНГ практически из всех стран Европы: Италия, Франция,
            Германия, Испания, Нидерланды, Австрия, Польша, Швейцария,
            Великобритания, Кипр.
          </Paragraph>
        </Fade>
        <AboutGroupPC />
      </section>
    </>
  );
};
