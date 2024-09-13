import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export const PackageDetails = ({ items, onClick }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.package_card}>
          {items.map((item, index) => (
            <div className="w-full flex flex-col gap-4 items-start p-4">
              <h6 className="font-bold">Предмет {index + 1}</h6>
              <span>Наименование: {item.name}</span>
              <span>Страна: {item.country}</span>
              <span>Количество: {item.weight}</span>
              <span>Стоимость: {item.cost}€</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
