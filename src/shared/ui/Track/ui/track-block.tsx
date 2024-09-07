import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import tracking from "@assets/track.png";
import Button from "@shared/ui/Button/ui/button";
import { Fade } from "react-awesome-reveal";
export const TrackBlock = () => {
  return (
    <div className={styles.track__block}>
      <div className={styles.track__container}>
        <Fade>
          <span className={styles.track__block__title}>
            Здесь вы можете отследить вашу{" "}
            <span className="text-main">посылку</span>
          </span>
        </Fade>
        <p className={styles.track__block__description}>
          По ссылке ниже вы можете узнать где сейчас Ваша посылка
        </p>
        <Button text="Отследить" buttonType="filled" margin="mt-10" />
      </div>
      <img src={tracking.src} alt="" className={styles.track__block__img} />
    </div>
  );
};
export const TrackBlockPC = () => {
  return (
    <div className={styles.track_pc__block}>
      <img src={tracking.src} alt="" className={styles.track_pc__block__img} />
      <div className={styles.track_pc__container}>
        <Fade>
          <span className={styles.track_pc__block__title}>
            Здесь вы можете отследить вашу{" "}
            <span className="text-main">посылку</span>
          </span>
        </Fade>
        <Fade>
          <p className={styles.track_pc__block__description}>
            По ссылке ниже вы можете узнать где сейчас Ваша посылка
          </p>
        </Fade>
        <Button text="Отследить" buttonType="filled" margin="mt-10" />
      </div>
    </div>
  );
};
