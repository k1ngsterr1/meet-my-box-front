import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";

import logo from "@assets/logo_mob.svg";

export const Menu = () => {
  return (
    <aside className={styles.menu}>
      <FontAwesomeIcon icon={faClose} className={styles.menu__close} />
      <img src={logo.src} className="w-[160px] mt-32" />
      <nav className="flex flex-col items-center gap-4 mt-8">
        <a className="text-dark text-xl" href="#">
          Главная
        </a>
        <a className="text-dark text-xl" href="#">
          Отправить посылку
        </a>
        <a className="text-dark text-xl" href="#">
          Принять заказ из интернет магазина
        </a>
        <a className="text-dark text-xl" href="#">
          Контакты
        </a>
      </nav>
      <Button text="Войти" buttonType="filled" margin="mt-8" />
    </aside>
  );
};
