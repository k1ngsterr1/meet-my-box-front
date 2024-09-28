import file from "@assets/Privacy Policy ENG, RUS, ITA.pdf";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

interface AgreeCardProps {
  onAgreeClick: () => void;
  toggle1: () => void;
  toggle2: () => void;
}

export const AgreeCard: React.FC<AgreeCardProps> = ({
  onAgreeClick,
  toggle1,
  toggle2,
}) => {
  const handleClick = () => {
    onAgreeClick();
  };

  return (
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
                onClick={toggle1}
                sx={{
                  color: "#220CF3",
                  "&.Mui-checked": { color: "#1E0AD1" },
                }}
              />
            }
            label={
              <Typography variant="body1">
                Даю согласие на обработку{" "}
                <Link
                  href={file}
                  target="_blank"
                  underline="hover"
                  onClick={(e) => e.stopPropagation()}
                  sx={{ color: "#220CF3", cursor: "pointer" }}
                >
                  персональных данных
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
                Принимаю пользовательское соглашение
              </Typography>
            }
          />
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            backgroundColor: "#220CF3",
            textTransform: "none",
            "&:hover": { backgroundColor: "#1E0AD1" },
          }}
        >
          Закончить
        </Button>
      </CardActions>
    </Card>
  );
};
