"use client";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "@mui/material";
import CopySvg from "@/assets/svgs/content/copy.svg";
import MobileCopySvg from "@/assets/svgs/content/mobile-copy.svg";

import EditorTooltip from "../EditorTooltip";
import useCheckViewport from "@/hooks/useCheckViewport";
interface CopyButtonProps {
  text: string;
  sx: object;
}

const CopyButton: React.FC<CopyButtonProps> = ({ sx, text }) => {
  const [copied, setCopied] = React.useState(false);
  const { isMobile } = useCheckViewport();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <CopyToClipboard text={text} onCopy={handleCopy}>
      <EditorTooltip title="Copied!" placement="top" open={copied}>
        <IconButton sx={{ p: 0, ...sx }}>
          {isMobile ? (
            <MobileCopySvg className="h-[auto] w-[32px]"></MobileCopySvg>
          ) : (
            <CopySvg className="h-[auto] w-[40px]"></CopySvg>
          )}
        </IconButton>
      </EditorTooltip>
    </CopyToClipboard>
  );
};

export default CopyButton;
