import React, { useState } from "react";
import { Button, Snackbar, Alert, AlertColor } from "@mui/material";

interface SubmitButtonProps {
  code: string;
  codeSolution: string;
  onSubmission: (isCorrect: boolean) => void;
}

const SubmitButton = ({
  code,
  codeSolution,
  onSubmission,
}: SubmitButtonProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const cleanedCode = code.replace(/\s/g, "");
  const cleanedCodeSolution = codeSolution.replace(/\s/g, "");

  const handleClose = (event?: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitCode = () => {
    if (cleanedCode === cleanedCodeSolution) {
      setMessage("Awesome, you got it right!");
      setSeverity("success");
      onSubmission(true);
    } else {
      setMessage("Incorrect, let's try again!");
      setSeverity("error");
      onSubmission(false);
    }
    setOpen(true);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "transparent",
          color: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "orange",
          },
        }}
        onClick={submitCode}
      >
        🌟 Submit
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SubmitButton;
