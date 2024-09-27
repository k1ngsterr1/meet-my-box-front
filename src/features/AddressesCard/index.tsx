import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export interface AddressProps {
  id: number;
  type: "receiver" | "sender";
  firstName: string;
  phoneNumber: string;
  street: string;
  housing: string;
  building: string;
  apartment: string;
  city: string;
  postal_code: string;
}

interface Items {
  items: AddressProps[];
}

export const AddressPC: React.FC<Items> = ({ items }) => {
  const [show, setShow] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        mt: 4,
        width: "100%",
      }}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* Left Section */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.firstName || "Неизвестно"}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    item.type === "receiver" ? "#91BB45" : "#FF6347",
                }}
              />
              <Typography variant="body2" sx={{ color: "#666" }}>
                {item.type === "receiver" ? "Получатель" : "Отправитель"}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Номер телефона: <strong>{item.phoneNumber}</strong>
            </Typography>
            <Typography variant="body2">
              Город: <strong>{item.city}</strong>
            </Typography>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "40%",
            }}
          >
            {show && <PopupCard onClose={() => setShow(false)} items={items} />}
            <Button
              variant="contained"
              sx={{ width: "100%", mt: 2, backgroundColor: "#220CF3" }}
              onClick={() => setShow(true)}
            >
              Подробнее
            </Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

interface PopupCardProps {
  items: AddressProps[];
  onClose: () => void;
}

// Popup Card Component
const PopupCard: React.FC<PopupCardProps> = ({ items, onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: 600,
          borderRadius: 3,
          boxShadow: 5,
          p: 3,
          backgroundColor: "#fff",
          position: "relative",
          animation: "fadeIn 0.5s ease-in-out",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "#666",
          }}
        >
          <Close />
        </IconButton>

        {/* Popup Content */}
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Детали Адреса
          </Typography>
          {items.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1">
                <strong>Имя: </strong> {item.firstName || "Неизвестно"}
              </Typography>
              <Typography variant="body1">
                <strong>Тип: </strong>
                {item.type === "receiver" ? "Получатель" : "Отправитель"}
              </Typography>
              <Typography variant="body1">
                <strong>Номер телефона: </strong> {item.phoneNumber}
              </Typography>
              <Typography variant="body1">
                <strong>Адрес: </strong>{" "}
                {`${item.street}, ${item.housing}, ${item.building}, ${item.apartment}`}
              </Typography>
              <Typography variant="body1">
                <strong>Город: </strong> {item.city}
              </Typography>
              <Typography variant="body1">
                <strong>Почтовый индекс: </strong> {item.postal_code}
              </Typography>
              {index < items.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};
