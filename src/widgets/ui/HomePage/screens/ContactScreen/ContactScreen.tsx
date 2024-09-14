import {
  ContactForm,
  ContactFormPC,
} from "@features/Form/Contact/contact-form";
import { ContactLink } from "@shared/ui/Link/Contact/contact-link";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { baseUrl, useGetBlock } from "@shared/lib/hooks/useGetBlock";

export const ContactScreen = () => {
  const [contact, setContact] = useState<any>();
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const block = await useGetBlock("/api/contact-blocks/1");
        setContact(block);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchBlock();
  }, []);
  return (
    <>
      {contact ? (
        <>
          <section className={styles.contact} id="contacts-mob">
            <h2 className={styles.contact__heading}>{contact.heading}</h2>
            <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
              {contact.paragraph}
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
              src={baseUrl + contact.img.data.attributes.url}
              alt="form_img"
              className="mt-4 w-full mb-8"
            />
          </section>
          <section className={styles.contact_pc} id="contacts-pc">
            <div className={styles.contact_pc__left}>
              <h2 className={styles.contact_pc__heading}>{contact.heading}</h2>
              <Paragraph width="w-3/4">{contact.paragraph}</Paragraph>
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
              src={baseUrl + contact.img.data.attributes.url}
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
