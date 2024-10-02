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
import { Fade, Slide } from "react-awesome-reveal";
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

  // New Highlight Block Data
  const featureHighlights = [
    {
      title: "Быстрая доставка",
      description: "Мы доставляем ваши посылки в самые короткие сроки.",
      icon: "🚀",
    },
    {
      title: "Гарантия качества",
      description: "Все товары проходят тщательную проверку перед отправкой.",
      icon: "✅",
    },
    {
      title: "Поддержка 24/7",
      description: "Наша служба поддержки готова помочь вам в любое время.",
      icon: "📞",
    },
  ];

  return (
    <>
      {service ? (
        <>
          {/* Service Section for Mobile */}
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

          {/* Service Section for Desktop */}
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

          {/* New Feature Highlights Block */}
          <section className={styles.featureHighlights}>
            <h2 className="text-center text-3xl font-bold mt-16 mb-8">
              Наши преимущества
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {featureHighlights.map((feature, index) => (
                <Slide key={index} direction="up" triggerOnce>
                  <div className="bg-white shadow-lg rounded-xl p-6 text-center">
                    <span className="text-6xl">{feature.icon}</span>
                    <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{feature.description}</p>
                  </div>
                </Slide>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <div className="w-[90%] lg:w-[86.6%]">
            <FAQList items={service.questions} />
          </div>
          <button className="text-black text-sm mt-8 mb-8">
            Еще больше ответов на вопросы{" "}
            <a href="/faq" className="text-main">
              здесь
            </a>
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
