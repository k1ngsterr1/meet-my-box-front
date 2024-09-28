import type { AddressProps } from "@features/AddressesCard";
import { AgreeCard } from "@features/Cards/AgreeCard";
import { CostCard } from "@features/Cards/CostCard";
import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
// import DocumentUpload from "@features/Documents";
import { NoteCard } from "@features/NoteCard";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const [showAddresses, setShowAddresses] = useState(true);
  const [showInsuranceCard, setShowInsuranceCard] = useState(false);
  const [showCourierCard, setShowCourierCard] = useState(false);
  const [showNoteCard, setShowNoteCard] = useState(false);
  const [showCostCard, setShowCostCard] = useState(false);
  const [showAgreeCard, setShowAgreeCard] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [courier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const [documents, setDocuments] = useState([]);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [packageCurrent, setPackageCurrent] = useState<any>(null);
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    const fetchAddressesAsync = async () => {
      const storedPackageId = JSON.parse(
        localStorage.getItem("packageId") || "{}"
      );
      const priceData = localStorage.getItem("packagePrice");
      if (priceData) {
        setPrice(priceData);
      }
      if (storedPackageId) {
        setId(storedPackageId.id);
        setPackageCurrent(storedPackageId);

        try {
          const fetchedAddresses = await useGetAddresses();
          if (fetchedAddresses) {
            console.log(fetchedAddresses);
            setAddresses(fetchedAddresses);
            setCurrentAddress(
              fetchedAddresses.filter((address) => address.type === "receiver")
            );
            if (fetchedAddresses !== undefined) {
              console.log("workss", fetchedAddresses[0].id);
              await setChosenAddress(fetchedAddresses[0].id);
            }
          }
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      }
    };

    // Call the async function inside useEffect
    fetchAddressesAsync();
  }, []);

  const handleAddressClick = () => {
    setShowAddresses(false);
    setShowInsuranceCard(true);
  };
  const handleAddressChange = (addressId: number) => {
    console.log(addressId);
    setChosenAddress(addressId);
  };
  const handleInsuranceClick = (value: boolean) => {
    setInsurance(value);
    setShowInsuranceCard(false);
    setShowCourierCard(true);
  };
  const handleCourierClick = (value: boolean) => {
    setCourier(value);
    setShowCourierCard(false);
    setShowNoteCard(true);
  };
  const handleNoteClick = (value: string) => {
    setShowNoteCard(false);
    // setShowDocumentCard(true);
    setShowCostCard(true);
    console.log(note);
  };
  const handleCostClick = () => {
    setShowCostCard(false);
    setShowAgreeCard(true);
  };
  const handleAgreeClick = async () => {
    if (!agree1 || !agree2) {
      alert("Вы должны согласиться с обеими условиями!");
      return;
    } else {
      setShowAgreeCard(false);

      // Extract package data from localStorage
      const packageData = JSON.parse(localStorage.getItem("packageId") || "{}");

      // Retrieve and update the cost of the package from localStorage
      let packagePrice = parseFloat(
        localStorage.getItem("packagePrice")?.replace(/[^0-9.]/g, "") || "0"
      );

      // If insurance is needed, add 5%
      if (insurance) {
        packagePrice += packagePrice * 0.05;
      }

      // If courier is needed, add 2%
      if (courier) {
        packagePrice += packagePrice * 0.02;
      }

      // Format the updated price with the euro sign
      const formattedPrice = `€${packagePrice.toFixed(2)}`;

      // Update the localStorage with the new price
      localStorage.setItem("packagePrice", formattedPrice);

      // Proceed with the package update
      const package_now = await useUpdatePackage({
        id: parseInt(id !== undefined ? id : "", 10),
        insurance: !insurance ? "Не нужна" : "Нужна",
        courier: !courier ? "Не нужен" : "Нужен",
        note: note,
        addressId: chosenAddress,
      });

      console.log(package_now);

      // Update package data in localStorage
      localStorage.setItem("packageId", JSON.stringify(package_now));

      // Redirect to the payment page
      window.location.href = "/payment";
    }
  };

  const handleAddressType = (type: string) => {
    const currentAddress = addresses?.filter(
      (address) => address.type === type
    );
    setCurrentAddress(currentAddress);
    if (currentAddress !== undefined) {
      setChosenAddress(currentAddress[0].id);
    }
  };
  const toggle1 = () => {
    setAgree1(!agree1);
  };
  const toggle2 = () => {
    setAgree2(!agree2);
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      {showAddresses && (
        <div className="flex flex-col gap-4 items-center justify-center w-[90%] max-w-[800px] min-h-[300px]">
          <span className="w-full text-xl flex text-center  justify-center gap-4">
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
                currentAddress !== undefined &&
                currentAddress[0].type === "receiver"
                  ? "filled"
                  : "outline"
              }
              onClick={() => {
                if (
                  currentAddress !== undefined &&
                  currentAddress[0].type !== "receiver"
                ) {
                  handleAddressType("receiver");
                }
              }}
            />
            <Button
              text={"Отправитель"}
              buttonType={
                currentAddress !== undefined &&
                currentAddress[0].type !== "receiver"
                  ? "filled"
                  : "outline"
              }
              onClick={() => {
                if (
                  currentAddress !== undefined &&
                  currentAddress[0].type === "receiver"
                ) {
                  handleAddressType("sender");
                }
              }}
            />
          </div>
          <select
            className="block w-[60%] px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500"
            onChange={(e) => handleAddressChange(parseInt(e.target.value))}
            defaultValue="" // Set default to empty string
          >
            <option value="" disabled>
              Выберите адрес
            </option>
            {currentAddress?.map((address) => (
              <option key={address.id} value={address.id} className="w-full">
                {address.city +
                  ", Здание " +
                  address.housing +
                  ", Кв. " +
                  address.apartment +
                  ", Дом " +
                  address.building}
              </option>
            ))}
          </select>

          <Button
            text="Выбрать"
            buttonType="filled"
            onClick={handleAddressClick}
          ></Button>
        </div>
      )}
      {showInsuranceCard && (
        <InsuranceCard onInsuranceClick={handleInsuranceClick} />
      )}
      {showCourierCard && <CourierCard onCourierClick={handleCourierClick} />}
      {showNoteCard && (
        <NoteCard onNoteClick={handleNoteClick} setter={setNote} />
      )}
      {/* {showDocumentCard && (
        <DocumentUpload onDocumentClick={handleDocumentClick} />
      )} */}
      {showCostCard && (
        <CostCard
          onCostClick={handleCostClick}
          packageCurrent={packageCurrent}
          price={price}
        />
      )}
      {showAgreeCard && (
        <AgreeCard
          onAgreeClick={handleAgreeClick}
          toggle1={toggle1}
          toggle2={toggle2}
        />
      )}
    </div>
  );
};
