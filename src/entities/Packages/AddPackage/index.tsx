import React, { useState } from "react";
import Button from "@shared/ui/Button/ui/button";
import { AddPackagesForm, AddPackagesFormPC } from "@features/AddPackagesForm";
import styles from "./styles.module.scss";
import { useAddPackage } from "@shared/lib/hooks/Packages/useAddPackage";

type Item = {
  id: number;
  item_name: string;
  origin_country: string;
  quantity: string;
  weight: string;
  price: string;
};

export const AddPackages = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [current, setCurrent] = useState(1);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleAddItem = () => {
    let updatedItems: Item[];

    if (selectedItem) {
      updatedItems = items.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              item_name: itemName,
              origin_country: originCountry,
              quantity: quantity,
              weight: weight,
              price: price,
            }
          : item
      );

      setItems(updatedItems);
      setSelectedItem(null);
      setCurrent(counter);
    } else {
      const newItem: Item = {
        id: counter,
        item_name: itemName,
        origin_country: originCountry,
        quantity: quantity,
        weight: weight,
        price: price,
      };

      updatedItems = [...items, newItem];
      setItems(updatedItems);
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        setCurrent(newCounter);
        return newCounter;
      });
    }

    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");

    return updatedItems;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    let updatedItems = items;

    if (
      itemName !== "" &&
      originCountry !== "" &&
      quantity !== "" &&
      weight !== "" &&
      price !== ""
    ) {
      const newItem: Item = {
        id: counter,
        item_name: itemName,
        origin_country: originCountry,
        quantity: quantity,
        weight: weight,
        price: price,
      };
      updatedItems = [...items, newItem];
      setItems(updatedItems);
    }

    const backendItems = updatedItems.map((item) => ({
      name: item.item_name,
      country: item.origin_country,
      quantity: parseInt(item.quantity, 10),
      weight: parseInt(item.weight, 10),
      cost: parseInt(item.price, 10),
    }));

    console.log(backendItems);

    await useAddPackage({
      items: backendItems,
      status: "Pending",
    });

    setItems([]);
    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectItem = (index: number) => {
    setSelectedItem(items[index]);
    setCurrent(items[index].id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center flex-col w-full">
        {isMenuOpen && (
          <div className={styles.add_package__menu}>
            {items
              .filter((item) => current !== item.id) // Filter items where current is not equal to item.id
              .map((item, index) => (
                <div className="flex-1">
                  <Button
                    key={index}
                    text={`Предмет ${item.id}`}
                    onClick={() => handleSelectItem(index)}
                    buttonType="outline"
                  />
                </div>
              ))}
          </div>
        )}
        <div className="flex max-w-fit items-center justify-center">
          <Button
            text={`Предмет ${current}`}
            buttonType="filled"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <AddPackagesForm
        item={selectedItem}
        itemName={itemName}
        originCountry={originCountry}
        quantity={quantity}
        weight={weight}
        price={price}
        setItemName={setItemName}
        setOriginCountry={setOriginCountry}
        setQuantity={setQuantity}
        setWeight={setWeight}
        setPrice={setPrice}
        handleAddItem={handleAddItem}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export const AddPackagesPC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [itemName, setItemName] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [current, setCurrent] = useState(1);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleAddItem = () => {
    let updatedItems: Item[];

    if (selectedItem) {
      updatedItems = items.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              item_name: itemName,
              origin_country: originCountry,
              quantity: quantity,
              weight: weight,
              price: price,
            }
          : item
      );

      setItems(updatedItems);
      setSelectedItem(null);
      setCurrent(counter);
    } else {
      const newItem: Item = {
        id: counter,
        item_name: itemName,
        origin_country: originCountry,
        quantity: quantity,
        weight: weight,
        price: price,
      };

      updatedItems = [...items, newItem];
      setItems(updatedItems);
      setCounter((prevCounter) => {
        const newCounter = prevCounter + 1;
        setCurrent(newCounter);
        return newCounter;
      });
    }

    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");

    return updatedItems;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    let updatedItems = items;

    if (
      itemName !== "" &&
      originCountry !== "" &&
      quantity !== "" &&
      weight !== "" &&
      price !== ""
    ) {
      const newItem: Item = {
        id: counter,
        item_name: itemName,
        origin_country: originCountry,
        quantity: quantity,
        weight: weight,
        price: price,
      };
      updatedItems = [...items, newItem];
      setItems(updatedItems);
    }

    const backendItems = updatedItems.map((item) => ({
      name: item.item_name,
      country: item.origin_country,
      quantity: parseInt(item.quantity, 10),
      weight: parseInt(item.weight, 10),
      cost: parseInt(item.price, 10),
    }));

    console.log(backendItems);

    await useAddPackage({
      items: backendItems,
      status: "Pending",
    });

    setItems([]);
    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectItem = (index: number) => {
    setSelectedItem(items[index]);
    setCurrent(items[index].id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center flex-col w-full">
        {isMenuOpen && (
          <div className={styles.add_package__menu}>
            {items
              .filter((item) => current !== item.id) // Filter items where current is not equal to item.id
              .map((item, index) => (
                <div className="flex-1">
                  <Button
                    key={index}
                    text={`Предмет ${item.id}`}
                    onClick={() => handleSelectItem(index)}
                    buttonType="outline"
                  />
                </div>
              ))}
          </div>
        )}
        <div className="flex max-w-fit items-center justify-center">
          <Button
            text={`Предмет ${current}`}
            buttonType="filled"
            margin={isMenuOpen ? "mt-0" : "mt-4"}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <AddPackagesFormPC
        item={selectedItem}
        itemName={itemName}
        originCountry={originCountry}
        quantity={quantity}
        weight={weight}
        price={price}
        setItemName={setItemName}
        setOriginCountry={setOriginCountry}
        setQuantity={setQuantity}
        setWeight={setWeight}
        setPrice={setPrice}
        handleAddItem={handleAddItem}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
