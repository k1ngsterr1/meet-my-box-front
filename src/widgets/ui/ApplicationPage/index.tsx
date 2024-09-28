import type { AddressProps } from "@features/AddressesCard";
import { AgreeCard } from "@features/Cards/AgreeCard";
import { CostCard } from "@features/Cards/CostCard";
import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
import { NoteCard } from "@features/NoteCard";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, Tabs } from "@mui/material"; // Импортируем компоненты MUI для табов
import { useUpdatePackage } from "@shared/lib/hooks/Packages/useUpdatePackage";
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
import Button from "@shared/ui/Button/ui/button";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

export const ApplicationPage = () => {
  const [addresses, setAddresses] = useState<AddressProps[]>();
  const [currentAddress, setCurrentAddress] = useState<AddressProps[]>();
  const [chosenAddress, setChosenAddress] = useState<number>();
  const [id, setId] = useState<string>();
  const [selectedTab, setSelectedTab] = useState(0); // Состояние для выбранного таба
  const [insurance, setInsurance] = useState(false);
  const [courier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [packageCurrent, setPackageCurrent] = useState<any>(null);

  useEffect(() => {
    const fetchAddressesAsync = async () => {
      const storedPackageId = JSON.parse(
        localStorage.getItem("packageId") || "{}"
      );
      if (storedPackageId) {
        setId(storedPackageId.id);
        setPackageCurrent(storedPackageId);
        try {
          const fetchedAddresses = await useGetAddresses();
          if (fetchedAddresses) {
            setAddresses(fetchedAddresses);
            setCurrentAddress(
              fetchedAddresses.filter((address) => address.type === "receiver")
            );
            if (fetchedAddresses.length > 0) {
              setChosenAddress(fetchedAddresses[0].id);
            }
          }
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      }
    };
    fetchAddressesAsync();
  }, []);

  const handleAddressClick = () => setSelectedTab(1);

  const handleInsuranceClick = (value: boolean) => {
    setInsurance(value);
    setSelectedTab(2);
  };

  const handleCourierClick = (value: boolean) => {
    setCourier(value);
    setSelectedTab(3);
  };

  const handleNoteClick = (value: string) => {
    setSelectedTab(4);
  };

  const handleCostClick = () => setSelectedTab(5);

  const handleAgreeClick = async () => {
    if (!agree1 || !agree2) {
      alert("Вы должны согласиться с обеими условиями!");
      return;
    } else {
      // Обновление и отправка данных пакета
      const packageData = JSON.parse(localStorage.getItem("packageId") || "{}");

      const updatedItems = packageData.items.map((item: any) => {
        let updatedCost = item.cost;
        if (insurance) updatedCost += item.cost * 0.05;
        if (courier) updatedCost += item.cost * 0.02;
        return { ...item, cost: updatedCost };
      });

      try {
        const updatedPackage = await useUpdatePackage({
          id: parseInt(id !== undefined ? id : "", 10),
          insurance: insurance ? "Нужна" : "Не нужна",
          courier: courier ? "Нужен" : "Не нужен",
          note: note,
          addressId: chosenAddress,
          items: updatedItems,
        });

        localStorage.setItem("packageId", JSON.stringify(updatedPackage));
        window.location.href = "/payment"; // Редирект на страницу оплаты
      } catch (error) {
        console.error("Ошибка обновления пакета:", error);
        alert("Произошла ошибка при обновлении данных. Попробуйте снова.");
      }
    }
  };

  const handleAddressChange = (addressId: number) =>
    setChosenAddress(addressId);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleAddressType = (type: string) => {
    const filteredAddresses = addresses?.filter(
      (address) => address.type === type
    );
    setCurrentAddress(filteredAddresses);
    if (filteredAddresses && filteredAddresses.length > 0) {
      setChosenAddress(filteredAddresses[0].id);
    }
  };

  const toggle1 = () => setAgree1(!agree1);
  const toggle2 = () => setAgree2(!agree2);

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center justify-center">
      {/* Табы навигации */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        sx={{ marginBottom: 4 }}
        centered
      >
        <Tab label="Адрес" />
        <Tab label="Страховка" disabled={selectedTab < 1} />
        <Tab label="Курьер" disabled={selectedTab < 2} />
        <Tab label="Примечания" disabled={selectedTab < 3} />
        <Tab label="Стоимость" disabled={selectedTab < 4} />
        <Tab label="Согласие" disabled={selectedTab < 5} />
      </Tabs>

      {/* Содержимое каждого этапа */}
      {selectedTab === 0 && (
        <div className="flex flex-col gap-4 items-center justify-center w-[90%] max-w-[800px] min-h-[300px]">
          <span className="w-full text-xl flex text-center justify-center gap-4">
            Выберите итоговый адрес
            <span
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Выберите адрес получателя и отправителя, которые вы заполняли ранее"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-main" />
            </span>
            <Tooltip id="my-tooltip" />
          </span>
          <div className="w-full flex items-center justify-center gap-2">
            <Button
              text={"Получатель"}
              buttonType={
                currentAddress && currentAddress[0]?.type === "receiver"
                  ? "filled"
                  : "outline"
              }
              onClick={() => handleAddressType("receiver")}
            />
            <Button
              text={"Отправитель"}
              buttonType={
                currentAddress && currentAddress[0]?.type === "sender"
                  ? "filled"
                  : "outline"
              }
              onClick={() => handleAddressType("sender")}
            />
          </div>
          <select
            className="block w-[60%] px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => handleAddressChange(parseInt(e.target.value))}
            value={chosenAddress || ""}
          >
            <option value="" disabled>
              Выберите адрес
            </option>
            {currentAddress?.map((address) => (
              <option key={address.id} value={address.id}>
                {`${address.city}, Здание ${address.housing}, Кв. ${address.apartment}, Дом ${address.building}`}
              </option>
            ))}
          </select>
          <Button
            text="Выбрать"
            buttonType="filled"
            onClick={handleAddressClick}
          />
          <Button
            text={"Добавить"}
            buttonType="outline"
            onClick={() => (window.location.href = "/address/add")}
          />
          <Button
            text={"Содержимое посылки"}
            buttonType="outline"
            onClick={() => (window.location.href = "/packages/add")}
          />
        </div>
      )}

      {selectedTab === 1 && (
        <InsuranceCard onInsuranceClick={handleInsuranceClick} />
      )}
      {selectedTab === 2 && <CourierCard onCourierClick={handleCourierClick} />}
      {selectedTab === 3 && (
        <NoteCard onNoteClick={handleNoteClick} setter={setNote} />
      )}
      {/* {showDocumentCard && (
        <DocumentUpload onDocumentClick={handleDocumentClick} />
      )} */}
      {/* {showCostCard && (
        <CostCard
          onCostClick={handleCostClick}
          packageCurrent={packageCurrent}
        />
      )} */}
      {/* {showAgreeCard && ( */}
      {selectedTab === 4 && (
        <CostCard
          onCostClick={handleCostClick}
          packageCurrent={packageCurrent}
        />
      )}
      {selectedTab === 5 && (
        <AgreeCard
          onAgreeClick={handleAgreeClick}
          toggle1={toggle1}
          toggle2={toggle2}
        />
      )}
    </div>
  );
};
