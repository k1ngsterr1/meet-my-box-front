import {
  FeedbackSwiper,
  FeedbackSwiperPC,
} from "@features/Feedback/feedback-swiper";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { Loader } from "@widgets/ui/Loader/ui/loader";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setIsLoading(true);
        const block = await useGetBlock("/api/Feedback-blocks/1");
        setFeedback(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlock();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {feedback ? (
        <>
          <section className={styles.feedback} id="feedback-mob">
            <Fade>
              <h2 className={styles.feedback__heading}>{feedback.heading}</h2>
            </Fade>
            <FeedbackSwiper items={feedback.feedback} />
          </section>
          <section className={styles.feedback_pc} id="feedback-pc">
            <Fade>
              <h2 className={styles.feedback_pc__heading}>
                {feedback.heading}
              </h2>
            </Fade>
            <FeedbackSwiperPC items={feedback.feedback} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
