import type React from "react";
import styles from "./styles.module.scss";
import { aboutCard, type IAboutCard } from "@shared/lib/content/About";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import card_img from "@assets/about_card.png";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
export const AboutGroup = () => {
  return (
    <div className={styles.about__card}>
      {aboutCard.map((item, index) => (
        <AboutItem
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
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
      <Paragraph isCentered width="w-5/6" margin="mt-4">
        {description}
      </Paragraph>
      <IconButton text="Связаться с нами" margin="mt-6" />
    </div>
  );
};
