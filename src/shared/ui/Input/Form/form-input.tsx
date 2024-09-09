import React from "react";
import styles from "./styles.module.scss";

interface FormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  margin?: string;
  value: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput: React.FC<FormProps> = ({
  placeholder,
  margin,
  value,
  onChange,
  width,
  ...rest
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${styles.input} ${margin || ""} ${width || ""}`}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};
