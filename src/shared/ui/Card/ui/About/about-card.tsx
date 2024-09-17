import card_img from "@assets/about_card.png";
import { aboutCard, type IAboutCard } from "@shared/lib/content/About";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import type React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const AboutGroup = () => {
  return (
    <div className={styles.about__card}>
      {aboutCard.map((item, index) => (
        <Fade className="w-full items-center justify-center">
          <AboutItem
            key={index}
            title={item.title}
            description={item.description}
          />
        </Fade>
      ))}
    </div>
  );
};
export const AboutGroupPC = () => {
  return (
    <div className={styles.about_pc__card}>
      {aboutCard.map((item, index) => (
        <div className="flex-1">
          <AboutItemPC
            key={index}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export const AboutItemPC: React.FC<IAboutCard> = ({ title, description }) => {
  return (
    <div className={styles.about_pc__card__item}>
      <img
        src={card_img.src}
        alt="Card img"
        className={styles.about_pc__card__img}
      />
      <span className={styles.about_pc__card__title}>{title}</span>
      <p className={styles.about_pc__card__paragraph}>{description}</p>
      <IconButton
        text="Связаться с нами"
        onClick={() => (window.location.href = "#contacts-pc")}
      />
    </div>
  );
};

export const AboutItem: React.FC<IAboutCard> = ({ title, description }) => {
  return (
    <div className={styles.about__card__item}>
      <img
        src={card_img.src}
        alt="Card img"
        className={styles.about__card__img}
      />
      <span className={styles.about__card__title}>{title}</span>
      <p className={styles.about__card__paragraph}>{description}</p>
      <IconButton
        text="Связаться с нами"
        margin="mt-4"
        onClick={() => (window.location.href = "#contacts-mob")}
      />
    </div>
  );
};
