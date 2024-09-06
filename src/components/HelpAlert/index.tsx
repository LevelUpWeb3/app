import React from "react";
import { SvgIcon, Box, Typography, Alert, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { Telegram } from "@mui/icons-material";

const Notice = styled(Alert)(() => ({
  fontSize: "2.0rem",
  background: "transparent",
  borderRadius: "0.4rem",
  maxWidth: "200px",
  color: "#000000",
  display: "flex",
  alignItems: "center",
  "& .MuiAlert-icon": {
    marginRight: "0.5rem",
    padding: 0,
  },
  "& .MuiAlert-message": {
    padding: 0,
  },
}));

const HelpAlert = () => {
  return (
    <div>
      <Notice
        icon={
          <Tooltip title="Join the study group for help!" placement="top">
            <Telegram />
          </Tooltip>
        }
        severity="info"
        onClick={() => window.open("https://t.me/+PdNbk5milo1mMTAy", "_blank")}
      >
        Get Help
      </Notice>
    </div>
  );
};
export default HelpAlert;
