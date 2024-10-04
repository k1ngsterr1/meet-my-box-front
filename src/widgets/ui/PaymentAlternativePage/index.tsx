import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import Button from "@shared/ui/Button/ui/button";
import React from "react";

export const PaymentAlternativePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 3,
        backgroundColor: "#f9fafb",
        padding: 4,
      }}
    >
      {/* Success Icon */}
      <FontAwesomeIcon
        icon={faCheckCircle}
        size="5x"
        style={{ color: "#4caf50" }}
      />

      {/* Confirmation Text */}
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", marginTop: 3 }}
      >
        Отлично! Ваша заявка отправлена.
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginTop: 2, color: "#555" }}
      >
        В скором времени с вами свяжутся наши менеджеры.
      </Typography>
      <Button
        buttonType="filled"
        text="Назад"
        onClick={() => (window.location.href = "/")}
      />
    </Box>
  );
};
