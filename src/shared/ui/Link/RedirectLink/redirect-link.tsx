import type React from "react";
import styles from "./styles.module.scss";

interface IRedirectLink {
  text: string;
  link: string;
  margin?: string;
}
export const RedirectLink: React.FC<IRedirectLink> = ({
  text,
  link,
  margin,
}) => {
  return (
    <a href={link} className={`${styles.link} ${margin || ""}`}>
      {text}
    </a>
  );
};
