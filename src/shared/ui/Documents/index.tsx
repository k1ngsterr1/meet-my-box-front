import React from "react";

interface Props {
  onClick: () => void;
}

export const Documents: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="mt-2 flex flex-col items-start gap-4 p-4 rounded-md shadow-md bg-gray-50 border border-gray-200">
      {/* Weight Information */}
      <p className="text-gray-800 font-medium">Максимальный вес: 15 кг</p>

      {/* Dimensions Information */}
      <p className="text-gray-800">
        Длина + Высота + Ширина: <strong>&lt; 150 см</strong>
      </p>

      {/* Longest Side Information */}
      <p className="text-gray-800">
        Самая длинная сторона не должна превышать: 100 см
      </p>

      {/* Action Button */}
      <button
        onClick={onClick}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Узнать цену
      </button>
    </div>
  );
};
