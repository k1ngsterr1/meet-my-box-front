import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { Tooltip } from "react-tooltip";

interface CourierCardProps {
  onCourierClick: (value: boolean) => void;
}

export const CourierCard: React.FC<CourierCardProps> = ({ onCourierClick }) => {
  const handleClick = (value: boolean) => {
    onCourierClick(value);
  };

  return (
    <Card
      sx={{
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: "#f9f9f9",
        width: "70%",
        padding: 2,
        textAlign: "center",
        marginTop: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#3F51B5",
            mb: 2,
          }}
        >
          Нужен ли курьер, чтобы забрать посылку?
          <span
            data-tooltip-id="my-tooltip3"
            data-tooltip-place="bottom"
            data-tooltip-content="Укажите нужен ли курьер чтобы забрать посылки."
          >
            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-main" />
          </span>
          <Tooltip id="my-tooltip3" style={{ fontSize: "18px" }} />
        </Typography>
        <span className="text-xs">Курьер уже заказан по другому заказу №</span>
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
