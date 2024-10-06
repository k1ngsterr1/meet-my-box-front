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
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

interface CourierCardProps {
  onCourierClick: (value: boolean, note: string) => void;
}

export const CourierCard: React.FC<CourierCardProps> = ({ onCourierClick }) => {
  const [notation, setNotation] = useState("");
  const handleClick = (value: boolean) => {
    onCourierClick(value, notation);
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
            data-tooltip-place="top"
            data-tooltip-content="Нужен ли курьер для забора? Возможно, уже заказан к другому заказу."
          >
            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-main" />
          </span>
          <Tooltip
            id="my-tooltip3"
            style={{ fontSize: "16px", fontWeight: 400 }}
          />
        </Typography>
        <input
          type="text"
          value={notation}
          onChange={(e) => setNotation(e.target.value)}
          placeholder={"Примечание"}
          className="p-2 border border-gray-300 rounded-md mt-1 shadow-sm w-[50%]"
          data-tooltip-id="tooltip-notation"
          data-tooltip-place="bottom"
          data-tooltip-content="Курьер уже заказан по другому заказу №"
        />
        <Tooltip id="tooltip-notation" style={{ fontSize: "18px" }} />
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
              <Checkbox
                color="primary"
                onClick={() => {
                  handleClick(true);
                }}
              />
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
              <Checkbox
                color="error"
                onClick={() => {
                  handleClick(false);
                }}
              />
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
