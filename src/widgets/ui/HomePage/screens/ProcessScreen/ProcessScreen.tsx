import { ProcessList } from "@shared/ui/Process/process-list";
import styles from "./styles.module.scss";
export const ProcessScreen = () => {
  return (
    <div className={styles.process}>
      <h2 className={styles.process__heading}>Процессы работы</h2>
      <ProcessList />
    </div>
  );
};
