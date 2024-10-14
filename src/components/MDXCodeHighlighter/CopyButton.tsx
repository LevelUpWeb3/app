import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { styled } from "@mui/system";
interface CopyButtonProps {
  text: string;
}

const ButtonStyle = styled(Button)(() => ({
  backgroundColor: "transparent",
  color: "#717171",
  outline: "none",
  boxShadow: "none",
  minWidth: "auto",
  padding: "0",
  "&:hover": {
    color: "#717171",
    backgroundColor: "transparent",
  },
}));

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const [copied, setCopied] = React.useState(false);

  const handleButtonClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleButtonClick}>
      <Tooltip title="Copied!" placement="top" open={copied}>
        <ButtonStyle variant="text" color={copied ? "success" : "primary"}>
          <ContentCopyIcon />
        </ButtonStyle>
      </Tooltip>
    </CopyToClipboard>
  );
};

export default CopyButton;
