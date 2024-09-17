import { type IImageCardItem } from "@shared/lib/content/Process";
import type React from "react";
import styles from "./styles.module.scss";
export const ImageCard: React.FC<IImageCardItem> = ({ img, description }) => {
  return (
    <div className={styles.item}>
      <img src={img.src} alt="image card" className={styles.item__img} />
      <span
        className={`w-full mt-4 text-center ${styles.p}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></span>
    </div>
  );
};
