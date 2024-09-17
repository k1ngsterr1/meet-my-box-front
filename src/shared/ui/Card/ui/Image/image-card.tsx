import { type IImageCardItem } from "@shared/lib/content/Process";
import styles from "./styles.module.scss";
import type React from "react";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { baseUrl } from "@shared/lib/hooks/useGetBlock";
export interface INewsCardProps {
  title: string;
  text: string;
  image: any;
  handleClick: () => void;
}
export const ImageCard: React.FC<IImageCardItem> = ({ img, description }) => {
  return (
    <div className={styles.item}>
      <img src={baseUrl + img} alt="image card" className={styles.item__img} />
      <Paragraph isCentered margin="mt-4" width="w-full">
        {description}
      </Paragraph>
    </div>
  );
};
export const NewsCard: React.FC<INewsCardProps> = ({
  title,
  image,
  text,
  handleClick,
}) => {
  return (
    <div className={styles.news_item} onClick={handleClick}>
      <div className="w-full">
        <img
          src={baseUrl + image}
          alt="image card"
          className={styles.news_item__img}
        />
        <h4 className={styles.news_heading}>{title}</h4>
        <Paragraph width="w-[70%]" margin="mt-2">
          {text.length > 70 ? `${text.slice(0, 70)}...` : text}
        </Paragraph>
      </div>
    </div>
  );
};
