import styles from "./styles.module.scss";

const PricingTable = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <table
        className={`w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-md overflow-hidden ${styles.pricingTable}`}
      >
        <thead className={styles.table__head}>
          <tr className="bg-blue-600 text-white text-xs">
            <th className="py-2 px-4 text-left">Наименование услуги</th>
            <th className="py-2 px-4 text-left"></th>
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
            <td className="py-2 px-4 text-gray-800 text-sm">5€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-2 px-4 text-gray-800 text-sm">
              Возврат заказа, ведение переговоров с магазином
            </td>
            <td className="py-2 px-4 text-gray-800 text-sm">1 шт</td>
            <td className="py-2 px-4 text-gray-800 text-sm">15€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
