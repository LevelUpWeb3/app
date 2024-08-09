import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface CopyButtonProps {
  text: string;
}

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
        <Button
          sx={{ color: "white", backgroundColor: "transparent" }}
          variant="text"
          color={copied ? "success" : "primary"}
        >
          <ContentCopyIcon />
        </Button>
      </Tooltip>
    </CopyToClipboard>
  );
};

export default CopyButton;
