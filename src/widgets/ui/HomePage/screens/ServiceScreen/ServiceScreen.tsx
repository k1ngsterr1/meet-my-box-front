import Button from "@shared/ui/Button/ui/button";
import {
  ServiceGroup,
  ServiceGroupPC,
} from "@shared/ui/Card/ui/Service/service-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
import { FAQList } from "@shared/ui/Accordion/faq-accordion";
import { serviceFaqAccordions } from "@shared/lib/content/Accordion";
export const ServiceScreen = () => {
  return (
    <>
      <section className={styles.service} id="service-mob">
        <Fade>
          <h2 className={styles.service__heading}>Услуги</h2>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph margin="mt-4" width="w-[80%]" isCentered={true}>
            Доставка посылок из Европы в Россию и страны СНГ. С полным перечнем
            стран, откуда осуществляется доставка, вы можете ознакомиться здесь.
            Мы предоставляем услуги доставки посылок весом до 10кг и в Россию и
            страны СНГ. Подробнее о габаритах посылок можно найти здесь.
          </Paragraph>
        </Fade>
        <ServiceGroup />
        <Button
          text="Заказать"
          buttonType="filled"
          margin="mt-8"
          onClick={() => (window.location.href = "#contacts-mob")}
        />
      </section>
      <section className={styles.service_pc} id="service-pc">
        <Fade className="flex items-center justify-center">
          <h2 className={styles.service_pc__heading}>Услуги</h2>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph margin="mt-4" width="w-[50%]" isCentered={true}>
            Доставка посылок из Европы в Россию и страны СНГ. С полным перечнем
            стран, откуда осуществляется доставка, вы можете ознакомиться здесь.
            Мы предоставляем услуги доставки посылок весом до 10кг и в Россию и
            страны СНГ. Подробнее о габаритах посылок можно найти здесь.
          </Paragraph>
        </Fade>
        <ServiceGroupPC />
        <Button
          text="Заказать"
          buttonType="filled"
          margin="mt-8"
          onClick={() => (window.location.href = "#contacts-pc")}
        />
      </section>
      <div className="w-[90%] lg:w-[86.6%]">
        <FAQList items={serviceFaqAccordions} />
      </div>
    </>
  );
};
