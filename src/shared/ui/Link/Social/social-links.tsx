import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialLinks } from "@shared/lib/content/Social";
import styles from "./styles.module.scss";

export const SocialMediaLinks = () => {
  return (
    <div className={styles.social_tab}>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.to}
          target="_blank"
          aria-label="Social Media"
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
