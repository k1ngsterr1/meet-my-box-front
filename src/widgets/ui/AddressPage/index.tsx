import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
import no_address from "@assets/no_address.png";
export const AddressPage = () => {
  return (
    <div className={styles.address}>
      <img src={no_address.src} alt="" className={styles.address__img} />
      <h2 className={styles.address__heading}>У вас пока нет адресов</h2>
      <Button
        buttonType="filled"
        text="Добавить"
        margin="mt-4"
        onClick={() => {
          window.location.href = "/address/add";
        }}
      />
    </div>
  );
};
