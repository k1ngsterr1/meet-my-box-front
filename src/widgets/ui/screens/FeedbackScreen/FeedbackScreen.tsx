import { FeedbackSwiper } from "@features/Feedback/feedback-swiper";
import styles from "./styles.module.scss";
export const FeedbackScreen = () => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.feedback__heading}>Процессы работы</h2>
      <FeedbackSwiper />
    </div>
  );
};
