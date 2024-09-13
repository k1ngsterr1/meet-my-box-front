import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Packages, PackagesPC, type PackageProps } from "@entities/Packages";
import { useGetPackages } from "@shared/lib/hooks/Packages/useGetPackages";

export const PackagesPage = () => {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  useEffect(() => {
    const fetchPackages = async () => {
      const fetchedPackages = await useGetPackages();
      setPackages(fetchedPackages);
    };

    fetchPackages();
  }, []);

  return (
    <>
      <div className={styles.package}>
        <h2 className={styles.package__heading}>Мои посылки</h2>
        <Packages items={packages} />
      </div>
      <div className={styles.package_pc}>
        <h2 className={styles.package_pc__heading}>Мои посылки</h2>
        <PackagesPC items={packages} />
      </div>
    </>
  );
};
