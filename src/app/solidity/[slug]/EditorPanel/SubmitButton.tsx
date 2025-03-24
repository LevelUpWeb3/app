import React, { useEffect, useRef, useState } from "react";
import { ButtonProps } from "@mui/material";
import Button from "@/components/Button";
import EditorTooltip from "@/components/EditorTooltip";
import useCheckViewport from "@/hooks/useCheckViewport";
import { usePrivy } from "@privy-io/react-auth";

interface SubmitButtonProps extends ButtonProps {
  code: string;
  codeSolution: string;
  onSubmission: (isCorrect: boolean) => void;
  loading?: boolean;
}

const SubmitButton = ({
  code,
  codeSolution,
  onSubmission,
  loading,
  ...restProps
}: SubmitButtonProps) => {
  const { isMobile } = useCheckViewport();
  const { login, user } = usePrivy();

  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const closeTimeoutRef = useRef<any>();

  const cleanedCode = code.replace(/\s/g, "");
  const cleanedCodeSolution = codeSolution?.replace(/\s/g, "");

  const handleCloseTip = (reason) => {
    if (reason === "manually") {
      setSeverity("");
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const submitCode = () => {
    if (cleanedCode === cleanedCodeSolution) {
      onSubmission(true);
    } else {
      setMessage("Incorrect, let's try again!");
      setSeverity("error");
      onSubmission(false);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setSeverity("");
      clearTimeout(closeTimeoutRef.current);
    }, 6e3);
  };

  useEffect(() => {
    if (!loading && cleanedCode === cleanedCodeSolution) {
      setMessage("Awesome, you got it right!");
      setSeverity("success");
    }
  }, [loading]);

  if (user) {
    return (
      <EditorTooltip
        type={severity}
        title={message}
        open={!!severity}
        onClose={handleCloseTip}
        placement="top"
      >
        <Button
          size="large"
          onClick={submitCode}
          loading={loading}
          {...restProps}
          sx={{
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.20) !important",
            },
          }}
        >
          Submit Challenge
        </Button>
      </EditorTooltip>
    );
  }

  return (
    <Button size="large" onClick={login} {...restProps}>
      Login to Submit Exercise
    </Button>
  );
};

export default SubmitButton;
