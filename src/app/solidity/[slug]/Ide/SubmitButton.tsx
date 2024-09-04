import React, { useState } from "react";
import { Button, Snackbar, Alert, AlertColor, CircularProgress } from "@mui/material";
import { callContract, deployContract } from "@/utils/solidity/vm";
import { unitTests } from "@/constants/solidity/unit-test";

interface SubmitButtonProps {
  code: string;
  lessonId: string;
  exerciseId: string;
  onSubmission: (isCorrect: boolean) => void;
}

const SubmitButton = ({
  code,
  lessonId,
  exerciseId,
  onSubmission,
}: SubmitButtonProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event?: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitCode = () => {
    if (!code) {
      alert("Please write some code first!");
      return;
    }

    setIsLoading(true);

    (async () => {
      console.log("lessonId: ", lessonId, "exerciseId: ", exerciseId);

      let result: boolean = false;
      try {
        result = (await unitTests[lessonId][exerciseId](code)) as boolean;
      } catch (e) {
        console.log(e);
      }

      if (result) {
        setMessage("Awesome, you got it right!");
        setSeverity("success");
        onSubmission(true);
      }
      else {
        setMessage("Incorrect, let's try again!");
        setSeverity("error");
        onSubmission(false);
      }
      setIsLoading(false);
      setOpen(true);
    })();
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
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          "🌟"
        )}
        {" Submit"}
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