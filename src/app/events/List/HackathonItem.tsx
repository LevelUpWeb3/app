"use client";
import Button from "@/components/Button";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

const HackathonItem = (props) => {
  const { content } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: [
          "1fr max-content",
          "1fr min-content 190px 97px 120px",
          "280px min-content 240px 1fr 130px",
        ],
        alignContent: ["space-between", "center"],
        alignItems: ["space-between", "center"],
        p: ["30px 28px", "22px 24px", "30px 38px"],
        height: ["auto", "auto", "118px"],
        columnGap: ["10px", "14px", "30px"],
        rowGap: ["10px", 0],
        backgroundColor: "rgba(232, 246, 40, 0.50)",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: ["20px", "20px", "24px"],
          fontWeight: 500,
          gridRow: ["1/2", "unset"],
          gridColumn: ["1/3", "unset"],
          transform: "translateY(0.125em)",
        }}
      >
        {content.name}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{
          height: ["48px", "56px"],
          borderRightWidth: "2px",
          gridRow: ["2/3", "unset"],
          justifySelf: ["flex-start", "unset"],
        }}
      />
      <Stack
        direction="column"
        sx={{
          fontSize: ["16px", "16px", "20px"],
          lineHeight: ["20px", "24px", "24px"],
          fontWeight: 500,
          whiteSpace: ["pre-wrap", "nowrap"],
          transform: "translateY(0.125em)",
        }}
      >
        <p>{content.date}</p>
        <p>{content.location}</p>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          position: "relative",
          alignSelf: "flex-end",
          justifySelf: ["flex-end", "unset"],
          gridColumn: ["2/3", "unset"],
          gridRow: ["2/4", "unset"],

          bottom: ["8px", "-22px", "-30px"],
        }}
      >
        <Image
          src={content.image}
          width={130}
          height={130}
          alt={content.name}
          className="relative h-[80px] w-auto sm:absolute sm:bottom-0 sm:h-[70px] sm:w-[97px] md:h-auto md:w-[130px]"
        ></Image>
      </Stack>
      <Button
        sx={{
          maxWidth: ["100% !important", "120px !important", "130px !important"],
          width: ["100% !important", "fit-content !important"],
          justifySelf: "flex-end",
          gridColumn: ["1/3", "unset"],
          whiteSpace: "nowrap",
        }}
        href={content.url}
        isExternal={content.url.startsWith("https")}
        disabled={!!content.buttonDisabled}
        onClick={() =>
          sendGAEvent("event", "hackathonClicked", { value: content.name })
        }
      >
        {content.buttonText}
      </Button>
    </Box>
  );
};

export default HackathonItem;
