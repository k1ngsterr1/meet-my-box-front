import { serviceFaqAccordions } from "@shared/lib/content/Accordion";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import {
  ServiceGroup,
  ServiceGroupPC,
} from "@shared/ui/Card/ui/Service/service-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
export const ServiceScreen = () => {
  const [service, setService] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/service-blocks/1");
        setService(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {service ? (
        <>
          <section className={styles.service} id="service-mob">
            <Fade>
              <h2 className={styles.service__heading}>{service.heading}</h2>
            </Fade>
            <Fade className="w-full flex items-center justify-center">
              <Paragraph margin="mt-4" width="w-[80%]" isCentered={true}>
                {service.paragraph}
              </Paragraph>
            </Fade>
            <ServiceGroup items={service} />
            <Button
              text="Заказать"
              buttonType="filled"
              margin="mt-8"
              onClick={() => (window.location.href = "#contacts-mob")}
            />
          </section>
          <section className={styles.service_pc} id="service-pc">
            <Fade className="flex items-center justify-center">
              <h2 className={styles.service_pc__heading}>{service.heading}</h2>
            </Fade>
            <Fade className="w-full flex items-center justify-center">
              <Paragraph margin="mt-4" width="w-[50%]" isCentered={true}>
                {service.paragraph}
              </Paragraph>
            </Fade>
            <ServiceGroupPC items={service} />
            <Button
              text="Заказать"
              buttonType="filled"
              margin="mt-8"
              onClick={() => window.open("http://t.me/meetmbox")}
            />
          </section>
          <div className="w-[90%] lg:w-[86.6%]">
            <FAQList items={service.questions} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
