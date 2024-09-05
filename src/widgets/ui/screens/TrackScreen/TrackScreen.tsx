import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { TrackBlock } from "@shared/ui/Track/ui/track-block";
export const TrackScreen = () => {
  return (
    <div className={styles.track}>
      <h4 className={styles.track__heading}>Отследить ваше посылку</h4>
      <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </Paragraph>
      <TrackBlock />
    </div>
  );
};
