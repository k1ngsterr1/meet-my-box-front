import type { ICalculateInput } from "@shared/lib/content/Input";
import React from "react";
import styles from "./styles.module.scss";
export const CalculateInput: React.FC<ICalculateInput> = ({
  placeholder,
  margin,
  ...rest
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.input} ${margin || ""}`}
      {...rest}
    />
  );
};
