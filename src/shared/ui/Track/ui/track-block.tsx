import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import tracking from "@assets/track.png";
import Button from "@shared/ui/Button/ui/button";
export const TrackBlock = () => {
  return (
    <div className={styles.track__block}>
      <div className={styles.track__container}>
        <span className={styles.track__block__title}>
          Здесь вы можете отследить вашу{" "}
          <span className="text-main">посылку</span>
        </span>
        <p className={styles.track__block__description}>
          По ссылке ниже вы можете узнать где сейчас Ваша посылка
        </p>
        <Button text="Отследить" buttonType="filled" margin="mt-10" />
      </div>
      <img src={tracking.src} alt="" className={styles.track__block__img} />
    </div>
  );
};
