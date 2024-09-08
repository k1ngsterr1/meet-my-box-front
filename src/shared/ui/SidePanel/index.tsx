import { sidePanelLinks } from "@shared/lib/content/SidePanel";
import styles from "./styles.module.scss";
import logo from "@assets/logo_mob.svg";
import Button from "../Button/ui/button";
export const SidePanel = () => {
  return (
    <div className={styles.side_panel}>
      <img src={logo.src} alt="logo" className={styles.side_panel__img} />
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
