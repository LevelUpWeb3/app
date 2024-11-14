"use client";

import React from "react";
import Link from "next/link";
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
        🔥 Applications for the Level Up Grants Program are open until August
        25.{" "}
        <Link
          href="https://tally.so/r/mYdQP5"
          style={{ textDecoration: "underline" }}
        >
          <strong>Apply now!</strong>
        </Link>
      </Typography>
    </SiteTabContainer>
  );
};

export default SiteTab;
