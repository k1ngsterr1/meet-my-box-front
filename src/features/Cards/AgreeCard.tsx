import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface AgreeCardProps {
  onAgreeClick: () => void;
  toggle1: () => void;
  toggle2: () => void;
  toggle3: () => void;
  toggle4: () => void;
  toggle5: () => void;
  toggle6: () => void;
  addresses: any;
  senderID: number;
  receiverID: number;
  insurance: boolean;
  courier: boolean;
  // Новый пропс для третьего состояния
}

export const AgreeCard: React.FC<AgreeCardProps> = ({
  onAgreeClick,
  toggle1,
  toggle2,
  toggle3,
  toggle4,
  toggle5,
  toggle6,
  addresses,
  senderID,
  receiverID,
  insurance,
  courier,
}) => {
  const handleClick = () => {
    onAgreeClick();
  };
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [addressType, setAddressType] = useState<"receiver" | "sender">(
    "sender"
  );
  const [currentAddress, setCurrentAddress] = useState(
    addresses.find((address: any) => address.id === senderID) || {}
  );
  const handleAddressClick = () => {
    console.log(currentAddress);
    setAddressModalOpen(true);
  };
  const handleAddressTypeChange = (value: "receiver" | "sender") => {
    setAddressType(value);
    setCurrentAddress(
      addresses.find(
        (address: any) =>
          address.id === (value === "sender" ? senderID : receiverID)
      ) || {}
    );
  };

  // Обработчик закрытия модального окна
  const handleClose = () => {
    setAddressModalOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
          boxShadow: 6,
          borderRadius: 3,
          padding: 3,
          backgroundColor: "#f9fafb",
          border: "1px solid #e0e0e0",
        }}
      >
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle5}
                  checked={insurance}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={
                <Typography variant="body1">Страхование включено</Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle6}
                  checked={courier}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={<Typography variant="body1">Курьер</Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle1}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  Соглашаюсь{" "}
                  <Link
                    href="https://example.com/privacy_policy.pdf"
                    target="_blank"
                    underline="hover"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ color: "#220CF3", cursor: "pointer" }}
                  >
                    с политикой конфиденциальности
                  </Link>
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle2}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  Соглашаюсь{" "}
                  <Link
                    href="https://example.com/public_offer.pdf"
                    target="_blank"
                    underline="hover"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ color: "#220CF3", cursor: "pointer" }}
                  >
                    с публичная офертой
                  </Link>{" "}
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle3}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  Даю согласие{" "}
                  <Link
                    href="https://example.com/personal_data.pdf"
                    target="_blank"
                    underline="hover"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ color: "#220CF3", cursor: "pointer" }}
                  >
                    на обработку персональных данных
                  </Link>
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onClick={toggle4}
                  sx={{
                    color: "#220CF3",
                    "&.Mui-checked": { color: "#1E0AD1" },
                  }}
                />
              }
              label={
                <Typography variant="body1">
                  Ознакомлен{" "}
                  <Link
                    href="https://example.com/personal_data.pdf"
                    target="_blank"
                    underline="hover"
                    onClick={(e) => e.stopPropagation()}
                    sx={{ color: "#220CF3", cursor: "pointer" }}
                  >
                    с правилами перевозки
                  </Link>
                </Typography>
              }
            />
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mt: 2, gap: 2 }}>
          {/* Кнопка для открытия модального окна с адресами */}
          <Button
            variant="outlined"
            onClick={handleAddressClick}
            sx={{
              textTransform: "none",
              color: "#220CF3",
              textTransform: "none",
              borderRadius: "999px",
              borderColor: "#220CF3",
              "&:hover": { borderColor: "#1E0AD1" },
            }}
          >
            Адрес
          </Button>
          {/* Кнопка "Закончить" */}
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              backgroundColor: "#220CF3",
              color: "#fff",
              textTransform: "none",
              borderRadius: "999px",
            }}
          >
            Перейти к оплате
          </Button>
        </CardActions>
      </Card>

      {/* Модальное окно для редактирования адреса */}
      <Modal
        open={isAddressModalOpen}
        onClose={handleClose}
        aria-labelledby="address-modal"
        aria-describedby="address-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* Переключение между "Отправитель" и "Получатель" */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant={addressType === "sender" ? "contained" : "outlined"}
              onClick={() => handleAddressTypeChange("sender")}
            >
              Получатель
            </Button>
            <Button
              variant={addressType === "receiver" ? "contained" : "outlined"}
              onClick={() => handleAddressTypeChange("receiver")}
            >
              Отправитель
            </Button>
          </Box>

          {/* Отображение информации об адресе */}
          <Typography variant="body1">
            <strong>Имя:</strong> {currentAddress.firstName || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Телефон:</strong>{" "}
            {currentAddress.phoneNumber || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Улица:</strong> {currentAddress.street || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Дом:</strong> {currentAddress.building || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Квартира:</strong>{" "}
            {currentAddress.apartment || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Город:</strong> {currentAddress.city || "Не указано"}
          </Typography>
          <Typography variant="body1">
            <strong>Почтовый код:</strong>{" "}
            {currentAddress.postalCode || "Не указано"}
          </Typography>

          <Button variant="contained" onClick={handleClose}>
            Закрыть
          </Button>
        </Box>
      </Modal>
    </>
  );
};
