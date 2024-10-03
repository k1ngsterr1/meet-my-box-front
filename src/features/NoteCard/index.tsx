import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Tooltip } from "react-tooltip";

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
        <div className="flex items-center justify-center gap-4 mb-3">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#3F51B5",
            }}
          >
            Примечание
            <span
              data-tooltip-id="my-tooltip4"
              data-tooltip-place="bottom"
              data-tooltip-content="Можете указать примечание если они у вас есть."
            >
              <FontAwesomeIcon icon={faInfoCircle} className="ml-2 text-main" />
            </span>
            <Tooltip id="my-tooltip4" style={{ fontSize: "18px" }} />
          </Typography>
        </div>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#757575",
            mb: 2,
          }}
        >
          *Это примечание будет видно только курьеру.
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
