import { TrackBlock, TrackBlockPC } from "@shared/ui/Track/ui/track-block";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const TrackScreen = () => {
  return (
    <>
      <section className={styles.track} id="track-mob">
        <TrackBlock />
      </section>
      <section className={styles.track_pc} id="track-pc">
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
      </section>
    </>
  );
};
