import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { AboutGroup, AboutGroupPC } from "@shared/ui/Card/ui/About/about-card";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const AboutScreen = () => {
  const [about, setAbout] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setIsLoading(true);
        const block = await useGetBlock("/api/about-blocks/1");
        setAbout(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlock();
  }, []);

  if (isLoading) return null;

  return (
    <>
      {about ? (
        <>
          <section className={styles.about} id="about-mob">
            <Fade>
              <span className={styles.about__heading}>{about.heading}</span>
            </Fade>
            {/* <Fade className="w-full flex items-center justify-center">
              <Paragraph isCentered width="w-[80%]" margin="mt-4">
                {about.paragraph}
              </Paragraph>
            </Fade> */}
            <AboutGroup items={about.about_card} />
          </section>
          <section className={styles.about_pc} id="about-pc">
            <Fade>
              <span className={styles.about_pc__heading}>{about.heading}</span>
            </Fade>
            {/* <Fade className="w-full flex items-center justify-center">
              <Paragraph isCentered width="w-[60%]" margin="mt-4">
                {about.paragraph}
              </Paragraph>
            </Fade> */}
            <AboutGroupPC items={about.about_card} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
