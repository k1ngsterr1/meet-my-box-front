import { useAddAddress } from "@shared/lib/hooks/useAddAddress";
import Button from "@shared/ui/Button/ui/button";
import { BorderInput } from "@shared/ui/Input/BorderInput/border-input";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
export const AddAddressForm = ({ user }: any) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameLatin, setLastNameLatin] = useState("");
  const [firstNameLatin, setFirstNameLatin] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isReceiver, setIsReceiver] = useState(true);
  const [country, setCountry] = useState("");
  const [intercomName, setIntercomName] = useState("");

  useEffect(() => {
    if (user) {
      setLastName(user.lastName ?? "");
      setFirstName(user.firstName ?? "");
      setLastNameLatin(user.lastNameLatin ?? "");
      setFirstNameLatin(user.firstNameLatin ?? "");
      setPhone(user.phoneNumber ?? "");
      setStreet(user.street ?? "");
      setHouse(user.building ?? "");
      setApartment(user.apartment ?? "");
      setCity(user.city ?? "");
      setPostalCode(user.postalCode ?? "");
      setCountry(user.country ?? "");
      setIntercomName(user.intercomName ?? "");
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await useAddAddress({
      type: isReceiver ? "receiver" : "sender",
      lastName: lastName,
      firstName: firstName,
      lastNameLatin: lastNameLatin,
      firstNameLatin: firstNameLatin,
      phoneNumber: phone,
      street: street,
      building: house,
      apartment: apartment,
      city: city,
      housing: building,
      postalCode: postalCode,
      country: country,
      intercomName: intercomName,
    });

    setLastName("");
    setFirstName("");
    setLastNameLatin("");
    setFirstNameLatin("");
    setPhone("");
    setStreet("");
    setHouse("");
    setBuilding("");
    setApartment("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setIntercomName("");
  };

  return (
    <>
      <div className={styles.add_address__type}>
        <Button
          text="Получатель"
          buttonType={isReceiver ? "filled" : "outline"}
          onClick={() => setIsReceiver(true)}
        />
        <Button
          text="Отправитель"
          buttonType={!isReceiver ? "filled" : "outline"}
          onClick={() => setIsReceiver(false)}
        />
      </div>
      <form className={styles.add_address__form} onSubmit={handleSubmit}>
        <BorderInput
          placeholder="Имя"
          value={firstName ?? ""}
          onChange={(e) => setFirstName(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Фамилия"
          value={lastName ?? ""}
          onChange={(e) => setLastName(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Фамилия на латинице"
          value={lastNameLatin ?? ""}
          onChange={(e) => setLastNameLatin(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Имя на латинице"
          value={firstNameLatin ?? ""}
          onChange={(e) => setFirstNameLatin(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Номер мобильного телефона"
          value={phone ?? ""}
          onChange={(e) => setPhone(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Улица"
          value={street ?? ""}
          onChange={(e) => setStreet(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Дом"
          value={house ?? ""}
          onChange={(e) => setHouse(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Корпус"
          value={building ?? ""}
          onChange={(e) => setBuilding(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Квартира"
          value={apartment ?? ""}
          onChange={(e) => setApartment(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Город"
          value={city ?? ""}
          onChange={(e) => setCity(e.target.value)}
          width="w-3/4"
          margin="mt-2"
        />
        <BorderInput
          placeholder="Страна"
          value={country ?? ""}
          onChange={(e) => setCountry(e.target.value)}
          margin="mt-2"
        />
        <BorderInput
          placeholder="Индекс"
          value={postalCode ?? ""}
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
        <BorderInput
          placeholder="Имя на домофоне"
          value={intercomName ?? ""}
          onChange={(e) => setIntercomName(e.target.value)}
          margin="mt-2"
        />
      </form>
    </>
  );
};

export const AddAddressFormPC = ({ user }: any) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameLatin, setLastNameLatin] = useState("");
  const [firstNameLatin, setFirstNameLatin] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [intercomName, setIntercomName] = useState("");
  const [isReceiver, setIsReceiver] = useState(true);

  useEffect(() => {
    if (user) {
      setLastName(user.lastName ?? "");
      setFirstName(user.firstName ?? "");
      setLastNameLatin(user.lastNameLatin ?? "");
      setFirstNameLatin(user.firstNameLatin ?? "");
      setPhone(user.phoneNumber ?? "");
      setStreet(user.street ?? "");
      setHouse(user.building ?? "");
      setApartment(user.apartment ?? "");
      setCity(user.city ?? "");
      setPostalCode(user.postalCode ?? "");
      setCountry(user.country ?? "");
      setIntercomName(user.intercomName ?? "");
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await useAddAddress({
      type: isReceiver ? "receiver" : "sender",
      lastName: lastName,
      firstName: firstName,
      lastNameLatin: lastNameLatin,
      firstNameLatin: firstNameLatin,
      phoneNumber: phone,
      street: street,
      building: house,
      apartment: apartment,
      city: city,
      postalCode: postalCode,
      country: country,
      housing: building,
      intercomName: intercomName,
    });

    setLastName("");
    setFirstName("");
    setLastNameLatin("");
    setFirstNameLatin("");
    setPhone("");
    setStreet("");
    setHouse("");
    setBuilding("");
    setApartment("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setIntercomName("");
  };

  return (
    <>
      <div className={styles.add_address_pc__type}>
        <Button
          text="Получатель"
          buttonType={isReceiver ? "filled" : "outline"}
          onClick={() => {
            setIsReceiver(true);
          }}
        />
        <Button
          text="Отправитель"
          buttonType={!isReceiver ? "filled" : "outline"}
          onClick={() => {
            setIsReceiver(false);
          }}
        />
      </div>
      <form className={styles.add_address_pc__form} onSubmit={handleSubmit}>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Имя"
            value={firstName ?? ""}
            onChange={(e) => setFirstName(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Фамилия"
            value={lastName ?? ""}
            onChange={(e) => setLastName(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-full flex gap-4">
          <BorderInput
            placeholder="Фамилия на латинице"
            value={lastNameLatin ?? ""}
            onChange={(e) => setLastNameLatin(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Имя на латинице"
            value={firstNameLatin ?? ""}
            onChange={(e) => setFirstNameLatin(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Улица"
            value={street ?? ""}
            onChange={(e) => setStreet(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Дом"
            value={house ?? ""}
            onChange={(e) => setHouse(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Номер мобильного телефона"
            value={phone ?? ""}
            onChange={(e) => setPhone(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Корпус"
            value={building ?? ""}
            onChange={(e) => setBuilding(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Квартира"
            value={apartment ?? ""}
            onChange={(e) => setApartment(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Имя на домофоне"
            value={intercomName ?? ""}
            onChange={(e) => setIntercomName(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Город"
            value={city ?? ""}
            onChange={(e) => setCity(e.target.value)}
            margin="mt-2"
          />
          <BorderInput
            placeholder="Индекс"
            value={postalCode ?? ""}
            onChange={(e) => setPostalCode(e.target.value)}
            margin="mt-2"
          />
        </div>
        <div className="w-[100%] flex gap-4">
          <BorderInput
            placeholder="Страна"
            value={country ?? ""}
            onChange={(e) => setCountry(e.target.value)}
            margin="mt-2"
          />
        </div>
        <Button
          text="Сохранить"
          buttonType="filled"
          type="submit"
          margin="mt-8"
        />
      </form>
    </>
  );
};
