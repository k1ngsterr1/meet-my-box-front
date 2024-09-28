import styles from "./styles.module.scss";

const PricingTable = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <table
        className={`w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-md overflow-hidden ${styles.pricingTable}`}
      >
        <thead className={styles.table__head}>
          <tr className="bg-gray-200 text-black text-xs">
            <th className="py-2 px-4 text-left">Наименование услуги</th>
            <th className="py-2 px-4 text-left">Вес (кг)</th>
            <th className="py-2 px-4 text-left">Стоимость (EUR)</th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Выкуп товара в интернет-магазине (включает в себя все услуги по
              заказу)
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">-</td>
            <td className="py-2 px-4 text-gray-800 text-sm">
              Стоимость по запросу
            </td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Прием и переупаковка заказа
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">1 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">10€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Проверка на соответствие
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">1 шт</td>
            <td className="py-2 px-4 text-gray-800 text-sm">5€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Консолидация/разделение заказов по разным посылкам
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">1 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">10€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Возврат заказа, ведение переговоров с магазином
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">1 шт</td>
            <td className="py-2 px-4 text-gray-800 text-sm">15€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">Посылки до 5 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">До 5 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">15€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Посылки от 5 до 7 кг
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">5-7 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">20€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Посылки от 7 до 9 кг
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">7-9 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">25€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Посылки от 9 до 14 кг
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">9-14 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">35€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Посылки от 20 до 30 кг
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">20-30 кг</td>
            <td className="py-2 px-4 text-gray-800 text-sm">40€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
