import card_img from "@assets/card_img.png";
import { cardInfo, type ICardInfo } from "@shared/lib/content/Cards";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import type React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const ServiceGroup = () => {
  return (
    <div className={styles.service__group}>
      {cardInfo.map((info, index) => (
        <Fade className="w-full flex justify-center items-center">
          <ServiceCard
            key={index}
            title={info.title}
            description={info.description}
          />
        </Fade>
      ))}
    </div>
  );
};

export const ServiceGroupPC = () => {
  return (
    <div className={styles.service_pc__group}>
      {cardInfo.map((info, index) => (
        <Fade className="flex justify-center items-center">
          <ServiceCardPC
            key={index}
            title={info.title}
            description={info.description}
          />
        </Fade>
      ))}
    </div>
  );
};
export const ServiceCardPC: React.FC<ICardInfo> = ({ title, description }) => {
  return (
    <div className={styles.service_pc__card}>
      <img
        src={card_img.src}
        alt="card_img"
        className={styles.service_pc__card__img}
      />
      <h3 className={styles.service_pc__card__title}>{title}</h3>
      <Paragraph isCentered margin="mt-4" width="w-5/6">
        {description}
      </Paragraph>
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
