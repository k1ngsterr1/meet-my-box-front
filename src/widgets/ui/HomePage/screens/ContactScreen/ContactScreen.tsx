import contact_img from "@assets/pexels-tima-miroshnichenko-6169025.jpg";
import {
  ContactForm,
  ContactFormPC,
} from "@features/Form/Contact/contact-form";
import { ContactLink } from "@shared/ui/Link/Contact/contact-link";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import parse from "html-react-parser";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useGetBlock } from "@shared/lib/hooks/useGetBlock";
import { Loader } from "@widgets/ui/Loader/ui/loader";

export const ContactScreen = () => {
  const [contact, setContact] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        setIsLoading(true);
        const block = await useGetBlock("/api/contact-blocks/1");
        setContact(block);
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
      {contact ? (
        <>
          <section className={styles.contact} id="contacts-mob">
            <h2 className={styles.contact__heading}>{contact.heading}</h2>
            <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
              {parse(contact.paragraph)}
            </Paragraph>
            <ContactForm />
            <ContactLink
              text={contact.link[0].text}
              link={contact.link[0].link}
              margin="mt-4"
            />
            <ContactLink
              text={contact.link[1].text}
              link={contact.link[1].link}
              margin="mt-4"
            />
            <img
              src={contact_img.src}
              alt="form_img"
              className="mt-4 w-full mb-8"
            />
          </section>
          <section className={styles.contact_pc} id="contacts-pc">
            <div className={styles.contact_pc__left}>
              <h2 className={styles.contact_pc__heading}>{contact.heading}</h2>
              <Paragraph width="w-3/4">{parse(contact.paragraph)}</Paragraph>
              <ContactFormPC />
              <ContactLink
                text={contact.link[0].text}
                link={contact.link[0].link}
                margin="mt-4"
              />
              <ContactLink
                text={contact.link[1].text}
                link={contact.link[1].link}
                margin="mt-4 mb-8"
              />
            </div>
            <img
              src={contact_img.src}
              alt="form_img"
              className={`${styles.contact_pc__img}`}
            />
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
