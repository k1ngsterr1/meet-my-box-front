import Button from "@shared/ui/Button/ui/button";
import { BorderInput } from "@shared/ui/Input/BorderInput/border-input";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Box, Tooltip } from "@mui/material";

type Item = {
  item_name: string;
  origin_country: string;
  quantity: string;
  weight: string;
  price: string;
};

type AddPackagesFormProps = {
  item?: Item | null; // Optional item prop
  itemName: string;
  originCountry: string;
  quantity: string;
  weight: string;
  price: string;
  setItemName: (value: string) => void;
  setOriginCountry: (value: string) => void;
  setQuantity: (value: string) => void;
  setWeight: (value: string) => void;
  setPrice: (value: string) => void;
  handleAddItem: () => void;
  handleSubmit: (event: React.FormEvent) => void;
};

export const AddPackagesForm: React.FC<AddPackagesFormProps> = ({
  item,
  itemName,
  originCountry,
  quantity,
  weight,
  price,
  setItemName,
  setOriginCountry,
  setQuantity,
  setWeight,
  setPrice,
  handleAddItem,
  handleSubmit,
}) => {
  // Populate form fields with item values if the item is provided
  useEffect(() => {
    if (item) {
      setItemName(item.item_name);
      setOriginCountry(item.origin_country);
      setQuantity(item.quantity);
      setWeight(item.weight);
      setPrice(item.price);
    }
  }, [item, setItemName, setOriginCountry, setQuantity, setWeight, setPrice]);

  return (
    <>
      <form className={styles.add_package__form} onSubmit={handleSubmit}>
        <BorderInput
          type="text"
          placeholder="Наименование"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          margin="mt-2"
          width="w-full"
        />
        <BorderInput
          type="text"
          placeholder="Страна происхождения"
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
          type="text"
          placeholder="Кол-во, шт"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
          type="text"
          placeholder="Вес (кг)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
          type="text"
          placeholder="Стоимость (евро)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <Button
          text="Сохранить"
          buttonType="filled"
          type="submit"
          margin="mt-8"
        />
        <Button
          text="Добавить"
          type="button"
          buttonType="outline"
          onClick={handleAddItem}
          margin="mt-2"
        />
      </form>
    </>
  );
};

export const AddPackagesFormPC: React.FC<AddPackagesFormProps> = ({
  item,
  itemName,
  originCountry,
  quantity,
  weight,
  price,
  setItemName,
  setOriginCountry,
  setQuantity,
  setWeight,
  setPrice,
  handleAddItem,
  handleSubmit,
}) => {
  // Populate form fields with item values if the item is provided
  useEffect(() => {
    if (item) {
      setItemName(item.item_name);
      setOriginCountry(item.origin_country);
      setQuantity(item.quantity);
      setWeight(item.weight);
      setPrice(item.price);
    }
  }, [item, setItemName, setOriginCountry, setQuantity, setWeight, setPrice]);

  const renderInputWithTooltip = (
    placeholder: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    info: string,
    fullWidth: boolean = false,
    tooltipWidth: string = "300px" // Updated tooltip width for more space
  ) => (
    <Tooltip
      title={info}
      placement="top"
      arrow
      PopperProps={{
        modifiers: [
          {
            name: "customWidth",
            enabled: true,
            phase: "beforeWrite",
            fn: ({ state }) => {
              state.styles.popper.width = tooltipWidth; // Set the tooltip width dynamically
            },
          },
        ],
      }}
    >
      <div className={fullWidth ? "w-full" : "w-[50%]"}>
        {" "}
        {/* Adjust width based on props */}
        <BorderInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-400 p-2 rounded-md mt-2" // Ensure consistent styling
        />
      </div>
    </Tooltip>
  );

  return (
    <>
      <form
        className="add_package_pc__form mx-auto w-[90%] mt-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Содержимое посылки
        </h2>

        {/* First Row with Item Name and Country */}
        <Box className="w-full flex gap-4 mb-4">
          {renderInputWithTooltip(
            "Наименование",
            itemName,
            (e) => setItemName(e.target.value),
            "Введите наименование товара. Пример: Электроника"
          )}

          {renderInputWithTooltip(
            "Страна происхождения",
            originCountry,
            (e) => setOriginCountry(e.target.value),
            "Укажите страну происхождения. Пример: Италия"
          )}
        </Box>

        {/* Second Row with Quantity and Weight */}
        <Box className="w-full flex gap-4 mb-4">
          {renderInputWithTooltip(
            "Кол-во, шт",
            quantity,
            (e) => setQuantity(e.target.value),
            "Введите количество товара в штуках. Пример: 5"
          )}

          {renderInputWithTooltip(
            "Вес (кг)",
            weight,
            (e) => setWeight(e.target.value),
            "Укажите вес товара в килограммах. Пример: 2.5"
          )}
        </Box>

        {/* Full Width Row with Price */}
        {renderInputWithTooltip(
          "Стоимость (евро)",
          price,
          (e) => setPrice(e.target.value),
          "Введите стоимость товара в евро. Пример: 150",
          true, // Full width for price input
          "350px" // Increased tooltip width for better readability
        )}

        {/* Buttons */}
        <Box className="flex items-center justify-evenly mt-8">
          <Button text="Сохранить" buttonType="filled" type="submit" />
          <Button
            text="Добавить"
            type="button"
            buttonType="outline"
            onClick={handleAddItem}
          />
        </Box>
      </form>
    </>
  );
};
