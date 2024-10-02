import {
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";

interface InsuranceCardProps {
  onInsuranceClick: (value: boolean) => void;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({
  onInsuranceClick,
}) => {
  const handleClick = (value: boolean) => {
    onInsuranceClick(value);
  };

  return (
    <Card
      sx={{
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: "#f7f7f7",
        width: "70%",
        padding: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#3F51B5",
            mb: 1,
          }}
        >
          Страховка
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6A6A6A",
            mb: 2,
            fontSize: "16px",
          }}
        >
          Страховка покрывает стоимость содержимого в случае потери или
          повреждения. Стоимость страховки составляет 5% от общей стоимости
          товаров в посылке. Нажмите "Да", если хотите оформить страховку, или
          "Нет" для отказа.{" "}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          gap: 4,
          mt: 2,
        }}
      >
        <Box>
          <FormControlLabel
            control={
              <Checkbox color="primary" onClick={() => handleClick(true)} />
            }
            label={
              <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
                Да
              </Typography>
            }
          />
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Checkbox color="error" onClick={() => handleClick(false)} />
            }
            label={
              <Typography sx={{ fontSize: "18px", fontWeight: "medium" }}>
                Нет
              </Typography>
            }
          />
        </Box>
      </CardActions>
    </Card>
  );
};
