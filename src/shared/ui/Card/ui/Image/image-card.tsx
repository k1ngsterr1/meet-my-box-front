import { type IImageCardItem } from "@shared/lib/content/Process";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import type React from "react";
import styles from "./styles.module.scss";
export const ImageCard: React.FC<IImageCardItem> = ({ img, description }) => {
  return (
    <div className={styles.item}>
      <img src={img.src} alt="image card" className={styles.item__img} />
      <Paragraph isCentered margin="mt-4" width="w-full">
        {description}
      </Paragraph>
    </div>
  );
};
