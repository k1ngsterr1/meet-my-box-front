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

interface InsuranceCardProps {
  onInsuranceClick: (value: boolean) => void;
  packageCurrent: any;
  price: string;
}

export const InsuranceCard: React.FC<InsuranceCardProps> = ({
  onInsuranceClick,
  packageCurrent,
  price,
}) => {
  const handleClick = (value: boolean) => {
    onInsuranceClick(value);
  };

  const totalCost = parseFloat(
    packageCurrent.reduce((sum: number, item: any) => {
      // Convert cost to number (if it's a string) and calculate 5%
      const itemCost = parseFloat(item.cost);
      const fivePercent = itemCost * 0.05; // Calculate 5% of the cost
      return (sum + fivePercent).toFixed(2);
    }, 0)
  );

  const priceNumber = parseFloat(price.replace("€", ""));

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
          <span
            data-tooltip-id="my-tooltip2"
            data-tooltip-place="bottom"
            data-tooltip-content="Укажите нужна ли вам страховка посылки."
          >
            <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-main" />
          </span>
          <Tooltip id="my-tooltip2" style={{ fontSize: "18px" }} />
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6A6A6A",
            mb: 2,
            fontSize: "16px",
          }}
        >
          Стоимость страхования 5% от заявленной стоимости. В случае ее потери
          вы получите полную стоимость.
          <br />
          <br />
          <span className="text-xs">
            *Посылка будет застрахована на стоимость заявленной ценности, но не
            более той, которая могла бы нарушать санкционное или иное применимое
            законодательство
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#6A6A6A",
            mb: 2,
            fontSize: "16px",
          }}
        >
          Цена со страховкой: €{priceNumber + totalCost}
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
