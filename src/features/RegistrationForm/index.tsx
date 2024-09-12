import { ErrorDisplay } from "@entities/Error";
import { useRegister } from "@shared/lib/hooks/useRegister";
import Button from "@shared/ui/Button/ui/button";
import { FormInput } from "@shared/ui/Input/Form/form-input";
import React, { useState } from "react";
import styles from "./styles.module.scss";

export const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== password2) {
      setError("Пароли не совпадают!");
      return;
    }
    const result = await useRegister({ email: email, password: password });
    if (result !== "Success") {
      setError(result);
      return;
    } else {
      window.location.href = "/login";
    }

    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <form className={styles.login__form} onSubmit={handleSubmit}>
      <FormInput
        width="w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        width="w-full"
        type="password"
        placeholder="Ваш пароль"
        margin="mt-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormInput
        width="w-full"
        type="password"
        placeholder="Подтвердите пароль"
        margin="mt-4"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <ErrorDisplay message={error} />
      <Button text="Создать" buttonType="filled" type="submit" margin="mt-12" />
    </form>
  );
};
