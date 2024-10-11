import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

export const ContactsButton = () => {
  return (
    <div className={styles.contacts_wrapper}>
      <div className={styles.icons_wrapper}>
        <a
          href="http://t.me/meetmbox"
          target="_blank"
          aria-label="Telegram - Meet My box"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="https://wa.me/393931577805"
          target="_blank"
          aria-label="WhatsApp - Meet My box"
          rel="noopener noreferrer"
          className={styles.icon_wa}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
};
