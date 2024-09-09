import Button from "@shared/ui/Button/ui/button";
import { ProcessList, ProcessListPC } from "@shared/ui/Process/process-list";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const ProcessScreen = () => {
  const [choosenState, setChoosenState] = useState<string>("Отправить посылку");

  return (
    <>
      <section className={styles.process} id="process-mob">
        <Fade>
          <h2 className={styles.process__heading}>Процессы работы</h2>
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
          text="Помощь с посылкой"
          onClick={() => setChoosenState("Помощь с посылкой")}
          buttonType={
            choosenState === "Помощь с посылкой" ? "filled" : "outline"
          }
          margin="mt-4"
        />
        <ProcessList choosenState={choosenState} />
      </section>
      <section className={styles.process_pc} id="process-pc">
        <Fade>
          <h2 className={styles.process_pc__heading}>Процессы работы</h2>
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
        <ProcessListPC choosenState={choosenState} />
      </section>
    </>
  );
};
