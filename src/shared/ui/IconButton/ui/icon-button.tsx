import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

interface IIconButton {
  text: string;
  icon: IconDefinition;
}

export const IconButton: React.FC<IIconButton> = ({ text, icon }) => {
  return (
    <button className={styles.icon_button}>
      {text}
      <FontAwesomeIcon icon={icon} className={styles.icon_button__icon} />
    </button>
  );
};
