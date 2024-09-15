import styles from "./styles.module.scss";

interface IAddressDetails {
  items: any[];
  onClick: () => void;
}

export const AddressDetails: React.FC<IAddressDetails> = ({
  items,
  onClick,
}) => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.package_card}>
          {items.map((item, index) => (
            <div className="w-full flex flex-col gap-4 items-start p-4">
              <h6 className="font-bold">{item.full_name || "Неизвестно"}</h6>
              <span>Тип: {item.type} </span>
              <span>Номер телефона: {item.mobile_number} </span>
              <span>Улица: {item.street}</span>
              <span>Дом: {item.house}</span>
              <span>Здание: {item.building}</span>
              <span>Квартира: {item.apartment}</span>
              <span>Город: {item.city}</span>
              <span>Почтовый код: {item.postal_code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
