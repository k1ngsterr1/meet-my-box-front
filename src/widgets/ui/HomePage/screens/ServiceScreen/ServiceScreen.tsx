import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import Button from "@shared/ui/Button/ui/button";
import {
  ServiceGroup,
  ServiceGroupPC,
} from "@shared/ui/Card/ui/Service/service-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Loader } from "@widgets/ui/Loader/ui/loader";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const ServiceScreen = () => {
  const [service, setService] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setIsLoading(true);
        const block = await useGetBlock("/api/service-blocks/1");
        setService(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
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
          <button
            className="text-main text-sm mt-8 mb-4"
            onClick={() => (window.location.href = "/faq")}
          >
            FAQ
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
