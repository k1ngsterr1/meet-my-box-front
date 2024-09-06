import React from "react";
import styles from "./styles.module.scss";

interface LoginProps {
  placeholder: string;
  margin?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInput: React.FC<LoginProps> = ({
  placeholder,
  margin,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.input} ${margin || ""}`}
      value={value}
      onChange={onChange}
    />
  );
};
