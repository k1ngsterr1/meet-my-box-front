import { processFaqAccordions } from "@shared/lib/content/Accordion";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import { ProcessList, ProcessListPC } from "@shared/ui/Process/process-list";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import styles from "./styles.module.scss";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";

export const ProcessScreen = () => {
  const [process, setProcess] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/working-process-blocks/1", true);
        setProcess(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  const [choosenState, setChoosenState] = useState<string>("Отправить посылку");

  return (
    <>
      {process ? (
        <>
          <section className={styles.process} id="process-mob">
            <Fade>
              <h2 className={styles.process__heading}>{process.heading}</h2>
            </Fade>
            <Button
              text="Отправить посылку"
              onClick={() => setChoosenState("Отправить посылку")}
              buttonType={
                choosenState === "Отправить посылку" ? "filled" : "outline"
              }
              margin="mt-4"
            />
            <Button
              text="Помощь с покупкой"
              onClick={() => setChoosenState("Помощь с покупкой")}
              buttonType={
                choosenState === "Помощь с покупкой" ? "filled" : "outline"
              }
              margin="mt-4"
            />
            <ProcessList
              choosenState={choosenState}
              items={process.image_card}
            />
          </section>
          <section className={styles.process_pc} id="process-pc">
            <Fade>
              <h2 className={styles.process_pc__heading}>{process.heading}</h2>
            </Fade>
            <div className="w-[100%] flex items-center justify-center gap-4 mt-4">
              <Button
                text="Отправить посылку"
                onClick={() => setChoosenState("Отправить посылку")}
                buttonType={
                  choosenState === "Отправить посылку" ? "filled" : "outline"
                }
              />
              <Button
                text="Помощь с посылкой"
                onClick={() => setChoosenState("Помощь с посылкой")}
                buttonType={
                  choosenState === "Помощь с посылкой" ? "filled" : "outline"
                }
              />
            </div>
            <ProcessListPC
              choosenState={choosenState}
              items={process.image_card}
            />
          </section>
          <div className="w-[90%] lg:w-[86.6%]">
            <FAQList items={process.questions} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
