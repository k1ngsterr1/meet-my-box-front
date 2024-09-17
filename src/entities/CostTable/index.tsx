const PricingTable = () => {
  return (
    <div className="w-full flex justify-center">
      <table className="w-full max-w-4xl bg-white border-collapse rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Стоимость
            </th>
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Вес
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">36€</td>
            <td className="py-3 px-8 text-gray-800">1.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">38€</td>
            <td className="py-3 px-8 text-gray-800">2.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">42€</td>
            <td className="py-3 px-8 text-gray-800">3.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">44€</td>
            <td className="py-3 px-8 text-gray-800">4.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">47€</td>
            <td className="py-3 px-8 text-gray-800">5.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">48€</td>
            <td className="py-3 px-8 text-gray-800">6.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">51€</td>
            <td className="py-3 px-8 text-gray-800">7.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">54€</td>
            <td className="py-3 px-8 text-gray-800">8.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">56€</td>
            <td className="py-3 px-8 text-gray-800">9.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">58€</td>
            <td className="py-3 px-8 text-gray-800">10.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">63€</td>
            <td className="py-3 px-8 text-gray-800">11.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const PricingTableExpress = () => {
  return (
    <div className="w-full flex justify-center">
      <table className="w-full max-w-4xl bg-white border-collapse rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Стоимость
            </th>
            <th className="py-4 px-8 text-left text-sm font-semibold uppercase">
              Вес
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">39€</td>
            <td className="py-3 px-8 text-gray-800">0.50 - 1.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">43€</td>
            <td className="py-3 px-8 text-gray-800">1.50 - 2.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">50€</td>
            <td className="py-3 px-8 text-gray-800">2.50 - 3.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">57€</td>
            <td className="py-3 px-8 text-gray-800">3.50 - 4.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">60€</td>
            <td className="py-3 px-8 text-gray-800">4.50 - 5.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">65€</td>
            <td className="py-3 px-8 text-gray-800">5.50 - 6.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">70€</td>
            <td className="py-3 px-8 text-gray-800">6.50 - 7.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">75€</td>
            <td className="py-3 px-8 text-gray-800">7.50 - 8.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">79€</td>
            <td className="py-3 px-8 text-gray-800">8.50 - 9.00</td>
          </tr>
          <tr className="border-t hover:bg-gray-50">
            <td className="py-3 px-8 text-gray-800">82€</td>
            <td className="py-3 px-8 text-gray-800">9.50 - 10.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
