import { AboutGroup, AboutGroupPC } from "@shared/ui/Card/ui/About/about-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
export const AboutScreen = () => {
  const [about, setAbout] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/about-blocks/1");
        setAbout(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {about ? (
        <>
          <section className={styles.about} id="about-mob">
            <Fade>
              <h3 className={styles.about__heading}>{about.heading}</h3>
            </Fade>
            <Fade className="w-full flex items-center justify-center">
              <Paragraph isCentered width="w-[80%]" margin="mt-4">
                {about.paragraph}
              </Paragraph>
            </Fade>
            <AboutGroup items={about.about_card} />
          </section>
          <section className={styles.about_pc} id="about-pc">
            <Fade>
              <h3 className={styles.about_pc__heading}>{about.heading}</h3>
            </Fade>
            <Fade className="w-full flex items-center justify-center">
              <Paragraph isCentered width="w-[60%]" margin="mt-4">
                {about.paragraph}
              </Paragraph>
            </Fade>
            <AboutGroupPC items={about.about_card} />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
