import { ApplicationCards } from "@features/ApplicationCard";
import styles from "./styles.module.scss";
export const AdminPage = () => {
  const applications = [
    {
      name: "Ruslan",
      email: "ruslan123@gmail.com",
      departure: "01.09.2024",
      items: [
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
    {
      name: "Daniel",
      email: "daniel23@gmail.com",
      departure: "03.07.2024",
      items: [
        {
          id: 3,
          name: "Item 1",
          country: "Luxembourg",
          quantity: 5,
          weight: 10,
          cost: 48,
        },
        {
          id: 4,
          name: "Item 2",
          country: "Italy",
          quantity: 10,
          weight: 5,
          cost: 32,
        },
      ],
    },
    {
      name: "Max",
      email: "max_2003@gmail.com",
      departure: "29.08.2024",
      items: [
        {
          id: 5,
          name: "Item 1",
          country: "UK",
          quantity: 5,
          weight: 5,
          cost: 48,
        },
        {
          id: 6,
          name: "Item 2",
          country: "UK",
          quantity: 3,
          weight: 5,
          cost: 32,
        },
      ],
    },
  ];
  return (
    <div className={styles.admin}>
      <h3 className={styles.admin__heading}>Заявки</h3>
      <ApplicationCards items={applications} />
    </div>
  );
};
