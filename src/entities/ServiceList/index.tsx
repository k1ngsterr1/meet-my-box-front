import { serviceList } from "@shared/lib/content/Process";
import styles from "./styles.module.scss";
import { ImageCard } from "@shared/ui/Card/ui/Image/image-card";
export const ServiceList = () => {
  return (
    <div className={styles.service__list}>
      {serviceList.map((item, index) => (
        <ImageCard key={index} img={item.img} description={item.description} />
      ))}
    </div>
  );
};
