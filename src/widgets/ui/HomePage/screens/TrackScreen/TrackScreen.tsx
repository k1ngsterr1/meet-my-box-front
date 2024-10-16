import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { TrackBlock, TrackBlockPC } from "@shared/ui/Track/ui/track-block";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
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

  if (isLoading) return null;

  return (
    <>
      {track ? (
        <>
          <section className={styles.track} id="track-mob">
            <TrackBlock
              title={track.card_text}
              text={track.card_paragraph}
              img={track.image.data.attributes.url}
              width={400}
              height={400}
            />
          </section>
          <section className={styles.track_pc} id="track-pc">
            <Fade>
              <h2 className={styles.track_pc__heading}>{track.heading}</h2>
            </Fade>
            <TrackBlockPC
              title={track.card_text}
              text={track.card_paragraph}
              img={track.image.data.attributes.url}
              width={400}
              height={400}
            />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
