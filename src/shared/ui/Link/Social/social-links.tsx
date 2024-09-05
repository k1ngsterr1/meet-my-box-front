import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";
import { socialLinks } from "@shared/lib/content/Social";

export const SocialMediaLinks = () => {
  return (
    <div className={styles.social_tab}>
      {socialLinks.map((item, index) => (
        <a
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.social_tab__link}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={styles.social_tab__icon}
          />
        </a>
      ))}
    </div>
  );
};
