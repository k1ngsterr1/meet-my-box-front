import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { baseUrl } from "@shared/lib/hooks/useGetBlock";
export const FullNewsPage = ({ title, text, image }: any) => {
  return (
    <>
      <div className={styles.full_news}>
        <img src={baseUrl + image} alt="image_news" className="w-full" />
        <h2 className={styles.full_news__heading}>{title}</h2>
        <Paragraph isCentered width="w-[80%]" margin="mt-4">
          {text}
        </Paragraph>
      </div>
      <div className={styles.full_news_pc}>
        <h2 className={styles.full_news_pc__heading}>{title}</h2>
        <img
          src={baseUrl + image}
          alt="image_news"
          className={styles.full_news_pc__img}
        />

        <p className={styles.full_news_pc__p}>{text}</p>
      </div>
    </>
  );
};
