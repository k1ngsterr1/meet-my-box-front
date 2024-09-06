import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import { LoginForm } from "@features/LoginForm";
import { RedirectLink } from "@shared/ui/Link/RedirectLink/redirect-link";
export const LoginPage = () => {
  return (
    <div className={styles.login}>
      <img src={bg_face.src} alt="" className={styles.login__img} />
      <h2 className={styles.login__heading}>Вход в личный кабинет</h2>
      <LoginForm />
      <RedirectLink text="Регистрация" link="/registration" margin="mt-12" />
      <RedirectLink
        text="Забыли пороль?"
        link="/reset-password"
        margin="mt-2"
      />
    </div>
  );
};
