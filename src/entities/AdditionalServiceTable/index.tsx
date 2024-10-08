import styles from "./styles.module.scss";

const PricingTable = ({ help }: any) => {
  return (
    <div className="w-full flex justify-center mt-4">
      <table
        className={`w-full max-w-3xl bg-white border border-gray-300 rounded-md shadow-md overflow-hidden ${styles.pricingTable}`}
      >
        <thead className={styles.table__head}>
          <tr className="bg-blue-600 text-white text-xs">
            <th className="py-2 px-4 text-left">{help.help.heading1}</th>
            <th className="py-2 px-4 text-left">{help.help.heading2}</th>
            <th className="py-2 px-4 text-left">{help.help.heading3}</th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {help.values.map((item: any) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="py-2 px-4 text-gray-800 text-sm">{item.value1}</td>
              <td className="py-2 px-4 text-gray-800 text-sm">{item.value2}</td>
              <td className="py-2 px-4 text-gray-800 text-sm">{item.value3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
