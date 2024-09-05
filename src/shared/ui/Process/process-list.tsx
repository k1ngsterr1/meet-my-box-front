import { processList, type IProcessItem } from "@shared/lib/content/Process";
import styles from "./styles.module.scss";
import type React from "react";
import { Paragraph } from "../Paragraph/ui/paragraph";
export const ProcessList = () => {
  return (
    <div className={styles.process__list}>
      {processList.map((item, index) => (
        <ProcessItem
          key={index}
          img={item.img}
          description={item.description}
        />
      ))}
    </div>
  );
};

export const ProcessItem: React.FC<IProcessItem> = ({ img, description }) => {
  return (
    <div className={styles.process__list__item}>
      <img
        src={img.src}
        alt="Process item"
        className={styles.process__list__img}
      />
      <Paragraph isCentered margin="mt-4" width="w-2/3">
        {description}
      </Paragraph>
    </div>
  );
};
