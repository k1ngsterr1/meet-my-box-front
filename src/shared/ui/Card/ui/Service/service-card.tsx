import card_img from "@assets/card_img.png";
import { type ICardInfo } from "@shared/lib/content/Cards";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import type React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
interface Items {
  items: any;
}
export const ServiceGroup: React.FC<Items> = ({ items }: any) => {
  return (
    <div className={styles.service__group}>
      <Fade className="w-full flex justify-center items-center">
        <ServiceCard title={""} description={items.card_1} />
      </Fade>
      <Fade className="w-full flex justify-center items-center">
        <ServiceCard title={""} description={items.card_2} />
      </Fade>
      <Fade className="w-full flex justify-center items-center">
        <ServiceCard title={""} description={items.card_3} />
      </Fade>
    </div>
  );
};

export const ServiceGroupPC: React.FC<Items> = ({ items }: any) => {
  return (
    <div className={styles.service_pc__group}>
      <Fade className="flex justify-center items-center">
        <ServiceCardPC title={""} description={items.card_1} />
      </Fade>
      <Fade className="flex justify-center items-center">
        <ServiceCardPC title={""} description={items.card_2} />
      </Fade>
      <Fade className="flex justify-center items-center">
        <ServiceCardPC title={""} description={items.card_3} />
      </Fade>
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
