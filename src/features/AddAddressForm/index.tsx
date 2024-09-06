import React, { useState } from "react";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { BorderInput } from "@shared/ui/Input/BorderInput/border-input";
import { useAddAddress } from "@shared/lib/hooks/useAddAddress";

export const AddAddressForm = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isReciever, setIsReciever] = useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await useAddAddress({
      type: isReciever ? "receiver" : "sender",
      full_name: fullName,
      mobile_number: phone,
      street: street,
      house: house,
      building: building,
      apartment: apartment,
      city: city,
      postal_code: postalCode,
    });

    setFullName("");
    setPhone("");
    setStreet("");
    setHouse("");
    setBuilding("");
    setApartment("");
    setCity("");
    setPostalCode("");
  };

  return (
    <>
      <div className={styles.add_address__type}>
        <Button
          text="Получатель"
          buttonType={isReciever ? "filled" : "outline"}
          onClick={() => {
            setIsReciever(true);
          }}
        />
        <Button
          text="Отправитель"
          buttonType={!isReciever ? "filled" : "outline"}
          onClick={() => {
            setIsReciever(false);
          }}
        />
      </div>
      <form className={styles.add_address__form} onSubmit={handleSubmit}>
        <BorderInput
          placeholder="ФИО"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Номер мобильного телефона"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Улица"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Дом"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Корпус"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Квартира"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Город получателя"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Индекс получателя"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <Button
          text="Сохранить"
          buttonType="filled"
          type="submit"
          margin="mt-12"
        />
      </form>
    </>
  );
};
