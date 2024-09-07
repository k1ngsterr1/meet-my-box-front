import {
  FeedbackSwiper,
  FeedbackSwiperPC,
} from "@features/Feedback/feedback-swiper";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const FeedbackScreen = () => {
  return (
    <>
      <div className={styles.feedback}>
        <Fade>
          <h2 className={styles.feedback__heading}>Отзывы</h2>
        </Fade>
        <FeedbackSwiper />
      </div>
      <div className={styles.feedback_pc}>
        <Fade>
          <h2 className={styles.feedback_pc__heading}>Отзывы</h2>
        </Fade>
        <FeedbackSwiperPC />
      </div>
    </>
  );
};
