import contact_img from "@assets/pexels-tima-miroshnichenko-6169025.jpg";
import {
  ContactForm,
  ContactFormPC,
} from "@features/Form/Contact/contact-form";
import { ContactLink } from "@shared/ui/Link/Contact/contact-link";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";

export const ContactScreen = () => {
  return (
    <>
      <section className={styles.contact} id="contacts-mob">
        <h2 className={styles.contact__heading}>Свяжитесь с нами</h2>
        <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
          Вы можете связаться с нами через Telegram или WhatsApp, либо заполнить
          форму и мы сами свяжемся с вами
        </Paragraph>
        <ContactForm />
        <ContactLink
          text="+39 393 157 7805"
          link="tel:+393931577805"
          margin="mt-4"
        />
        <ContactLink
          text="support@meetmybox.com"
          link="mailto:support@meetmybox.com"
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
          <h2 className={styles.contact_pc__heading}>Свяжитесь с нами</h2>
          <p className={styles.contact_pc__paragraph}>
            Вы можете связаться с нами через Telegram или WhatsApp, либо
            заполнить форму и мы сами свяжемся с вами
          </p>
          <ContactFormPC />
          <ContactLink
            text="+39 393 157 7805"
            link="tel:+393931577805"
            margin="mt-4"
          />
          <ContactLink
            text="support@meetmybox.com"
            link="mailto:support@meetmybox.com"
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
  );
};
