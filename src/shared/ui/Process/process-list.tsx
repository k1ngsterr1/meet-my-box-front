import { processList, type IProcessItem } from "@shared/lib/content/Process";
import type React from "react";
import { Fade } from "react-awesome-reveal";
import { Paragraph } from "../Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
export const ProcessList = () => {
  return (
    <div className={styles.process__list}>
      {processList.map((item, index) => (
        <Fade className="w-full flex items-center justify-center">
          <ProcessItem
            key={index}
            img={item.img}
            description={item.description}
          />
        </Fade>
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
