import Button from "@shared/ui/Button/ui/button";
import styles from "./styles.module.scss";
import no_address from "@assets/no_address.png";
import { useEffect, useState } from "react";
import { AddressPC, type AddressProps } from "@features/AddressesCard";
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
export const AddressPage = () => {
  const [address, setAddress] = useState<AddressProps[]>([]);
  useEffect(() => {
    const fetchAddress = async () => {
      const fetchedAddress = await useGetAddresses();
      setAddress(fetchedAddress);
    };

    fetchAddress();
  }, []);
  return (
    <>
      <div className={styles.address}>
        {address.length > 0 ? (
          <AddressPC items={address} />
        ) : (
          <>
            <img src={no_address.src} alt="" className={styles.address__img} />
            <h2 className={styles.address__heading}>У вас пока нет адресов</h2>
          </>
        )}
      </div>
      <div className={styles.address_pc}>
        {address.length > 0 ? (
          <AddressPC items={address} />
        ) : (
          <>
            <img
              src={no_address.src}
              alt=""
              className={styles.address_pc__img}
            />
            <h2 className={styles.address_pc__heading}>
              У вас пока нет адресов
            </h2>
          </>
        )}
        <Button
          buttonType="filled"
          text="Добавить"
          margin="mt-6"
          onClick={() => {
            window.location.href = "/address/add";
          }}
        />
      </div>
    </>
  );
};
