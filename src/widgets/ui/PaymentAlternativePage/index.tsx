import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const PaymentAlternativePage: React.FC = () => {
  // State to store the package ID
  const [packageId, setPackageId] = useState<string | null>(null);

  // Retrieve package ID from AsyncStorage when component mounts
  useEffect(() => {
    const packageData = localStorage.getItem("packageId");
    const parsedPackageId = packageData ? JSON.parse(packageData).id : null;
    setPackageId(parsedPackageId);
  }, []);

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

      {/* Display Package ID */}
      {packageId && (
        <Typography variant="h6" sx={{ textAlign: "center", color: "#4caf50" }}>
          Ваш уникальный номер посылки: {packageId}
        </Typography>
      )}

      {/* Back Button */}
      <Button
        variant="contained"
        sx={{ marginTop: 4 }}
        onClick={() => (window.location.href = "/")}
      >
        Назад
      </Button>
    </Box>
  );
};
