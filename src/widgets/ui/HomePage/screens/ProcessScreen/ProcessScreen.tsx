import { ProcessList, ProcessListPC } from "@shared/ui/Process/process-list";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const ProcessScreen = () => {
  return (
    <>
      <div className={styles.process}>
        <Fade>
          <h2 className={styles.process__heading}>Процессы работы</h2>
        </Fade>
        <ProcessList />
      </div>
      <div className={styles.process_pc}>
        <Fade>
          <h2 className={styles.process_pc__heading}>Процессы работы</h2>
        </Fade>
        <ProcessListPC />
      </div>
    </>
  );
};
