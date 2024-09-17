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
        <TrackBlockPC />
      </section>
    </>
  );
};
