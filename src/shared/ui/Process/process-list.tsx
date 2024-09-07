import { processList } from "@shared/lib/content/Process";
import { ImageCard } from "../Card/ui/Image/image-card";
import styles from "./styles.module.scss";
export const ProcessList = () => {
  return (
    <div className={styles.process__list}>
      {processList.map((item, index) => (
        <ImageCard key={index} img={item.img} description={item.description} />
      ))}
    </div>
  );
};
