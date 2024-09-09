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
  const items: PackageProps[] = [
    {
      id: 1,
      status: "Получено",
      departure: "17.03.2017",
      arrival: "17.03.2017",
    },
    {
      id: 2,
      status: "Получено",
      departure: "17.03.2018",
      arrival: "17.03.2018",
    },
  ];

  return (
    <>
      <div className={styles.package}>
        <h2 className={styles.package__heading}>Мои посылки</h2>
        <Packages items={items} />
      </div>
      <div className={styles.package_pc}>
        <h2 className={styles.package_pc__heading}>Мои посылки</h2>
        <PackagesPC items={items} />
      </div>
    </>
  );
};
