import React from "react";
import styles from "./styles.module.scss";

interface FormProps {
  placeholder: string;
  margin?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormProps> = ({
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
