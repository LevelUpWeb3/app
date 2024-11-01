import React, { useRef, useState } from "react";
import { ButtonProps } from "@mui/material";
import Button from "@/components/Button";
import EditorTooltip from "@/components/EditorTooltip";
import useCheckViewport from "@/hooks/useCheckViewport";

interface SubmitButtonProps extends ButtonProps {
  code: string;
  codeSolution: string;
  onSubmission: (isCorrect: boolean) => void;
}

const SubmitButton = ({
  code,
  codeSolution,
  onSubmission,
  ...restProps
}: SubmitButtonProps) => {
  const { isMobile } = useCheckViewport();

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
      setMessage("Awesome, you got it right!");
      setSeverity("success");
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

  return (
    <EditorTooltip
      type={severity}
      title={message}
      open={!!severity}
      onClose={handleCloseTip}
      placement="top"
    >
      <Button size="large" onClick={submitCode} {...restProps}>
        Submit Challenge
      </Button>
    </EditorTooltip>
  );
};

export default SubmitButton;
