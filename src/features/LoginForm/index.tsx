import { useLogin } from "@shared/lib/hooks/useLogin";
import Button from "@shared/ui/Button/ui/button";
import { FormInput } from "@shared/ui/Input/Form/form-input";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await useLogin({ email: email, password: password });
    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.login__form} onSubmit={handleSubmit}>
      <FormInput
        width="w-[60%]"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <FormInput
        width="w-[60%]"
        placeholder="Ваш пароль"
        margin="mt-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button text="Войти" buttonType="filled" type="submit" margin="mt-12" />
    </form>
  );
};
