import { contactInputs } from "@shared/lib/content/Input";
import { ContactInput } from "@shared/ui/Input/Contact/contact-input";
import styles from "./styles.module.scss";

export const ContactForm = () => {
  return (
    <div className={styles.contact__group}>
      {contactInputs.map((item, index) => (
        <ContactInput
          key={index}
          placeholder={item.placeholder}
          margin="mt-4"
        />
      ))}
    </div>
  );
};
