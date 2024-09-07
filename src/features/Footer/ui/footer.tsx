import { FooterLinks } from "@shared/ui/Link/Footer/footer-links";
import styles from "./styles.module.scss";
import logo from "@assets/logo_white.svg";
import Button from "@shared/ui/Button/ui/Footer/button";
import { SocialMediaLinks } from "@shared/ui/Link/Social/social-links";
export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <img src={logo.src} alt="footer_logo" className={styles.footer__logo} />
        <FooterLinks />
        <Button text="Вверх" buttonType="filled" />
        <SocialMediaLinks />
      </footer>
      <footer className={styles.footer_pc}>
        <img
          src={logo.src}
          alt="footer_logo"
          className={styles.footer_pc__logo}
        />
        <FooterLinks />
        <Button text="Вверх" buttonType="filled" />
        <SocialMediaLinks />
      </footer>
    </>
  );
};
