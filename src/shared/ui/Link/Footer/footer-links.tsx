import styles from "./styles.module.scss";

export const FooterLinks = ({ footerLinks }: any) => {
  return (
    <nav className={styles.footer__nav}>
      <ul className={styles.footer__nav__list}>
        {footerLinks.map((item: any, index: number) => (
          <li className={styles.footer__nav__item} key={index}>
            <a href={item.link} className={styles.footer__nav__item__link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export const FooterLinksPC = ({ footerLinks }: any) => {
  return (
    <nav className={styles.footer_pc__nav}>
      <ul className={styles.footer_pc__nav__list}>
        {footerLinks.map((item: any, index: number) => (
          <li className={styles.footer_pc__nav__item} key={index}>
            <a href={item.link} className={styles.footer_pc__nav__item__link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
