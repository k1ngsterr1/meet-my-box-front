import { footerLinks } from "@shared/lib/content/Footer";
import { SocialMediaLinks } from "../Social/social-links";
import styles from "./styles.module.scss";

export const FooterLinks = () => {
  return (
    <nav className={styles.footer__nav}>
      <ul className={styles.footer__nav__list}>
        {footerLinks.map((item, index) => (
          <li className={styles.footer__nav__item} key={index}>
            <a href={item.to} className={styles.footer__nav__item__link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export const FooterLinksPC = () => {
  return (
    <nav className={styles.footer_pc__nav}>
      <ul className={styles.footer_pc__nav__list}>
        {footerLinks.map((item, index) => (
          <li className={styles.footer_pc__nav__item} key={index}>
            <a href={item.to} className={styles.footer_pc__nav__item__link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <SocialMediaLinks />
    </nav>
  );
};
