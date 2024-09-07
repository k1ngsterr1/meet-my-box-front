import { AddPackages } from "@entities/Packages/AddPackage";
import styles from "./styles.module.scss";

export const AddPackagesPage = () => {
  return (
    <div className={styles.package}>
      <h2 className={styles.package__heading}>Содержимое посылки</h2>
      <AddPackages />
    </div>
  );
};
