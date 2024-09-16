import { contactInputs } from "@shared/lib/content/Input";
import { useMail } from "@shared/lib/hooks/useMail";
import Button from "@shared/ui/Button/ui/button";
import { ContactInput } from "@shared/ui/Input/Contact/contact-input";
import { useState } from "react";
import styles from "./styles.module.scss";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      service_id: "service_lllcyye",
      template_id: "template_3y3r4gi",
      user_id: "rtVgbCy_MD9iXuEcP",
      template_params: {
        from_name: name,
        phone: phone,
        question: question,
        to_name: "support@meetmybox.com",
      },
    };

    const result = await useMail(data);

    if (result === "Success") {
      setName("");
      setPhone("");
      setQuestion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contact__group}>
      <ContactInput
        placeholder="Ваше имя"
        margin="mt-4"
        width="w-[80%]"
        name="from_name"
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      service_id: "service_lllcyye",
      template_id: "template_3y3r4gi",
      user_id: "rtVgbCy_MD9iXuEcP",
      template_params: {
        from_name: name,
        phone: phone,
        question: question,
        to_name: "support@meetmybox.com",
      },
    };
    console.log(data.service_id);
    console.log(data);

    const result = await useMail(data);

    if (result === "Success") {
      setName("");
      setPhone("");
      setQuestion("");
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className={styles.contact_pc__group}
    >
      <div className="w-full gap-4 flex">
        <ContactInput
          placeholder={contactInputs[0].placeholder}
          margin="mt-4"
          width="w-[50%]"
          value={name}
          onChange={(e) => {
            setName(e.target.value), console.log(e.target.value); // Comma here causes issues
          }}
          name="from_name"
        />
        <ContactInput
          type="tel"
          placeholder={contactInputs[1].placeholder}
          margin="mt-4"
          width="w-[50%]"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value), console.log(e.target.value); // Comma here causes issues
          }}
          name="phone"
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
          name="question"
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
