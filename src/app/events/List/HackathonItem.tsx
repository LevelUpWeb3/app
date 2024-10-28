import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HackathonItem = (props) => {
  const { isMobile } = useCheckViewport();
  const { content } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: [
          "max-content 1fr",
          "280px min-content 240px 1fr max-content",
        ],
        alignContent: ["space-between", "center"],
        alignItems: ["space-between", "center"],
        p: ["30px 28px", "30px 38px"],
        height: ["278px", "118px"],
        columnGap: [0, "30px"],
        backgroundColor: "rgba(232, 246, 40, 0.50)",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          gridRow: ["1/2", "unset"],
          gridColumn: ["1/3", "unset"],
          height: ["58px", "auto"],
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
          fontSize: ["14px", "20px"],
          lineHeight: ["20px", "24px"],
          fontWeight: 500,
          whiteSpace: "nowrap",
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
          alignSelf: ["flex-end", "flex-start"],
          justifySelf: ["flex-end", "unset"],
          gridColumn: ["2/3", "unset"],
          gridRow: ["2/4", "unset"],
        }}
      >
        <Image
          src={content.image}
          width={118}
          height={118}
          alt={content.name}
          style={{
            position: isMobile ? "relative" : "absolute",
            width: isMobile ? "auto" : "118px",
            height: isMobile ? "94px" : "auto",
          }}
        ></Image>
      </Stack>
      <Button
        sx={{
          width: ["100% !important", "113px !important"],
          gridColumn: ["1/3", "unset"],
        }}
        href={content.url}
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
