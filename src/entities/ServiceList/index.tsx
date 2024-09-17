import { serviceList } from "@shared/lib/content/Process";
import { ImageCard } from "@shared/ui/Card/ui/Image/image-card";
import styles from "./styles.module.scss";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

export const ServiceList = () => {
  return (
    <div className={styles.service__list}>
      {serviceList.map((item, index) => (
        <div className={styles.item}>
          <img
            src={item.img.src}
            alt="image card"
            className={styles.item__img}
          />
          <Paragraph isCentered margin="mt-4" width="w-full">
            {item.description}
          </Paragraph>
        </div>
      ))}
    </div>
  );
};
