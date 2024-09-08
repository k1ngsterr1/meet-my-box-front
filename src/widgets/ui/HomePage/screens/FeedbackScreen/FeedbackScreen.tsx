import {
  FeedbackSwiper,
  FeedbackSwiperPC,
} from "@features/Feedback/feedback-swiper";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const FeedbackScreen = () => {
  return (
    <>
      <section className={styles.feedback} id="feedback-mob">
        <Fade>
          <h2 className={styles.feedback__heading}>Отзывы</h2>
        </Fade>
        <FeedbackSwiper />
      </section>
      <section className={styles.feedback_pc} id="feedback-pc">
        <Fade>
          <h2 className={styles.feedback_pc__heading}>Отзывы</h2>
        </Fade>
        <FeedbackSwiperPC />
      </section>
    </>
  );
};
