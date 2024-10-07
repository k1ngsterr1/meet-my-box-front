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
  insurance,
  courier,
}) => {
  const handleClick = () => {
    onAgreeClick();
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
    </>
  );
};
