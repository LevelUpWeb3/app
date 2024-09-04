import React, { useState } from "react";
import { Button, Snackbar, Alert, AlertColor } from "@mui/material";
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

  const handleClose = (event?: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const submitCode = () => {

    if(!code) {
      alert("Please write some code first!");
      return;
    }

    (async () => {
      console.log("lessonId: ", lessonId, "exerciseId: ", exerciseId);
      const result = await unitTests[lessonId][exerciseId](code);

      if(result) {
        setMessage("Awesome, you got it right!");
        setSeverity("success");
        onSubmission(true);
      }
      else {
        setMessage("Incorrect, let's try again!");
        setSeverity("error");
        onSubmission(false);
      }
    })();

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
