import React from "react";
import { Box, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
    </Box>
  );
};
