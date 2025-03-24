"use client";

import { Box, Typography } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

const VyperCardList = ({ content }) => {
  const handleClick = () => {
    sendGAEvent("event", "challengeClicked", {
      value: `Lesson ${content.lesson}: ${content.name}`,
    });
  };

  return (
    <Link href={`/vyper/${content.id}`}>
      <Box
        sx={[
          {
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            border: "1.5px solid #101010",
            overflow: "hidden",
            backgroundColor: "background.default",
            "& *": {
              cursor: "pointer !important",
            },
          },
          (theme) => ({
            [theme.breakpoints.up("sm")]: {
              "&:hover": {
                backgroundColor: "#F4F4F4",
              },
            },
          }),
        ]}
        onClick={handleClick}
      >
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "40px",
            textAlign: "center",
            backgroundColor: "rgba(186, 240, 247, 0.80)",
            borderBottom: "1.5px solid #101010",
          }}
        >
          Lesson {content.lesson}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "81px",
            textAlign: "center",
          }}
        >
          {content.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default VyperCardList;
