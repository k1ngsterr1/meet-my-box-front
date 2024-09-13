import {
  ApplicationCards,
  ApplicationsCardsPC,
  type ApplicationProps,
} from "@features/ApplicationCard";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
export const AdminPage = () => {
  const [applications, setApplications] = useState<ApplicationProps[]>([]);
  useEffect(() => {
    const fetchApplications = async () => {
      const fetchedApplications = await useGetApplications();
      setApplications(fetchedApplications);
    };

    fetchApplications();
  }, []);
  return (
    <>
      <div className={styles.admin}>
        <h3 className={styles.admin__heading}>Заявки</h3>
        <ApplicationCards items={applications} />
      </div>
      <div className={styles.admin_pc}>
        <h3 className={styles.admin_pc__heading}>Заявки</h3>
        <ApplicationsCardsPC items={applications} />
      </div>
    </>
  );
};
