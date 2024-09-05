import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { ContactForm } from "@features/Form/Contact/contact-form";
import Button from "@shared/ui/Button/ui/button";
import { ContactLink } from "@shared/ui/Link/Contact/contact-link";
import contact_img from "@assets/Form Screen.png";
export const ContactScreen = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__heading}>Свяжитесь с нами</h2>
      <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
        Вы можете связаться с нами через Telegram или WhatsApp, либо заполнить
        форму и мы сами свяжемся с вами
      </Paragraph>
      <ContactForm />
      <Button text="Отправить" buttonType="filled" margin="mt-10" />
      <ContactLink
        text="info@meetmybox.com"
        link="mailto:info@meetmybox.com"
        margin="mt-10"
      />
      <ContactLink
        text="(720) 709-9413"
        link="tel:+17207099413"
        margin="mt-4"
      />
      <img src={contact_img.src} alt="form_img" className="mt-4" />
    </div>
  );
};
