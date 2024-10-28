import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "@mui/material";
import CopySvg from "@/assets/svgs/content/copy.svg";

import EditorTooltip from "../EditorTooltip";
interface CopyButtonProps {
  text: string;
  sx: object;
}

const CopyButton: React.FC<CopyButtonProps> = ({ sx, text }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <EditorTooltip title="Copied!" placement="top" open={copied}>
        <IconButton sx={sx}>
          <CopySvg className="h-[auto] w-[22px]"></CopySvg>
        </IconButton>
      </EditorTooltip>
    </CopyToClipboard>
  );
};

export default CopyButton;
