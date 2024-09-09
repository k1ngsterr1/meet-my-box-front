import { AddPackages, AddPackagesPC } from "@entities/Packages/AddPackage";
import styles from "./styles.module.scss";

export const AddPackagesPage = () => {
  return (
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
  );
};
