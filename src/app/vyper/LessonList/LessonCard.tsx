"use client";

import { Box, LinearProgress, SvgIcon, Typography } from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import useProgressStore from "@/stores/processStore";
import FinishIcon from "@/assets/svgs/solidity/finish.svg";
import { useMemo } from "react";
const VyperCardList = ({ content }) => {
  const { lessons } = useProgressStore();

  const handleClick = () => {
    sendGAEvent("event", "challengeClicked", {
      value: `Lesson ${content.lesson}: ${content.name}`,
    });
  };

  const process = useMemo(() => {
    const lesson = lessons[`vyper-${content.id}`];
    if (lesson && typeof lesson === "number") {
      return {
        isCompleted: lesson === 5,
        value: lesson * 20,
        displayValue: ` - ${lesson * 20}%`,
      };
    }
    return null;
  }, [lessons, content.id]);

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
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "40px",
              textAlign: "center",
              backgroundColor: "rgba(251, 87, 50, 0.50)",
              borderBottom: "1.5px solid #101010",
              verticalAlign: "center",
            }}
          >
            Lesson {content.lesson} {process && process.displayValue}
            {process && process.isCompleted && (
              <SvgIcon
                component={FinishIcon}
                sx={{ fontSize: "16px", marginTop: "-4px", marginLeft: "4px" }}
                inheritViewBox
              />
            )}
          </Typography>
          {process && (
            <LinearProgress
              variant="determinate"
              value={process.value}
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
          )}
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

export default VyperCardList;
