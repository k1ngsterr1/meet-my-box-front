import { AddAddressForm, AddAddressFormPC } from "@features/AddAddressForm";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import { useEffect, useState } from "react";
import { useGetProfile } from "@shared/lib/hooks/useGetProfile";
export const AddAddressPage = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await useGetProfile();
      console.log("user", fetchedUser);
      setUser(fetchedUser);
    };

    fetchUser();
  }, []);
  return (
    <>
      {user ? (
        <>
          <div className={styles.add_address}>
            <img src={bg_face.src} alt="" className={styles.add_address__img} />
            <h2 className={styles.add_address__heading}>Заполните адрес</h2>
            <AddAddressForm user={user} />
          </div>
          <div className={styles.add_address_pc}>
            <img
              src={bg_face.src}
              alt=""
              className={styles.add_address_pc__img}
            />
            <h2 className={styles.add_address_pc__heading}>Заполните адрес</h2>
            <AddAddressFormPC user={user} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.add_address}>
            <img src={bg_face.src} alt="" className={styles.add_address__img} />
            <h2 className={styles.add_address__heading}>Заполните адрес</h2>
            <AddAddressForm />
          </div>
          <div className={styles.add_address_pc}>
            <img
              src={bg_face.src}
              alt=""
              className={styles.add_address_pc__img}
            />
            <h2 className={styles.add_address_pc__heading}>Заполните адрес</h2>
            <AddAddressFormPC />
          </div>
        </>
      )}
    </>
  );
};
