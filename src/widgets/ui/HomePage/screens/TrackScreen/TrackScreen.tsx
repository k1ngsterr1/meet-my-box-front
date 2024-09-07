import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { TrackBlock, TrackBlockPC } from "@shared/ui/Track/ui/track-block";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const TrackScreen = () => {
  return (
    <>
      <div className={styles.track}>
        <Fade>
          <h4 className={styles.track__heading}>Отследить вашу посылку</h4>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </Paragraph>
        </Fade>
        <TrackBlock />
      </div>
      <div className={styles.track_pc}>
        <Fade>
          <h4 className={styles.track_pc__heading}>Отследить вашу посылку</h4>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <p className={styles.track_pc__paragraph}>
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </p>
        </Fade>
        <TrackBlockPC />
      </div>
    </>
  );
};
