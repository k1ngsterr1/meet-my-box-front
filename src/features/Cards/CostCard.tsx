import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

interface PackageItem {
  cost: number;
  name: string;
  weight: number;
  country: string;
  quantity: number;
}

interface CostCardProps {
  onCostClick: () => void;
  packageCurrent: {
    departure: string;
    items: PackageItem[];
  };
}

export const CostCard: React.FC<CostCardProps> = ({
  onCostClick,
  packageCurrent,
}) => {
  // Calculate total weight and total cost
  const totalWeight = packageCurrent.items.reduce(
    (acc, item) => acc + item.weight,
    0
  );

  const totalCost = packageCurrent.items.reduce(
    (acc, item) => acc + item.cost,
    0
  );

  // Handle button click
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
          Посылка из {packageCurrent.items[0]?.country ?? "неизвестно"}
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
          <Typography variant="body1">{totalWeight} кг</Typography>
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
          <Typography variant="body1">{totalCost}€</Typography>
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
          <Typography variant="body1">
            {packageCurrent.items.length} предметов на сумму {totalCost} евро
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
            Всего:
          </Typography>
          <Typography variant="body1">{totalCost}€</Typography>
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
