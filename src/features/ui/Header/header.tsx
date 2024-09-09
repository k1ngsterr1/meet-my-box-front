import logo from "@assets/logo_mob.svg";
import { useStore } from "@nanostores/react";
import { BurgerButton } from "@shared/ui/Burger/ui/burger-button";
import Button from "@shared/ui/Button/ui/button";
import { isMenuOpen } from "@stores/menuState";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

interface IHeader {
  isMobile?: boolean;
}

export const Header: React.FC<IHeader> = ({ isMobile }) => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    // Check for userData in localStorage
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserEmail(user.email); // Set the email if userData exists
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, []);
  // Access the menu state
  const menuOpen = useStore(isMenuOpen);

  // Function to toggle the menu state
  const toggleMenu = () => {
    isMenuOpen.set(!menuOpen);
    console.log("is menu open:", isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <img className={styles.header__logo} src={logo.src} alt="Logotype" />
        <BurgerButton onClick={toggleMenu} />
      </header>
      <header className={styles.header_pc}>
        <img
          className={styles.header_pc__logo}
          src={logo.src}
          onClick={() => (window.location.href = "/")}
          alt="Logotype"
        />
        <nav className={styles.header_pc__nav}>
          <a className={styles.header_pc__nav__link} href="/packages">
            Отправить посылку
          </a>
          <a className={styles.header_pc__nav__link} href="#contacts-pc">
            Помощь с покупкой
          </a>
          <a className={styles.header_pc__nav__link} href="/cost">
            Стоимость
          </a>
          {userEmail ? (
            <span className={styles.header_pc__email}>{userEmail}</span>
          ) : (
            <Button
              text="Войти"
              buttonType="filled"
              onClick={() => {
                window.location.href = "/login";
              }}
            />
          )}
        </nav>
      </header>
    </>
  );
};
