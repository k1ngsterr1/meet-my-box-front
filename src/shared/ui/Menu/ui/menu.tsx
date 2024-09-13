import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";

import logo from "@assets/logo_mob.svg";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "@stores/menuState";
import { Slide } from "react-awesome-reveal";

export const Menu = () => {
  const menuOpen = useStore(isMenuOpen);

  const toggleMenu = () => {
    isMenuOpen.set(!menuOpen);
  };

  return (
    <>
      {menuOpen && (
        <Slide
          direction="down"
          className="w-full fixed z-50 flex bg-white h-full"
        >
          <aside className={styles.menu}>
            <FontAwesomeIcon
              icon={faClose}
              className={styles.menu__close}
              onClick={toggleMenu}
            />
            <img src={logo.src} className="w-[160px] mt-32" />
            <nav className="flex flex-col items-center gap-4 mt-8">
              <a className="text-dark text-xl" href="#">
                Главная
              </a>
              <a
                className="text-dark text-xl"
                href="#calculate-mob"
                onClick={() => toggleMenu()}
              >
                Отправить посылку
              </a>
              <a className="text-dark text-xl" href="/">
                Принять заказ из интернет магазина
              </a>
              <a className="text-dark text-xl" href="#contacts-mob">
                Контакты
              </a>
            </nav>
            <Button text="Войти" buttonType="filled" margin="mt-8" />
          </aside>
        </Slide>
      )}
    </>
  );
};
