import { processHelpList } from "@shared/lib/content/HelpProcess";
import { processList } from "@shared/lib/content/Process";
import { ImageCard } from "../Card/ui/Image/image-card";
import styles from "./styles.module.scss";

interface IProcessList {
  choosenState: string;
}

export const ProcessList: React.FC<IProcessList> = ({ choosenState }) => {
  const content =
    choosenState === "Отправить посылку" ? processList : processHelpList;

  return (
    <div className={styles.process__list}>
      {content.map((item, index) => (
        <ImageCard key={index} img={item.img} description={item.description} />
      ))}
    </div>
  );
};

export const ProcessListPC: React.FC<IProcessList> = ({ choosenState }) => {
  const content =
    choosenState === "Отправить посылку" ? processList : processHelpList;

  return (
    <div className={styles.process_pc__list}>
      {content.map((item, index) => (
        <ImageCard key={index} img={item.img} description={item.description} />
      ))}
    </div>
  );
};
