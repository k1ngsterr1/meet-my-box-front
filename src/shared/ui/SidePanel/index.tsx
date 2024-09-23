import logo from "@assets/logo_mob.svg";
import { useStore } from "@nanostores/react";
import { sidePanelLinks } from "@shared/lib/content/SidePanel";
import { isSideMenuOpen } from "@stores/menuState";
import { BurgerButton } from "../Burger/ui/burger-button";
import Button from "../Button/ui/button";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
export const SidePanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const deleteLocalStorage = () => {
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData") as string)
        : null;

      if (userData?.role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

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
          <li className={styles.side_panel__nav__item} key={index}>
            <a className={styles.side_panel__nav__link} href={item.to}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Conditionally render the backlog button if the user is an admin */}
      {isAdmin ? (
        <div className="flex flex-col justify-between">
          <Button text="Заказать" buttonType="filled" margin="mb-4" />
          <Button
            text="Бэклог"
            buttonType="outline"
            onClick={() => {
              window.location.href = "/admin";
            }}
          />
        </div>
      ) : (
        <Button text="Заказать" buttonType="filled" margin="mb-8" />
      )}
      <button className="text-red-500" onClick={deleteLocalStorage}>
        Выйти
      </button>
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
