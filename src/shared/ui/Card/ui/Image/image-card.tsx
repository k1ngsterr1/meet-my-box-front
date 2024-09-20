import { type IImageCardItem } from "@shared/lib/content/Process";
import type React from "react";
import styles from "./styles.module.scss";
import { baseUrl } from "@shared/lib/hooks/useGetBlock";
import parse from "html-react-parser";

export const ImageCard: React.FC<IImageCardItem> = ({ img, description }) => {
  return (
    <div className={styles.item}>
      <img src={baseUrl + img} alt="image card" className={styles.item__img} />
      <span className={`w-full mt-4 text-center ${styles.p}`}>
        {parse(description)}
      </span>
    </div>
  );
};
