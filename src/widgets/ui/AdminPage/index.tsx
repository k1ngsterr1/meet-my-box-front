import {
  ApplicationCards,
  ApplicationsCardsPC,
  type ApplicationProps,
} from "@features/ApplicationCard";
import styles from "./styles.module.scss";
export const AdminPage = () => {
  const applications: ApplicationProps[] = [
    {
      id: 1,
      name: "Ruslan",
      contacts: "ruslan123@gmail.com",
      departure: "01.09.2024",
      packages: [
        {
          id: 1,
          name: "Item 1",
          country: "Germany",
          quantity: 5,
          weight: 10,
          cost: 48,
        },
        {
          id: 2,
          name: "Item 2",
          country: "Italy",
          quantity: 10,
          weight: 5,
          cost: 32,
        },
      ],
    },
  ];
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
