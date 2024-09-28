import { AddPackages, AddPackagesPC } from "@entities/Packages/AddPackage";
import type { AddressProps } from "@features/AddressesCard";
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
import Button from "@shared/ui/Button/ui/button";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const AddPackagesPage = () => {
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
      {address && address.length !== 0 ? (
        <>
          <div className={styles.package}>
            <h2 className={styles.package__heading}>Содержимое посылки</h2>
            <AddPackages />
          </div>
          <div className={styles.package_pc}>
            <h2 className={styles.package_pc__heading}>Содержимое посылки</h2>
            <AddPackagesPC />
          </div>
        </>
      ) : (
        <>
          <div className={styles.package}>
            <h2 className={styles.package__heading}>Добавьте адресса</h2>
            <Button
              text="Добавить"
              margin="mt-4"
              buttonType="filled"
              onClick={() => {
                window.location.href = "/address/add";
              }}
            />
          </div>
          <div className={styles.package_pc}>
            <h2 className={styles.package_pc__heading}>Добавьте адресса</h2>
            <Button
              text="Добавить"
              margin="mt-4"
              buttonType="filled"
              onClick={() => {
                window.location.href = "/address/add";
              }}
            />
          </div>
        </>
      )}
    </>
  );
};
