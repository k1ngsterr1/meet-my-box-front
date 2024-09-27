import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface Props {
  onClick: () => void;
}

export const Documents: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      marginTop={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 1.5,
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f9f9f9",
        border: "1px solid #e0e0e0",
      }}
    >
      {/* Weight Information */}
      <Typography variant="body1" sx={{ fontWeight: 500, color: "#333" }}>
        Максимальный вес: 10 кг
      </Typography>

      {/* Dimensions Information */}
      <Typography variant="body1" sx={{ color: "#333" }}>
        Длина + Высота + Ширина: <strong>&lt; 150 см</strong>
      </Typography>

      {/* Longest Side Information */}
      <Typography variant="body1" sx={{ color: "#333" }}>
        Самая длинная сторона не должна превышать: 100 см
      </Typography>

      {/* Action Button */}
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: "#220CF3",
          marginTop: 2,
          padding: "8px 16px",
          borderRadius: 2,
          fontWeight: "bold",
          textTransform: "none", // Keep the text casing consistent
        }}
      >
        Узнать цену
      </Button>
    </Box>
  );
};
