import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const FAQScreen = () => {
  const [items, setItems] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/faqs/1");
        setItems(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {items ? (
        <>
          <section className={styles.faq} id="faq">
            <span className={styles.faq__heading}>FAQ</span>
            <FAQList items={items.questions} />
            <div className="w-full flex items-center justify-center">
              <button className="text-black text-sm mt-8">
                Еще больше ответов на вопросы{" "}
                <a href="/faq" className="text-main">
                  здесь
                </a>
              </button>
            </div>
            <div className="flex flex-col">
              {" "}
              <h2 className="opacity-[0] absolute">
                посылка из европы в россию
              </h2>
              <h3 className="opacity-[0] absolute">
                как отправить посылку из европы в россию
              </h3>
              <h3 className="opacity-[0] absolute">
                посылки из европы в россию сейчас
              </h3>
              <h2 className="opacity-[0] absolute">
                посылки из европы в россию 2024 (или сразу 2025 уже делать)
              </h2>
              <h3 className="opacity-[0] absolute">
                отправка посылок в европу из россии
              </h3>
              <h3 className="opacity-[0] absolute">
                доставить посылку из европы в россию
              </h3>
              <h2 className="opacity-[0] absolute">
                посылки в европу из россии почтой
              </h2>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
