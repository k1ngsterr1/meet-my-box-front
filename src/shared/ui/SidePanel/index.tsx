import { sidePanelLinks } from "@shared/lib/content/SidePanel";
import styles from "./styles.module.scss";
import logo from "@assets/logo_mob.svg";
import Button from "../Button/ui/button";
import { isSideMenuOpen } from "@stores/menuState";
import { useStore } from "@nanostores/react";
import { BurgerButton } from "../Burger/ui/burger-button";
import { Menu } from "../Menu/SideMenu";
export const SidePanel = () => {
  return (
    <div className={styles.side_panel}>
      <img
        src={logo.src}
        alt="logo"
        className={styles.side_panel__img}
        onClick={() => (window.location.href = "/")}
      />
      <ul className={styles.side_panel__nav}>
        {sidePanelLinks.map((item, index) => (
          <li className={styles.side_panel__nav__item}>
            <a className={styles.side_panel__nav__link} href={item.to}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <Button text="Заказать" buttonType="filled" margin="mb-8" />
    </div>
  );
};
export const SidePanelMob = () => {
  const menuOpen = useStore(isSideMenuOpen);

  // Function to toggle the menu state
  const toggleMenu = () => {
    isSideMenuOpen.set(!menuOpen);
    console.log("is menu open:", isSideMenuOpen.get());
  };
  return (
    <div className={styles.side_panel_mob}>
      <img
        src={logo.src}
        alt="logo"
        className={styles.side_panel_mob__img}
        onClick={() => (window.location.href = "/")}
      />
      <BurgerButton onClick={toggleMenu} />
    </div>
  );
};
