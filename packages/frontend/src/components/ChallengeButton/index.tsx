import React from "react";
import Link from "next/link";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
const PageContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const BlackButton = styled(Button)(() => ({
  backgroundColor: "#000000",
  justifyContent: "center",
  color: "#FFFFFF",
  fontSize: "1.6rem",
  fontWeight: 600,
  height: "5.4rem",
  width: "25rem",
  borderColor: "#000000",
  outline: "none",
  boxShadow: "none",
  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: "#4B4B4B",
    borderColor: "#000000 !important",
  },
}));

const ChallengeButton = () => {
  return (
    <PageContainer>
      <Link href="/challenges/submission">
        <BlackButton>Submit Challenge</BlackButton>
      </Link>
    </PageContainer>
  );
};

export default ChallengeButton;
