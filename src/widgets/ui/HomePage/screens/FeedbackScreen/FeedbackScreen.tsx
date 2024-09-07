import { FeedbackSwiper } from "@features/Feedback/feedback-swiper";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const FeedbackScreen = () => {
  return (
    <div className={styles.feedback}>
      <Fade>
        <h2 className={styles.feedback__heading}>Процессы работы</h2>
      </Fade>
      <FeedbackSwiper />
    </div>
  );
};
