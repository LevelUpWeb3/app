import Button from "@/components/Button";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

const HackathonItem = (props) => {
  const { content } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "280px min-content 240px 1fr max-content",
        alignItems: "center",
        p: "30px 38px",
        height: "118px",
        columnGap: "30px",
        backgroundColor: "rgba(232, 246, 40, 0.50)",
        borderRadius: "25px",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
        {content.name}
      </Typography>
      <Divider
        orientation="vertical"
        sx={{ height: "56px", borderRightWidth: "2px" }}
      />
      <Stack
        direction="column"
        sx={{ fontSize: "20px", lineHeight: "24px", fontWeight: 500 }}
      >
        <p>{content.date}</p>
        <p>{content.location}</p>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          position: "relative",
          alignSelf: "flex-start",
        }}
      >
        <Image
          src={content.image}
          width={118}
          height={118}
          alt={content.name}
          style={{
            position: "absolute",
            // top: "-30px",
          }}
        ></Image>
      </Stack>

      <Button
        sx={{ width: "113px !important" }}
        href={content.url}
        disabled={content.buttonDisabled}
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
