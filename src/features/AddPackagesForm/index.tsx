import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { BorderInput } from "@shared/ui/Input/BorderInput/border-input";

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
          placeholder="Наименование"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          margin="mt-2"
          width="w-full"
        />
        <BorderInput
          placeholder="Страна происхождения"
          value={originCountry}
          onChange={(e) => setOriginCountry(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Кол-во, шт"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Вес (кг)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <BorderInput
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

  return (
    <>
      <form className={styles.add_package_pc__form} onSubmit={handleSubmit}>
        <div className="w-full flex gap-4">
          <BorderInput
            placeholder="Наименование"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Страна происхождения"
            value={originCountry}
            onChange={(e) => setOriginCountry(e.target.value)}
            width="w-[50%]"
            margin="mt-2"
          />
        </div>
        <div className="w-full flex gap-4">
          <BorderInput
            placeholder="Кол-во, шт"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            width="w-[50%]"
            margin="mt-2"
          />
          <BorderInput
            placeholder="Вес (кг)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            width="w-[50%]"
            margin="mt-2"
          />
        </div>
        <BorderInput
          placeholder="Стоимость (евро)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          width="w-full"
          margin="mt-2"
        />
        <div className="flex items-center w-full justify-evenly mt-8">
          <Button text="Сохранить" buttonType="filled" type="submit" />
          <Button
            text="Добавить"
            type="button"
            buttonType="outline"
            onClick={handleAddItem}
          />
        </div>
      </form>
    </>
  );
};
