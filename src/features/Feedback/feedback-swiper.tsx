import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

// Import Swiper styles
import { feedbacks, type IFeedbackItem } from "@shared/lib/content/Feedback";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const FeedbackSwiper = () => {
  return (
    <div className={styles.feedback__swiper}>
      <div className={styles.prev}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.prev__icon} />
      </div>
      <div className={styles.next}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.next__icon} />
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: `.${styles.prev}`,
          nextEl: `.${styles.next}`,
        }}
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <FeedbackItem
              name={item.name}
              stars={item.stars}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export const FeedbackSwiperPC = () => {
  return (
    <div className={styles.feedback_pc__swiper}>
      <div className={styles.prev_pc}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.prev__icon} />
      </div>
      <div className={styles.next_pc}>
        <FontAwesomeIcon icon={faArrowRight} className={styles.next__icon} />
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation={{
          prevEl: `.${styles.prev_pc}`,
          nextEl: `.${styles.next_pc}`,
        }}
        pagination={{ clickable: true }}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <FeedbackItemPC
              name={item.name}
              stars={item.stars}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export const FeedbackItemPC: React.FC<IFeedbackItem> = ({
  name,
  stars,
  text,
}) => {
  return (
    <div className={styles.feedback_pc__item}>
      <span className={styles.feedback_pc__item__name}>{name}</span>
      <div className={styles.feedback_pc__item__stars}>
        {Array.from({ length: stars }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={styles.feedback_pc__item__star}
          />
        ))}
      </div>
      <p className={styles.feedback_pc__item__paragraph}>{text}</p>
      <IconButton text="Скриншот" margin="mt-4" />
    </div>
  );
};

export const FeedbackItem: React.FC<IFeedbackItem> = ({
  name,
  stars,
  text,
}) => {
  return (
    <div className={styles.feedback__item}>
      <span className={styles.feedback__item__name}>{name}</span>
      <div className={styles.feedback__item__stars}>
        {Array.from({ length: stars }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={styles.feedback__item__star}
          />
        ))}
      </div>
      <Paragraph isCentered margin="mt-4" width="w-3/4">
        {text}
      </Paragraph>
      <IconButton text="Скриншот" margin="mt-4" />
    </div>
  );
};
