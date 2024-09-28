import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

interface CostCardProps {
  onCostClick: () => void;
}

export const CostCard: React.FC<CostCardProps> = ({ onCostClick }) => {
  const handleClick = () => {
    onCostClick();
  };

  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 3,
        boxShadow: 5,
        borderRadius: 2,
        backgroundColor: "#f9fafb",
        border: "1px solid #e0e0e0",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#220CF3",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Тариф: Тариф Cтандарт Италия - Россия
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Посылка:
          </Typography>
          <Typography variant="body1">
            1 кг, размеры: 15 x 15 x 15 см
          </Typography>
        </Box>
        <Divider sx={{ marginY: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Цена:
          </Typography>
          <Typography variant="body1">37.00€</Typography>
        </Box>
        <Divider sx={{ marginY: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Содержимое:
          </Typography>
          <Typography variant="body1">0 предметов на сумму 0 евро</Typography>
        </Box>
        <Divider sx={{ marginY: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 1,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Всего:
          </Typography>
          <Typography variant="body1">37.00€</Typography>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              backgroundColor: "#220CF3",
              color: "#fff",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1E0AD1",
              },
            }}
          >
            Далее
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
