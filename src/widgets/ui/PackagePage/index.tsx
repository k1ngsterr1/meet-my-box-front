import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import bg_face from "@assets/bg_face.svg";
import { Packages, type PackageProps } from "@entities/Packages";
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
    <div className={styles.package}>
      <img src={bg_face.src} alt="Background" className={styles.package__img} />
      <h2 className={styles.package__heading}>Мои посылки</h2>
      <Packages items={packages} />
    </div>
  );
};
