import { AddPackagesForm, AddPackagesFormPC } from "@features/AddPackagesForm";
import { useAddPackage } from "@shared/lib/hooks/Packages/useAddPackage";
import Button from "@shared/ui/Button/ui/button";
import React, { useState } from "react";
import styles from "./styles.module.scss";

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
    let updatedItems: Item[] = [];

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

      setItemName("");
      setOriginCountry("");
      setQuantity("");
      setWeight("");
      setPrice("");
      setItems(updatedItems);
      setSelectedItem(null);
      setCurrent(selectedItem.id);
    } else {
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

        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          setCurrent(newCounter);
          return newCounter;
        });

        setItemName("");
        setOriginCountry("");
        setQuantity("");
        setWeight("");
        setPrice("");
      } else {
        alert("Пожалуйста запольните все поля!");
      }
    }

    return updatedItems;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let updatedItems = items;

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
    }

    const backendItems = updatedItems.map((item) => ({
      name: item.item_name,
      country: item.origin_country,
      quantity: parseInt(item.quantity, 10),
      weight: parseInt(item.weight, 10),
      cost: parseInt(item.price, 10),
    }));

    console.log(backendItems);

    const current_package = await useAddPackage({
      items: backendItems,
      status: "Pending",
    });
    if (current_package) {
      localStorage.setItem("packageId", JSON.stringify(current_package));
    }

    setItems([]);
    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");
    window.location.href = "/application";
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
        <div className="flex items-center justify-center mt-4 w-[60%]">
          <select
            value={current || ""}
            onChange={(e) => {
              handleSelectItem(parseInt(e.target.value, 10));
            }}
            className="border px-2 py-1 rounded-md w-full"
          >
            <option value="" disabled>
              Предметы
            </option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                Предмет {item.id}
              </option>
            ))}
          </select>
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
  const [counter, setCounter] = useState(1);
  const [current, setCurrent] = useState(1);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleAddItem = () => {
    let updatedItems: Item[] = [];

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

      setItemName("");
      setOriginCountry("");
      setQuantity("");
      setWeight("");
      setPrice("");
      setItems(updatedItems);
      setSelectedItem(null);
      setCurrent(selectedItem.id);
    } else {
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

        setCounter((prevCounter) => {
          const newCounter = prevCounter + 1;
          setCurrent(newCounter);
          return newCounter;
        });

        setItemName("");
        setOriginCountry("");
        setQuantity("");
        setWeight("");
        setPrice("");
      } else {
        alert("Пожалуйста запольните все поля!");
      }
    }

    return updatedItems;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let updatedItems = items;

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
    }

    const backendItems = updatedItems.map((item) => ({
      name: item.item_name,
      country: item.origin_country,
      quantity: parseInt(item.quantity, 10),
      weight: parseInt(item.weight, 10),
      cost: parseInt(item.price, 10),
    }));

    console.log(backendItems);

    const current_package = await useAddPackage({
      items: backendItems,
      status: "Pending",
    });
    if (current_package) {
      localStorage.setItem("packageId", JSON.stringify(current_package));
    }

    setItems([]);
    setItemName("");
    setOriginCountry("");
    setQuantity("");
    setWeight("");
    setPrice("");
    window.location.href = "/application";
  };

  const handleSelectItem = (id: number) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      setSelectedItem(item);
      setCurrent(item.id);
    }
  };

  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-center mt-4 w-[60%]">
          <select
            value={current || ""}
            onChange={(e) => {
              handleSelectItem(parseInt(e.target.value, 10));
            }}
            className="border px-2 py-1 rounded-md w-full"
          >
            <option value="" disabled>
              Предметы
            </option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                Предмет {item.id}
              </option>
            ))}
          </select>
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
