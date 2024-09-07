import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import styles from "./styles.module.scss";

export const ContactsButton = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleButtonClick = () => {
    setShowIcons((prev) => !prev);
    console.log("lol");
  };

  return (
    <div className={styles.contacts_wrapper}>
      <button className={styles.contacts_button} onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faMessage} />
      </button>
      {showIcons && (
        <div className={styles.icons_wrapper}>
          <a
            href="https://t.me/your-telegram-handle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      )}
    </div>
  );
};
