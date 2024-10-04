import type { AddressProps } from "@features/AddressesCard";
import { AgreeCard } from "@features/Cards/AgreeCard";
import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Delete } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button as MUIBTN,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material"; // Импортируем компоненты MUI для табов
import { useUpdatePackage } from "@shared/lib/hooks/Packages/useUpdatePackage";
import { checkAuth } from "@shared/lib/hooks/useCheckAuth";
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
import Button from "@shared/ui/Button/ui/button";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

export const ApplicationPage = () => {
  const [selectedAddressType, setSelectedAddressType] = useState<
    "sender" | "receiver" | null
  >(null);
  const [addresses, setAddresses] = useState<AddressProps[]>();
  const [currentAddress, setCurrentAddress] = useState<AddressProps[]>();
  const [address, setAddress] = useState<AddressProps>();
  const [chosenAddress, setChosenAddress] = useState<number>();
  const [id, setId] = useState<string>();
  const [selectedTab, setSelectedTab] = useState(1); // Состояние для выбранного таба
  const [insurance, setInsurance] = useState(false);
  const [courier, setCourier] = useState(false);
  const [note, setNote] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false); // Состояние для третьего чекбокса
  const [packageCurrent, setPackageCurrent] = useState<any>(null);
  const [price, setPrice] = useState<string>("");
  const [countryData, setCountryData] = useState<any>("");
  const [openDialog, setOpenDialog] = useState(false);
  const toggle1 = () => setAgree1(!agree1);
  const toggle2 = () => setAgree2(!agree2);
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  const toggle3 = () => setAgree3(!agree3); // Обработчик для третьего сост
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [senderAddressId, setSenderAddressId] = useState<number | null>(null);
  const [receiverAddressId, setReceiverAddressId] = useState<number | null>(
    null
  );

  const finalInsuranceCost = (insurance ? parseFloat(totalCost) : 0).toFixed(2);

  useEffect(() => {
    const fetchAddressesAsync = async () => {
      const storedPackageId = JSON.parse(
        localStorage.getItem("packageId") || "{}"
      );
      const countryData = JSON.parse(
        localStorage.getItem("countryData") || "{}"
      );
      if (countryData) {
        setCountryData(countryData);
      }
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
            setAddresses(fetchedAddresses);
            console.log("lol:", fetchedAddresses);
            setCurrentAddress(
              fetchedAddresses.filter((address) => address.type === "receiver")
            );
            if (fetchedAddresses.length > 0) {
              setChosenAddress(fetchedAddresses[0].id);
              setAddress(fetchedAddresses[0]);
            }
          }
        } catch (error) {
          console.error("Error fetching addresses:", error);
        }
      }
    };
    setSelectedTab(1);
    fetchAddressesAsync();
  }, []);

  useEffect(() => {
    const isAuthenticated = checkAuth();
    if (!isAuthenticated) return;
  }, []);

  const handleAddressClick = () => setSelectedTab(2);

  const handleInsuranceClick = (value: boolean) => {
    setInsurance(value);
    setSelectedTab(3);
  };

  const handleCourierClick = (value: boolean) => {
    setCourier(value);
    setSelectedTab(4);
  };

  const handleNoteClick = (value: string) => {
    setSelectedTab(4);
  };

  // const handleAddressChange = (addressId: number) => {
  //   // Assuming `addresses` is your array of address objects
  //   const selectedAddress = addresses?.find(
  //     (address) => address.id === addressId
  //   );

  //   if (selectedAddress) {
  //     setChosenAddress(addressId); // Set the chosen address ID
  //     setAddress(selectedAddress); // Set the full address object
  //   }
  // };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleCostClick = () => setSelectedTab(5);

  const handleAgreeClick = async () => {
    if (!agree1 || !agree2) {
      alert("Вы должны согласиться со всеми условиями!");
      return;
    } else {
      // Обновление и отправка данных пакета
      const packageData = JSON.parse(localStorage.getItem("packageId") || "{}");
      console.log("data:", packageData);

      // В данном случае packageData уже распарсен и items можно получить напрямую
      const items = packageData.items || []; // Проверка на наличие items в объекте

      // Proceed with the package update
      const package_now = await useUpdatePackage({
        id: parseInt(id !== undefined ? id : "", 10),
        insurance: !insurance ? "Не нужна" : "Нужна",
        courier: !courier ? "Не нужен" : "Нужен",
        items: items,
        note: note,
        addressId: chosenAddress,
      });

      console.log(package_now);

      // Update package data in localStorage
      localStorage.setItem("packageId", JSON.stringify(package_now));

      // Redirect to the payment page
      window.location.href = "/payment-methods";
    }
  };

  // const handleAddressType = (type: string) => {
  //   const filteredAddresses = addresses?.filter(
  //     (address) => address.type === type
  //   );
  //   setCurrentAddress(filteredAddresses);
  //   if (filteredAddresses && filteredAddresses.length > 0) {
  //     setChosenAddress(filteredAddresses[0].id);
  //     setAddress(filteredAddresses[0]);
  //   }
  // };

  const handleNavigation = () => {
    window.location.href = "/packages/add";
  };

  const handleItemDelete = (index: number) => {
    const packageData = JSON.parse(localStorage.getItem("packageId") || "{}");
    if (packageData.items) {
      packageData.items.splice(index, 1); // Удаление элемента по индексу
      localStorage.setItem("packageId", JSON.stringify(packageData)); // Обновление `localStorage`
    }
    // Обновляем состояние после удаления
    setPackageCurrent({ ...packageCurrent, items: packageData.items });
  };

  // Обработчик выбора адреса из выпадающего списка
  const handleAddressChange = (selectedId: number) => {
    if (selectedAddressType === "sender" && selectedId !== receiverAddressId) {
      setSenderAddressId(selectedId);
    } else if (
      selectedAddressType === "receiver" &&
      selectedId !== senderAddressId
    ) {
      setReceiverAddressId(selectedId);
    } else {
      alert("Отправитель и получатель не могут быть одним и тем же адресом!");
    }
  };

  // Устанавливаем тип выбранного адреса
  const handleAddressType = (type: "sender" | "receiver") => {
    setSelectedAddressType(type);
  };

  return (
    <div className="w-full min-h-[80vh] pb-8 pt-8 flex flex-col items-center justify-center">
      {/* Табы навигации */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{ marginBottom: 4, width: "100%" }} // Set width to ensure it fits the container
          centered={!isSmallScreen} // Centered only on larger screens
          variant={isSmallScreen ? "scrollable" : "fullWidth"} // Scrollable on small screens
          scrollButtons="auto" // Automatically show scroll buttons when needed
          allowScrollButtonsMobile // Enable scroll buttons for mobile devices
        >
          <Tab
            label="Рассчитать"
            onClick={() => (window.location.href = "/calculate")}
          />
          <Tab label="Адреса и содержимое" />
          <Tab label="Страховка" />
          <Tab label="Вызов курьера" />
          <Tab label="Согласие" />
        </Tabs>
      </div>

      {/* Содержимое каждого этапа */}
      {selectedTab === 1 && (
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
                selectedAddressType === "receiver" ? "filled" : "outline"
              }
              onClick={() => handleAddressType("receiver")}
            />
            <Button
              text={"Отправитель"}
              buttonType={
                selectedAddressType === "sender" ? "filled" : "outline"
              }
              onClick={() => handleAddressType("sender")}
            />
          </div>
          <select
            className="block w-[60%] px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 mb-6"
            onChange={(e) => handleAddressChange(parseInt(e.target.value))}
            value={
              selectedAddressType === "sender"
                ? senderAddressId || ""
                : receiverAddressId || ""
            }
            disabled={!selectedAddressType} // Делаем выпадающий список активным только при выборе типа адреса
          >
            <option value="" disabled>
              Выберите адрес
            </option>
            {addresses?.map((address) => (
              <option key={address.id} value={address.id}>
                {`${address.city}, Здание ${address.housing}, Кв. ${address.apartment}, Дом ${address.building}`}
              </option>
            ))}
            {/* <option value="" disabled>
              {selectedAddressType
                ? `Выберите адрес ${selectedAddressType === "sender" ? "отправителя" : "получателя"}`
                : "Выберите тип адреса"}
            </option>
            {addresses!
              .filter(
                (address) =>
                  address.id !==
                  (selectedAddressType === "sender"
                    ? receiverAddressId
                    : senderAddressId)
              )
              .map((address) => (
                <option key={address.id} value={address.id}>
                  {`${address.city}, Здание ${address.housing}, Кв. ${address.apartment}, Дом ${address.building}`}
                </option>
              ))} */}
          </select>
          <Button
            text="Выбрать"
            buttonType="filled"
            onClick={handleAddressClick}
          />
          <Button
            text={"Добавить адрес"}
            buttonType="outline"
            onClick={() => (window.location.href = "/address/add")}
          />
          <Button
            text={"Содержимое посылки"}
            buttonType="outline"
            onClick={() => handleDialogOpen()}
          />
          {openDialog && (
            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Детали содержимого</DialogTitle>
              {packageCurrent.items === undefined ? (
                <div className="ml-4">Содержимое вашей посылки пусто</div>
              ) : (
                <DialogContent>
                  <Table>
                    <TableBody>
                      {packageCurrent.items.map((item: any, index: number) => (
                        <TableRow
                          key={index}
                          sx={{ display: { xs: "block", sm: "table-row" } }}
                        >
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "bold",
                                wordWrap: "break-word",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </TableCell>
                          <TableCell>Вес: {item.weight} кг</TableCell>
                          <TableCell>Количество: {item.quantity}</TableCell>
                          <TableCell>Страна: {item.country}</TableCell>
                          <TableCell>Цена: €{item.cost}</TableCell>
                          {/* Добавленная иконка удаления */}
                          <TableCell align="right">
                            <IconButton
                              onClick={() => handleItemDelete(index)}
                              sx={{ color: "red" }}
                              aria-label="удалить"
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </DialogContent>
              )}
              <DialogActions>
                <MUIBTN
                  onClick={handleNavigation}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Вернуться к содержимому
                </MUIBTN>
                <MUIBTN
                  onClick={handleDialogClose}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Закрыть
                </MUIBTN>
              </DialogActions>
            </Dialog>
          )}
        </div>
      )}
      {selectedTab === 2 && (
        <>
          <InsuranceCard
            onInsuranceClick={handleInsuranceClick}
            packageCurrent={packageCurrent.items}
            price={price}
          />
          <Button
            text={"Содержимое посылки"}
            buttonType="outline"
            onClick={() => handleDialogOpen()}
          />
          {openDialog && (
            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Детали содержимого</DialogTitle>
              {packageCurrent.items === undefined ? (
                <div className="ml-4">Содержимое вашей посылки пусто</div>
              ) : (
                <DialogContent>
                  <Table>
                    <TableBody>
                      {packageCurrent.items.map((item: any, index: number) => (
                        <TableRow
                          key={index}
                          sx={{ display: { xs: "block", sm: "table-row" } }}
                        >
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "bold",
                                wordWrap: "break-word",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </TableCell>
                          <TableCell>Вес: {item.weight} кг</TableCell>
                          <TableCell>Количество: {item.quantity}</TableCell>
                          <TableCell>Страна: {item.country}</TableCell>
                          <TableCell>Цена: €{item.cost}</TableCell>
                          {/* Добавленная иконка удаления */}
                          <TableCell align="right">
                            <IconButton
                              onClick={() => handleItemDelete(index)}
                              sx={{ color: "red" }}
                              aria-label="удалить"
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </DialogContent>
              )}
              <DialogActions>
                <MUIBTN
                  onClick={handleNavigation}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Вернуться к содержимому
                </MUIBTN>
                <MUIBTN
                  onClick={handleDialogClose}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Закрыть
                </MUIBTN>
              </DialogActions>
            </Dialog>
          )}
        </>
      )}
      {selectedTab === 3 && (
        <>
          <CourierCard onCourierClick={handleCourierClick} />
          <Button
            text={"Содержимое посылки"}
            buttonType="outline"
            margin="mt-4"
            onClick={() => handleDialogOpen()}
          />
          {openDialog && (
            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Детали содержимого</DialogTitle>
              {packageCurrent.items === undefined ? (
                <div className="ml-4">Содержимое вашей посылки пусто</div>
              ) : (
                <DialogContent>
                  <Table>
                    <TableBody>
                      {packageCurrent.items.map((item: any, index: number) => (
                        <TableRow
                          key={index}
                          sx={{ display: { xs: "block", sm: "table-row" } }}
                        >
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "bold",
                                wordWrap: "break-word",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </TableCell>
                          <TableCell>Вес: {item.weight} кг</TableCell>
                          <TableCell>Количество: {item.quantity}</TableCell>
                          <TableCell>Страна: {item.country}</TableCell>
                          <TableCell>Цена: €{item.cost}</TableCell>
                          {/* Добавленная иконка удаления */}
                          <TableCell align="right">
                            <IconButton
                              onClick={() => handleItemDelete(index)}
                              sx={{ color: "red" }}
                              aria-label="удалить"
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </DialogContent>
              )}
              <DialogActions>
                <MUIBTN
                  onClick={handleNavigation}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Вернуться к содержимому
                </MUIBTN>
                <MUIBTN
                  onClick={handleDialogClose}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Закрыть
                </MUIBTN>
              </DialogActions>
            </Dialog>
          )}
        </>
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
      {/* {selectedTab === 5 && (
        <CostCard
          onCostClick={handleCostClick}
          packageCurrent={packageCurrent}
          price={price}
          country={countryData}
          insurance={insurance}
          courier={courier}
          address={address}
        />
      )} */}
      {selectedTab === 4 && (
        <>
          <h1 className="text-3xl">Проверьте все ваши данные</h1>
          <h2 className="text-2xl mt-4">
            Посылка из <span className="text-main">{countryData.from}</span> в
            {""} {""}
            <span className="text-main">
              {""} {""}
              {countryData.to}
            </span>
          </h2>
          <h3 className="text-2xl mt-2">
            Цена со страховкой <span className="text-main"></span>
          </h3>
          <AgreeCard
            onAgreeClick={handleAgreeClick}
            toggle1={toggle1}
            toggle2={toggle2}
            toggle3={toggle3}
          />
          <Button
            text={"Содержимое посылки"}
            buttonType="outline"
            margin="mt-4"
            onClick={() => handleDialogOpen()}
          />
          {openDialog && (
            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Детали содержимого</DialogTitle>
              {packageCurrent.items === undefined ? (
                <div className="ml-4">Содержимое вашей посылки пусто</div>
              ) : (
                <DialogContent>
                  <Table>
                    <TableBody>
                      {packageCurrent.items.map((item: any, index: number) => (
                        <TableRow
                          key={index}
                          sx={{ display: { xs: "block", sm: "table-row" } }}
                        >
                          <TableCell>
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: "bold",
                                wordWrap: "break-word",
                              }}
                            >
                              {item.name}
                            </Typography>
                          </TableCell>
                          <TableCell>Вес: {item.weight} кг</TableCell>
                          <TableCell>Количество: {item.quantity}</TableCell>
                          <TableCell>Страна: {item.country}</TableCell>
                          <TableCell>Цена: €{item.cost}</TableCell>
                          {/* Добавленная иконка удаления */}
                          <TableCell align="right">
                            <IconButton
                              onClick={() => handleItemDelete(index)}
                              sx={{ color: "red" }}
                              aria-label="удалить"
                            >
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </DialogContent>
              )}
              <DialogActions>
                <MUIBTN
                  onClick={handleNavigation}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Вернуться к содержимому
                </MUIBTN>
                <MUIBTN
                  onClick={handleDialogClose}
                  variant="contained"
                  sx={{ backgroundColor: "#220CF3", color: "#fff" }}
                >
                  Закрыть
                </MUIBTN>
              </DialogActions>
            </Dialog>
          )}
        </>
      )}
    </div>
  );
};
