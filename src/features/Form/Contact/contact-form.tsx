import { contactInputs } from "@shared/lib/content/Input";
import { ContactInput } from "@shared/ui/Input/Contact/contact-input";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { useState } from "react";
import { useMail } from "@shared/lib/hooks/useMail";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { name, phone, question };

    useMail(data);

    setName("");
    setPhone("");
    setQuestion("");
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className={styles.contact__group}
    >
      <ContactInput
        placeholder="Ваше имя"
        margin="mt-4"
        width="w-[80%]"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <ContactInput
        type="tel"
        placeholder="Ваш телефон"
        margin="mt-4"
        width="w-[80%]"
        name="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <ContactInput
        placeholder="Ваш вопрос"
        margin="mt-4"
        width="w-[80%]"
        name="question"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <Button
        text="Отправить"
        buttonType="filled"
        margin="mt-10"
        type="submit"
      />
    </form>
  );
};

export const ContactFormPC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  return (
    <form method="POST" className={styles.contact_pc__group}>
      <div className="w-full gap-4 flex">
        <ContactInput
          placeholder={contactInputs[0].placeholder}
          margin="mt-4"
          width="w-[50%]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <ContactInput
          type="tel"
          placeholder={contactInputs[1].placeholder}
          margin="mt-4"
          width="w-[50%]"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex">
        <ContactInput
          placeholder={contactInputs[2].placeholder}
          margin="mt-4"
          width="w-full"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
      </div>
      <div className="flex w-full items-start">
        <Button
          text="Отправить"
          buttonType="filled"
          margin="mt-10"
          type="submit"
        />
      </div>
    </form>
  );
};
