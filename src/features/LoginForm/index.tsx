import React, { useState } from "react";
import styles from "./styles.module.scss";
import { LoginInput } from "@shared/ui/Input/Login/login-input";
import Button from "@shared/ui/Button/ui/button";
import { useLogin } from "@shared/lib/hooks/useLogin";

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
      <LoginInput
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <LoginInput
        placeholder="Ваш пороль"
        margin="mt-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Войти" buttonType="filled" type="submit" margin="mt-12" />
    </form>
  );
};
