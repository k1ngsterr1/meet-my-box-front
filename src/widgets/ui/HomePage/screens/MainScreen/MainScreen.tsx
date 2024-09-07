import bg_logo from "@assets/bg_face.svg";
import group from "@assets/clients_group.png";
import main_img from "@assets/main_img.png";
import Button from "@shared/ui/Button/ui/button";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@shared/ui/IconButton/ui/icon-button";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";

export const MainScreen = () => {
  return (
    <main className={styles.main_screen}>
      <img
        src={bg_logo.src}
        alt="bg_logo"
        className={styles.main_screen__logo}
      />
      <Fade>
        <h1 className={styles.main_screen__heading}>
          Cервис доставки посылок из Европы в Россию и страны СНГ
        </h1>
      </Fade>
      <Fade delay={0.2}>
        <Paragraph isCentered margin="mt-4">
          Также вы можете совершать покупки в интернет-магазинах на наши адреса
          в Италии, Германии, Франции и Испании. Заботливо переупакуем, уберем
          счета, чеки и отправим с нашей логистической службой напрямую в Россию
          и страны СНГ
        </Paragraph>
      </Fade>
      <Button text="Оформить заявку" buttonType="filled" margin="mt-8" />
      <IconButton text="Процесс доставки" icon={faChevronRight} margin="mt-4" />
      <div className={styles.main_screen__clients}>
        <img src={group.src} alt="clients" />
        <Paragraph margin="ml-2">200+ Довольных клиентов</Paragraph>
      </div>
      <img src={main_img.src} alt="" className={styles.main_screen__img} />
    </main>
  );
};
