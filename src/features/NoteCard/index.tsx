import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface NoteCardProps {
  onNoteClick: any;
  setter: (value: string) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ onNoteClick, setter }) => {
  const handleClick = () => {
    onNoteClick();
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 400,
        margin: "auto",
        boxShadow: 4,
        borderRadius: 3,
        padding: 3,
        backgroundColor: "#f4f6f8",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "#3F51B5",
            mb: 3,
          }}
        >
          Примечание
        </Typography>
        <TextField
          fullWidth
          label="Примечание к посылке"
          variant="outlined"
          onChange={(e) => setter(e.target.value)}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            textTransform: "none",
            backgroundColor: "#220CF3",
            "&:hover": { backgroundColor: "#1E0AD1" },
          }}
        >
          Далее
        </Button>
      </CardActions>
    </Card>
  );
};
