import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";

import logo from "@assets/logo_mob.svg";
import { useStore } from "@nanostores/react";
import { isSideMenuOpen } from "@stores/menuState";
import { Slide } from "react-awesome-reveal";
import { sidePanelLinks } from "@shared/lib/content/SidePanel";

export const Menu = () => {
  const menuOpen = useStore(isSideMenuOpen);

  const toggleMenu = () => {
    isSideMenuOpen.set(!menuOpen);
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
              {sidePanelLinks.map((item, index) => (
                <a className="text-dark text-xl" href={item.to}>
                  {item.name}
                </a>
              ))}
            </nav>
            <Button
              text="Заказать"
              buttonType="filled"
              margin="mt-8"
              onClick={() => (window.location.href = "/#contacts-mob")}
            />
          </aside>
        </Slide>
      )}
    </>
  );
};
