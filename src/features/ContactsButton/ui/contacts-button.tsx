// src/components/ContactsButton.js
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useIconRevealAnimation from "../animations/useIconReveal";
import styles from "./styles.module.scss";

export const ContactsButton = () => {
  return (
    <div className={styles.contacts_wrapper}>
      <div className={styles.icons_wrapper}>
        <a
          href="http://t.me/meetmbox"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://wa.me/393931577805"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};
