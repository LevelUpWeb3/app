"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

import useCheckViewport from "@/hooks/useCheckViewport";

const SiteTab = () => {
  const { isMobile } = useCheckViewport();

  const SiteTabContainer = styled(Box)(() => ({
    width: "100%",
    height: isMobile ? "64px" : "48px",
    backgroundColor: "#B5F5EC",
    justifyContent: "space-between",
    padding: "1.6rem",
    alignItems: "center",
    textAlign: "center",
    overflow: "hidden",
  }));
  return (
    <SiteTabContainer>
      <Typography
        sx={{
          fontSize: "1.4rem",
          textAlign: "center",
        }}
      >
        🔥 The Level Up Hackathon by Ethereum Argentina will take place from
        August 2-4. <strong>Join now!</strong>
      </Typography>
    </SiteTabContainer>
  );
};

export default SiteTab;
