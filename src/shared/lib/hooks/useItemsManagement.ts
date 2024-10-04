import { useEffect, useState } from "react";
import type { Item } from "./Packages/useAddPackage";

export const useItemsManagement = () => {
  const [items, setItems] = useState<Item[]>([]);

  // Загрузка предметов из localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem("packageItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // Обновление localStorage при изменении items
  useEffect(() => {
    localStorage.setItem("packageItems", JSON.stringify(items));
  }, [items]);

  // Добавление нового предмета
  const addItem = (newItem: Item) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Удаление предмета по ID
  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item: any) => item.id !== id));
  };

  return { items, addItem, removeItem };
};
