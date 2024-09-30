import React from "react";
import styles from "./styles.module.scss";
export interface IBorderInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  margin?: string;
  width?: string;
  type: string;
}
export const BorderInput: React.FC<IBorderInput> = ({
  placeholder,
  margin,
  width,
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      className={`${styles.input} ${margin || ""} ${width || ""}`}
      {...rest}
    />
  );
};
