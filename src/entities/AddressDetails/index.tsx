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
            <div
              key={index}
              className="w-full flex flex-col gap-4 items-start p-4"
            >
              <h6 className="font-bold">
                {item.firstName && item.lastName
                  ? `${item.firstName} ${item.lastName}`
                  : "Неизвестно"}
              </h6>
              <span>
                Тип: {item.type === "receiver" ? "Получатель" : "Отправитель"}
              </span>
              <span>Номер телефона: {item.phoneNumber}</span>
              <span>Улица: {item.street}</span>
              <span>Здание: {item.building}</span>
              <span>Корпус: {item.housing}</span>
              <span>Квартира: {item.apartment}</span>
              <span>Город: {item.city}</span>
              <span>Почтовый код: {item.postalCode}</span>
              <span>Страна: {item.country}</span>
              <span>Имя на домофоне: {item.intercomName ?? "Не указано"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
