import { AddPackages, AddPackagesPC } from "@entities/Packages/AddPackage";
import type { AddressProps } from "@features/AddressesCard";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
import Button from "@shared/ui/Button/ui/button";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
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
            <div className="flex items-center justify-between gap-2">
              <h2 className={styles.package__heading}>Содержимое посылки</h2>
              <span
                className="text-main"
                data-tooltip-id="my-tooltip"
                data-tooltip-place="bottom"
                data-tooltip-content="Заполните профиль сейчас, чтобы не делать это при доставке"
              >
                <FontAwesomeIcon icon={faCircleInfo} size="lg" />
              </span>
              <Tooltip />
            </div>
            <AddPackages />
          </div>
          <div className={styles.package_pc}>
            <div className="flex items-center justify-between gap-2">
              <h2 className={styles.package_pc__heading}>Содержимое посылки</h2>
              <span
                className="text-main"
                data-tooltip-id="my-tooltip"
                data-tooltip-place="bottom"
                data-tooltip-content="Внимательно заполните все поля, наименование, страна происхождение, кол-во предметов, вес и стоимость"
              >
                <FontAwesomeIcon icon={faCircleInfo} size="lg" />
              </span>
              <Tooltip id="my-tooltip" />
            </div>

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
