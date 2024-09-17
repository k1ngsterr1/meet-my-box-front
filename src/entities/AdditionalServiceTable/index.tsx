import styles from "./styles.module.scss";

const PricingTable = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <table className="w-full max-w-4xl bg-white border-collapse rounded-lg shadow-md overflow-hidden">
        <thead className={styles.table__head}>
          <tr className="bg-blue-600 text-white">
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Услуги
            </th>
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Цена €
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Прием и переупаковка</td>
            <td className="py-3 px-8 text-gray-800"></td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Посылки до 5 кг</td>
            <td className="py-3 px-8 text-gray-800">15€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Посылки от 5 до 7 кг</td>
            <td className="py-3 px-8 text-gray-800">20€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Посылки от 7 до 9 кг</td>
            <td className="py-3 px-8 text-gray-800">25€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Посылки от 9 до 14 кг</td>
            <td className="py-3 px-8 text-gray-800">35€</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">Посылки от 20 до 30 кг</td>
            <td className="py-3 px-8 text-gray-800">40€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
