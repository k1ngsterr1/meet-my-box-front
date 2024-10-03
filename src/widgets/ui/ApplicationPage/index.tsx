import type { AddressProps } from "@features/AddressesCard";
import { AgreeCard } from "@features/Cards/AgreeCard";
import { CostCard } from "@features/Cards/CostCard";
import { CourierCard } from "@features/Cards/CourierCard";
import { InsuranceCard } from "@features/Cards/InsuranceCard";
import { NoteCard } from "@features/NoteCard";
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
import { useGetAddresses } from "@shared/lib/hooks/useGetAddress";
import Button from "@shared/ui/Button/ui/button";
import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

export const ApplicationPage = () => {
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

  const handleAddressChange = (addressId: number) => {
    // Assuming `addresses` is your array of address objects
    const selectedAddress = addresses?.find(
      (address) => address.id === addressId
    );

    if (selectedAddress) {
      setChosenAddress(addressId); // Set the chosen address ID
      setAddress(selectedAddress); // Set the full address object
    }
  };

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

  const handleAddressType = (type: string) => {
    const filteredAddresses = addresses?.filter(
      (address) => address.type === type
    );
    setCurrentAddress(filteredAddresses);
    if (filteredAddresses && filteredAddresses.length > 0) {
      setChosenAddress(filteredAddresses[0].id);
      setAddress(filteredAddresses[0]);
    }
  };

  const toggle1 = () => setAgree1(!agree1);
  const toggle2 = () => setAgree2(!agree2);
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);
  const toggle3 = () => setAgree3(!agree3); // Обработчик для третьего сост
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

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
          <Tab label="Адреса" />
          <Tab label="Страховка" />
          <Tab label="Вызов курьера" />
          <Tab label="Примечание" />
          <Tab label="Стоимость" />
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
          <InsuranceCard onInsuranceClick={handleInsuranceClick} />
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
      {selectedTab === 4 && (
        <>
          <NoteCard onNoteClick={handleNoteClick} setter={setNote} />
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
      {selectedTab === 5 && (
        <CostCard
          onCostClick={handleCostClick}
          packageCurrent={packageCurrent}
          price={price}
          country={countryData}
          insurance={insurance}
          courier={courier}
          address={address}
        />
      )}
      {selectedTab === 6 && (
        <>
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
