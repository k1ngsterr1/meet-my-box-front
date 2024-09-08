import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: IconDefinition;
  margin?: string;
}

export const IconButton: React.FC<IIconButton> = ({
  text,
  icon,
  margin,
  ...rest
}) => {
  return (
    <button className={`${styles.icon_button} ${margin || ""}`} {...rest}>
      {text}
      {icon && (
        <FontAwesomeIcon icon={icon} className={styles.icon_button__icon} />
      )}
    </button>
  );
};
