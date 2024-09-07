import logo from "@assets/logo_mob.svg";
import { BurgerButton } from "@shared/ui/Burger/ui/burger-button";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";

interface IHeader {
  isMobile?: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.header__logo} src={logo.src} alt="Logotype" />
        <BurgerButton />
      </header>
      <header className={styles.header_pc}>
        <img className={styles.header_pc__logo} src={logo.src} alt="Logotype" />
        <nav className={styles.header_pc__nav}>
          <a className={styles.header_pc__nav__link} href="#main">
            Главная
          </a>
          <a className={styles.header_pc__nav__link} href="#send">
            Отправить посылку
          </a>
          <a className={styles.header_pc__nav__link}>
            Принять заказ из интернет магазина
          </a>
          <a className={styles.header_pc__nav__link} href="#contacts">
            Контакты
          </a>
          <Button text="Войти" buttonType="filled" />
        </nav>
      </header>
    </>
  );
};
