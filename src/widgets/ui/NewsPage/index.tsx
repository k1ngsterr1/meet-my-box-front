import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { NewsList } from "@features/NewsList";
export const NewsPage = () => {
  const [news, setNews] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/news-blocks/1", false, true);
        setNews(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {news ? (
        <>
          <section className={styles.news}>
            <h2 className={styles.news__heading}>Новости</h2>
            <NewsList items={news.news_card} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
