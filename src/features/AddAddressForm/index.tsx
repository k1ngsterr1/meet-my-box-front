import { useAddAddress } from "@shared/lib/hooks/useAddAddress";
// import Button from "@shared/ui/Button/ui/button";
import {
  Alert,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import Button from "@shared/ui/Button/ui/button";
import React, { useEffect, useState } from "react";

export const AddAddressForm: React.FC<{ user?: any }> = ({ user }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameLatin, setLastNameLatin] = useState("");
  const [firstNameLatin, setFirstNameLatin] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [intercomName, setIntercomName] = useState("");
  const [isReceiver, setIsReceiver] = useState(true);

  useEffect(() => {
    if (user) {
      setLastName(user.lastName ?? "");
      setFirstName(user.firstName ?? "");
      setLastNameLatin(user.lastNameLatin ?? "");
      setFirstNameLatin(user.firstNameLatin ?? "");
      setPhone(user.phoneNumber ?? "");
      setStreet(user.street ?? "");
      setHouse(user.building ?? "");
      setApartment(user.apartment ?? "");
      setCity(user.city ?? "");
      setPostalCode(user.postalCode ?? "");
      setCountry(user.country ?? "");
      setIntercomName(user.intercomName ?? "");
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await useAddAddress({
      type: isReceiver ? "receiver" : "sender",
      lastName,
      firstName,
      lastNameLatin,
      firstNameLatin,
      phoneNumber: phone,
      street,
      building: house,
      apartment,
      city,
      housing: building,
      postalCode,
      country,
      intercomName,
    });

    setLastName("");
    setFirstName("");
    setLastNameLatin("");
    setFirstNameLatin("");
    setPhone("");
    setStreet("");
    setHouse("");
    setBuilding("");
    setApartment("");
    setCity("");
    setPostalCode("");
    setCountry("");
    setIntercomName("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Добавить адрес
      </Typography>
      <ToggleButtonGroup
        value={isReceiver ? "receiver" : "sender"}
        exclusive
        onChange={(e, value) => setIsReceiver(value === "receiver")}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="receiver">Получатель</ToggleButton>
        <ToggleButton value="sender">Отправитель</ToggleButton>
      </ToggleButtonGroup>

      <TextField
        label="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Имя на латинице"
        value={firstNameLatin}
        onChange={(e) => setFirstNameLatin(e.target.value)}
        fullWidth
      />
      <TextField
        label="Фамилия на латинице"
        value={lastNameLatin}
        onChange={(e) => setLastNameLatin(e.target.value)}
        fullWidth
      />
      <TextField
        label="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      <TextField
        label="Улица"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        fullWidth
      />
      <TextField
        label="Дом"
        value={house}
        onChange={(e) => setHouse(e.target.value)}
        fullWidth
      />
      <TextField
        label="Корпус"
        value={building}
        onChange={(e) => setBuilding(e.target.value)}
        fullWidth
      />
      <TextField
        label="Квартира"
        value={apartment}
        onChange={(e) => setApartment(e.target.value)}
        fullWidth
      />
      <TextField
        label="Город"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
      />
      <TextField
        label="Страна"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        fullWidth
      />
      <TextField
        label="Индекс"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
        fullWidth
      />
      <TextField
        label="Имя на домофоне"
        value={intercomName}
        onChange={(e) => setIntercomName(e.target.value)}
        fullWidth
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Сохранить
      </Button>
    </Box>
  );
};

const countries = [
  { value: "KZ", label: "Казахстан" },
  { value: "RU", label: "Россия" },
  { value: "BY", label: "Беларусь" },
  { value: "UA", label: "Украина" },
  { value: "UZ", label: "Узбекистан" },
  { value: "KG", label: "Киргизия" },
  { value: "TJ", label: "Таджикистан" },
  { value: "TM", label: "Туркменистан" },
  { value: "AZ", label: "Азербайджан" },
  { value: "GE", label: "Грузия" },
];

export const AddAddressFormPC: React.FC<{ user?: any }> = ({ user }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastNameLatin, setLastNameLatin] = useState("");
  const [firstNameLatin, setFirstNameLatin] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [building, setBuilding] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [intercomName, setIntercomName] = useState("");
  const [isReceiver, setIsReceiver] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (user) {
      setLastName(user.lastName ?? "");
      setFirstName(user.firstName ?? "");
      setLastNameLatin(user.lastNameLatin ?? "");
      setFirstNameLatin(user.firstNameLatin ?? "");
      setPhone(user.phoneNumber ?? "");
      setStreet(user.street ?? "");
      setHouse(user.building ?? "");
      setApartment(user.apartment ?? "");
      setCity(user.city ?? "");
      setPostalCode(user.postalCode ?? "");
      setCountry(user.country ?? "");
      setIntercomName(user.intercomName ?? "");
    }
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await useAddAddress({
        type: isReceiver ? "receiver" : "sender",
        lastName,
        firstName,
        lastNameLatin,
        firstNameLatin,
        phoneNumber: phone,
        street,
        building: house,
        apartment,
        city,
        housing: building,
        postalCode,
        country,
        intercomName,
      });

      setSuccessMessage(true);

      setLastName("");
      setFirstName("");
      setLastNameLatin("");
      setFirstNameLatin("");
      setPhone("");
      setStreet("");
      setHouse("");
      setBuilding("");
      setApartment("");
      setCity("");
      setPostalCode("");
      setCountry("");
      setIntercomName("");
    } catch (error) {
      setErrorMessage(true);
    }
  };

  const renderTextFieldWithTooltip = (
    label: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    info: string
  ) => (
    <Tooltip title={info} placement="top-start" arrow>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        fullWidth
        sx={{
          backgroundColor: "white",
          "& .MuiInputBase-root": {
            cursor: "help",
          },
        }}
      />
    </Tooltip>
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Добавить адрес
      </Typography>

      <ToggleButtonGroup
        value={isReceiver ? "receiver" : "sender"}
        exclusive
        onChange={(e, value) => setIsReceiver(value === "receiver")}
        sx={{ mb: 3, display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="receiver">Получатель</ToggleButton>
        <ToggleButton value="sender">Отправитель</ToggleButton>
      </ToggleButtonGroup>

      {/* Personal Information */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Имя",
          firstName,
          (e) => setFirstName(e.target.value),
          "Введите ваше имя, как в паспорте. Пример: Алексей."
        )}
        {renderTextFieldWithTooltip(
          "Фамилия",
          lastName,
          (e) => setLastName(e.target.value),
          "Введите вашу фамилию, как в документе. Пример: Иванов."
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Имя на латинице",
          firstNameLatin,
          (e) => setFirstNameLatin(e.target.value),
          "Укажите имя латинскими буквами. Пример: Alexey."
        )}
        {renderTextFieldWithTooltip(
          "Фамилия на латинице",
          lastNameLatin,
          (e) => setLastNameLatin(e.target.value),
          "Укажите фамилию латинскими буквами. Пример: Ivanov."
        )}
      </Box>

      {/* Address Information */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Улица",
          street,
          (e) => setStreet(e.target.value),
          "Введите название улицы. Пример: Абая."
        )}
        {renderTextFieldWithTooltip(
          "Дом",
          house,
          (e) => setHouse(e.target.value),
          "Укажите номер вашего дома. Пример: 45."
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Корпус",
          building,
          (e) => setBuilding(e.target.value),
          "Укажите номер корпуса, если есть. Пример: 2."
        )}
        {renderTextFieldWithTooltip(
          "Квартира",
          apartment,
          (e) => setApartment(e.target.value),
          "Укажите номер квартиры, если применимо. Пример: 12."
        )}
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Имя на домофоне",
          intercomName,
          (e) => setIntercomName(e.target.value),
          "Введите код или имя на домофоне. Пример: Иванов."
        )}
        {renderTextFieldWithTooltip(
          "Номер телефона",
          phone,
          (e) => setPhone(e.target.value),
          "Введите номер с кодом страны. Пример: +7 775 993 2587."
        )}
      </Box>

      {/* City and Country Information */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {renderTextFieldWithTooltip(
          "Город",
          city,
          (e) => setCity(e.target.value),
          "Введите название города. Пример: Алматы."
        )}
        {renderTextFieldWithTooltip(
          "Индекс",
          postalCode,
          (e) => setPostalCode(e.target.value),
          "Введите ваш почтовый индекс. Пример: 050000."
        )}
      </Box>

      {/* Country Dropdown */}
      <FormControl fullWidth>
        <InputLabel>Страна</InputLabel>
        <Select
          label="Страна"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          fullWidth
          sx={{ backgroundColor: "white" }}
        >
          {countries.map((countryItem, index) => (
            <MenuItem key={index} value={countryItem.value}>
              {countryItem.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="flex items-center justify-center">
        <Button text="Сохранить" type="submit" buttonType="filled" />
      </div>
      {/* Snackbar for Success and Error Messages */}
      <Snackbar
        open={successMessage}
        autoHideDuration={6000}
        onClose={() => setSuccessMessage(false)}
      >
        <Alert onClose={() => setSuccessMessage(false)} severity="success">
          Адрес успешно добавлен!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorMessage}
        autoHideDuration={6000}
        onClose={() => setErrorMessage(false)}
      >
        <Alert onClose={() => setErrorMessage(false)} severity="error">
          Ошибка при добавлении адреса. Попробуйте еще раз!
        </Alert>
      </Snackbar>
    </Box>
  );
};
