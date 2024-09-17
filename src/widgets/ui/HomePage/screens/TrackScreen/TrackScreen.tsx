import { TrackBlock, TrackBlockPC } from "@shared/ui/Track/ui/track-block";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { Loader } from "@widgets/ui/Loader/ui/loader";
export const TrackScreen = () => {
  const [track, setTrack] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setIsLoading(isLoading);
        const block = await useGetBlock("/api/tracking-blocks/1");
        setTrack(block);
      } catch (error) {
        console.error("Error fetching track:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlock();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {track ? (
        <>
          <section className={styles.track} id="track-mob">
            <TrackBlock
              title={track.card_text}
              text={track.card_paragraph}
              img={track.image.data.attributes.url}
            />
          </section>
          <section className={styles.track_pc} id="track-pc">
            <Fade>
              <h4 className={styles.track_pc__heading}>{track.heading}</h4>
            </Fade>
            <TrackBlockPC
              title={track.card_text}
              text={track.card_paragraph}
              img={track.image.data.attributes.url}
            />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
