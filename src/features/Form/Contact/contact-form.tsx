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
          width="w-[80%]"
        />
      ))}
    </div>
  );
};
export const ContactFormPC = () => {
  return (
    <div className={styles.contact_pc__group}>
      <div className="w-full gap-4 flex">
        <ContactInput
          placeholder={contactInputs[0].placeholder}
          margin="mt-4"
          width="w-[50%]"
        />
        <ContactInput
          placeholder={contactInputs[1].placeholder}
          margin="mt-4"
          width="w-[50%]"
        />
      </div>
      <div className="w-full flex">
        <ContactInput
          placeholder={contactInputs[2].placeholder}
          margin="mt-4"
          width="w-full"
        />
      </div>
    </div>
  );
};
