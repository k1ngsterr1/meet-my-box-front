import type React from "react";
import styles from "./styles.module.scss";

interface IContactLink {
  text: string;
  link: string;
  margin?: string;
}
export const ContactLink: React.FC<IContactLink> = ({ text, link, margin }) => {
  return (
    <a href={link} className={`${styles.link} ${margin || ""}`}>
      {text}
    </a>
  );
};
