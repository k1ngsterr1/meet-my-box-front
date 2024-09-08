import { AddAddressForm, AddAddressFormPC } from "@features/AddAddressForm";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
export const AddAddressPage = () => {
  return (
    <>
      <div className={styles.add_address}>
        <img src={bg_face.src} alt="" className={styles.add_address__img} />
        <h2 className={styles.add_address__heading}>Заполните адрес</h2>
        <AddAddressForm />
      </div>
      <div className={styles.add_address_pc}>
        <img src={bg_face.src} alt="" className={styles.add_address_pc__img} />
        <h2 className={styles.add_address_pc__heading}>Заполните адрес</h2>
        <AddAddressFormPC />
      </div>
    </>
  );
};
