import Button from "@shared/ui/Button/ui/button";
import { ProcessList, ProcessListPC } from "@shared/ui/Process/process-list";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const ProcessScreen = () => {
  return (
    <>
      <section className={styles.process} id="process-mob">
        <Fade>
          <h2 className={styles.process__heading}>Процессы работы</h2>
        </Fade>
        <Button text="Доставка из Европы" buttonType="filled" margin="mt-4" />
        <Button
          text="Доставка из интернета"
          buttonType="outline"
          margin="mt-4"
        />
        <ProcessList />
      </section>
      <section className={styles.process_pc} id="process-pc">
        <Fade>
          <h2 className={styles.process_pc__heading}>Процессы работы</h2>
        </Fade>
        <div className="w-[100%] flex items-center justify-center gap-4 mt-4">
          <Button text="Доставка из Европы" buttonType="filled" />
          <Button text="Доставка из интернета" buttonType="outline" />
        </div>
        <ProcessListPC />
      </section>
    </>
  );
};
