import { baseUrl } from "@shared/lib/hooks/useGetBlock";
import Button from "@shared/ui/Button/ui/button";
import parse from "html-react-parser";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const TrackBlock = ({ title, text, img }: any) => {
  return (
    <div className={styles.track__block}>
      <div className={styles.track__container}>
        <Fade>
          <span className={styles.track__block__title}>{parse(title)}</span>
        </Fade>
        <p className={styles.track__block__description}>{text}</p>
        <Button text="Отследить" buttonType="filled" margin="mt-10" />
      </div>
      <img src={baseUrl + img} alt="" className={styles.track__block__img} />
    </div>
  );
};

export const TrackBlockPC = ({ title, text, img }: any) => {
  return (
    <div className={styles.track_pc__block}>
      <img
        src={baseUrl + img}
        alt=""
        className={styles.track_pc__block__img}
        width={1080}
        height={1080}
      />
      <div className={styles.track_pc__container}>
        <Fade>
          <span className={styles.track_pc__block__title}>{parse(title)}</span>
        </Fade>
        <Fade>
          <p className={styles.track_pc__block__description}>{text}</p>
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
