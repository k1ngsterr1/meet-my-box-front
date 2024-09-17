import tracking from "@assets/track.png";
import Button from "@shared/ui/Button/ui/button";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import type React from "react";
import { baseUrl } from "@shared/lib/hooks/useGetBlock";
interface Props {
  title: string;
  description: string;
  img: any;
}
export const TrackBlock: React.FC<Props> = ({ title, description, img }) => {
  return (
    <div className={styles.track__block}>
      <div className={styles.track__container}>
        <Fade>
          <span className={styles.track__block__title}>{title}</span>
        </Fade>
        <p className={styles.track__block__description}>{description}</p>
        <Button text="Отследить" buttonType="filled" margin="mt-10" />
      </div>
      <img
        src={baseUrl + img.data.attributes.url}
        alt=""
        className={styles.track__block__img}
      />
    </div>
  );
};
export const TrackBlockPC: React.FC<Props> = ({ title, description, img }) => {
  return (
    <div className={styles.track_pc__block}>
      <img
        src={baseUrl + img.data.attributes.url}
        alt=""
        className={styles.track_pc__block__img}
      />
      <div className={styles.track_pc__container}>
        <Fade>
          <span className={styles.track_pc__block__title}>{title}</span>
        </Fade>
        <Fade>
          <p className={styles.track_pc__block__description}>{description}</p>
        </Fade>
        <Button
          text="Отследить"
          buttonType="filled"
          margin="mt-6"
          onClick={() => window.open("https://parcelsapp.com/en/tracking/")}
        />
      </div>
    </div>
  );
};
