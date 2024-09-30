import { useState } from "react";

// Компонент для таблицы со стандартной и экспресс доставкой
const PricingTable = () => {
  const [tableState, setTableState] = useState<"Стандарт" | "Экспресс">(
    "Стандарт"
  );

  // Данные таблицы
  const pricingData = {
    standard: [
      { weight: "1", price: "36€" },
      { weight: "2", price: "38€" },
      { weight: "3", price: "42€" },
      { weight: "4", price: "44€" },
      { weight: "5", price: "47€" },
      { weight: "6", price: "48€" },
      { weight: "7", price: "51€" },
      { weight: "8", price: "54€" },
      { weight: "9", price: "56€" },
      { weight: "10", price: "58€" },
      { weight: "11", price: "63€" },
    ],
    express: [
      { weight: "1", price: "39€" },
      { weight: "2", price: "43€" },
      { weight: "3", price: "50€" },
      { weight: "4", price: "57€" },
      { weight: "5", price: "60€" },
      { weight: "6", price: "65€" },
      { weight: "7", price: "70€" },
      { weight: "8", price: "75€" },
      { weight: "9", price: "79€" },
      { weight: "10", price: "82€" },
    ],
  };

  // Обработчик переключения таблицы
  const handleTableSwitch = (type: "Стандарт" | "Экспресс") => {
    setTableState(type);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {/* Кнопки переключения таблицы */}
      <div className="flex mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded-md text-sm ${
            tableState === "Стандарт" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTableSwitch("Стандарт")}
        >
          Стандарт
        </button>
        <button
          className={`px-3 py-1 rounded-md text-sm ${
            tableState === "Экспресс"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTableSwitch("Экспресс")}
        >
          Экспресс
        </button>
      </div>

      {/* Подсказки для сроков доставки */}
      {tableState === "Стандарт" ? (
        <div className="text-xs text-gray-600 mb-3">
          *Срок доставки от 8 дней, средний срок доставки - 14 дней. Точные
          сроки зависят от адреса отправителя, получателя и графика работы
          логистических партнеров.
        </div>
      ) : (
        <div className="text-xs text-gray-600 mb-3">
          *Сроки доставки от 3 дней, средний срок доставки - 10 дней. Точные
          сроки зависят от адреса отправителя, получателя и графика работы
          логистических партнеров.
        </div>
      )}

      {/* Таблица с данными */}
      <div className="overflow-x-auto w-full max-w-2xl">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr
              className={`  ${tableState === "Стандарт" ? "bg-blue-600" : "bg-yellow-500"} text-white`}
            >
              <th className="py-2 px-2 border">Вес (кг)</th>
              <th className="py-2 px-2 border">Стоимость (EUR)</th>
            </tr>
          </thead>
          <tbody>
            {(tableState === "Стандарт"
              ? pricingData.standard
              : pricingData.express
            ).map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-1 px-2 border text-center">{item.weight}</td>
                <td className="py-1 px-2 border text-center">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
