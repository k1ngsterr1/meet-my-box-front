import {
  faBitcoinSign,
  faCreditCard,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";

export const PaymentMethodsPage = () => {
  // Handle navigation for each payment type
  useEffect(() => {
    window.history.replaceState(null, "", "/");
  }, []);

  const handleOnlinePayment = () => {
    window.location.href = "/payment";
    localStorage.setItem("paymentMethod", "Оплата онлайн картой");
  };

  const handleAlternativePayment = (method: string) => {
    window.location.href = "/payment-alternative";
    localStorage.setItem("paymentMethod", method);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        gap: 3,
        backgroundColor: "#f9fafb",
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Выберите способ оплаты
      </Typography>

      {/* Online Bank Card Payment */}
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
          padding: 2,
          cursor: "pointer",
          boxShadow: 5,
          "&:hover": {
            boxShadow: 10,
          },
        }}
        onClick={handleOnlinePayment}
      >
        <FontAwesomeIcon
          icon={faCreditCard}
          size="2x"
          style={{ color: "#1976d2" }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Онлайн-картой банка
          </Typography>
          <Typography variant="body2">
            Оплата картой банка, выпущенной за пределами России и Беларуси.
          </Typography>
        </CardContent>
      </Card>

      {/* Bank Transfer Payment */}
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
          padding: 2,
          cursor: "pointer",
          boxShadow: 5,
          "&:hover": {
            boxShadow: 10,
          },
        }}
        onClick={() => handleAlternativePayment("Банковским переводом в евро")}
      >
        <FontAwesomeIcon
          icon={faEuroSign}
          size="2x"
          style={{ color: "#ff9800" }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Банковским переводом в евро
          </Typography>
          <Typography variant="body2">
            Оплата по банковским реквизитам по номеру IBAN.
          </Typography>
        </CardContent>
      </Card>

      {/* Rubles or Cryptocurrency Payment */}
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "400px",
          padding: 2,
          cursor: "pointer",
          boxShadow: 5,
          "&:hover": {
            boxShadow: 10,
          },
        }}
        onClick={() => handleAlternativePayment("Рублями или криптовалютой")}
      >
        <FontAwesomeIcon
          icon={faBitcoinSign}
          size="2x"
          style={{ color: "#f44336" }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Рублями или криптовалютой
          </Typography>
          <Typography variant="body2">
            Уточните реквизиты для оплаты, написав нам в вотсап или телеграм.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
