import { type IImageCardItem } from "@shared/lib/content/Process";
import styles from "./styles.module.scss";
import type React from "react";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
export const ImageCard: React.FC<IImageCardItem> = ({ img, description }) => {
  return (
    <div className={styles.item}>
      <img src={img.src} alt="image card" className={styles.item__img} />
      <Paragraph isCentered margin="mt-4" width="w-2/3">
        {description}
      </Paragraph>
    </div>
  );
};
