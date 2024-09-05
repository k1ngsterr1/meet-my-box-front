import type React from "react";
import styles from "./styles.module.scss";
import card_img from "@assets/card_img.png";
import { cardInfo, type ICardInfo } from "@shared/lib/content/Cards";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
export const ServiceGroup = () => {
  return (
    <div className={styles.service__group}>
      {cardInfo.map((info, index) => (
        <ServiceCard
          key={index}
          title={info.title}
          description={info.description}
        />
      ))}
    </div>
  );
};
export const ServiceCard: React.FC<ICardInfo> = ({ title, description }) => {
  return (
    <div className={styles.service__card}>
      <img
        src={card_img.src}
        alt="card_img"
        className={styles.service__card__img}
      />
      <h3 className={styles.service__card__title}>{title}</h3>
      <Paragraph isCentered margin="mt-4" width="w-5/6">
        {description}
      </Paragraph>
    </div>
  );
};
