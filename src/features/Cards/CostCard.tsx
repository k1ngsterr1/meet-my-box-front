import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface PackageItem {
  cost: number;
  name: string;
  weight: number;
  country: string;
  quantity: number;
}

interface CostCardProps {
  onCostClick: () => void;
  price: string;
  packageCurrent: {
    departure: string;
    items: PackageItem[];
  };
  country: any;
  courier: boolean;
  insurance: boolean;
}

export const CostCard: React.FC<CostCardProps> = ({
  onCostClick,
  packageCurrent,
  price,
  country,
  insurance,
  courier,
}) => {
  const [openDialog, setOpenDialog] = useState(false); // State for dialog visibility

  if (!packageCurrent.items) {
    return <>В вашей посылке нет предметов, пожалуйста добавьте его</>;
  }

  // Calculate total weight and total cost
  const totalWeight = packageCurrent?.items
    .reduce((acc, item) => acc + item.weight, 0)
    .toFixed(2); // Fixed to 2 digits

  const totalCost = packageCurrent?.items
    .reduce((acc, item) => acc + item.cost * 0.05, 0)
    .toFixed(2); // Fixed to 2 digits

  // Handle button click
  const handleClick = () => {
    onCostClick();
  };

  // Handle dialog open and close
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  const priceNumber = parseFloat(price.replace(/[^\d.]/g, ""));
  const finalInsuranceCost = (insurance ? parseFloat(totalCost) : 0).toFixed(2);
  const lastPrice = (
    priceNumber +
    parseFloat(finalInsuranceCost) +
    (courier ? 3 : 0)
  ).toFixed(2);

  // Store the updated package price with 2 decimals
  localStorage.setItem("packagePrice", `€${lastPrice}`);

  return (
    <>
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
            Посылка из {country.from} в {country.to}
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
              Содержимое:
            </Typography>
            <Typography variant="body1">
              <a className="text-main underline" onClick={handleDialogOpen}>
                Подробнее
              </a>
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
              Цена со страховкой:
            </Typography>
            <Typography variant="body1">
              €{(priceNumber + parseFloat(finalInsuranceCost)).toFixed(2)}
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
              Курьер:
            </Typography>
            <Typography variant="body1">
              €{courier ? "3.00" : "0.00"}
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
            <Typography variant="body1">€{lastPrice}</Typography>
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

      {/* Dialog for Package Details */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Детали содержимого</DialogTitle>
        <DialogContent>
          <Table>
            <TableBody>
              {packageCurrent.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                  </TableCell>
                  <TableCell>Вес: {item.weight.toFixed(2)} кг</TableCell>
                  <TableCell>Количество: {item.quantity}</TableCell>
                  <TableCell>Страна: {item.country}</TableCell>
                  <TableCell>Цена: €{item.cost.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            variant="contained"
            sx={{ backgroundColor: "#220CF3", color: "#fff" }}
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
