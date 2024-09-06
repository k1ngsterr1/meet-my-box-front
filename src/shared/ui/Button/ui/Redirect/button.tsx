import React from "react";
import styles from "./styles.module.scss";

interface RedirectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  margin?: string;
  text: string;
  buttonType: "filled" | "outline";
  // onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const Button: React.FC<RedirectButtonProps> = ({
  margin,
  text,
  buttonType,
  // onClick,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles["button--" + buttonType]} ${margin || ""}`;

  return (
    <button className={buttonClass} {...rest}>
      {text}
    </button>
  );
};

export default Button;
