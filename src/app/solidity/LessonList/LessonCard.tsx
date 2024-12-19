"use client";

import { Box, Typography, LinearProgress, SvgIcon } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import FinishIcon from "@/assets/svgs/solidity/finish.svg";

const SolidityCardList = ({ content }) => {
  const handleClick = () => {
    sendGAEvent("event", "challengeClicked", {
      value: `Lesson ${content.lesson}: ${content.name}`,
    });
  };

  return (
    <Link href={`/solidity/${content.id}`}>
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
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "40px",
              textAlign: "center",
              backgroundColor: "rgba(186, 240, 247, 0.80)",
              borderBottom: "1.5px solid #101010",
              verticalAlign: "center",
            }}
          >
            Lesson {content.lesson} - 100%
            <SvgIcon
              component={FinishIcon}
              sx={{ fontSize: "16px", marginTop: "-4px", marginLeft: "4px" }}
              inheritViewBox
            />
          </Typography>
          <LinearProgress
            variant="determinate"
            value={20}
            sx={{
              width: "100%",
              height: 6,
              borderRadius: 0,
              backgroundColor: "#D9D9D9",
              position: "absolute",
              bottom: -4,
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#000",
              },
            }}
          />
        </Box>

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

export default SolidityCardList;
