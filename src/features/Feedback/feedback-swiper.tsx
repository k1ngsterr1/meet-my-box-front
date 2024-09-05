import React from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { feedbacks, type IFeedbackItem } from "@shared/lib/content/Feedback";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";

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
