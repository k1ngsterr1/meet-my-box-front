import React from "react";
import styles from "./styles.module.scss";
import type { IContactInput } from "@shared/lib/content/Input";
export const ContactInput: React.FC<IContactInput> = ({
  placeholder,
  margin,
  width,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.input} ${margin || ""} ${width || ""}`}
      value={value}
      onChange={onChange}
    />
  );
};
