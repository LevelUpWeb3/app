import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";
import { sendGAEvent } from "@next/third-parties/google";

const CardArticle = styled("article")(({ theme }) => ({
  background: "#FFF0DD",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "space-between",
  marginBottom: "2.4rem",
  position: "relative",
  [theme.breakpoints.down("md")]: {},
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "3.2rem",
  marginBottom: "3.2rem",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: "3.2rem",
    marginBottom: "1.2rem",
  },
}));

const LabelContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  marginTop: "1.6rem",
  marginBottom: "3.2rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "0.8rem",
    marginBottom: "1.2rem",
  },
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  background: "#FFF8F3",
  borderRadius: "24px",
  color: "#101010",
  height: "auto",
  padding: "0.8rem 1.6rem",
  lineHeight: "24px",
  fontWeight: "600",
  textAlign: "center",
  whiteSpace: "normal",
  overflowWrap: "break-word",
  [theme.breakpoints.down("md")]: {
    width: "fit-content",
    fontSize: "1.6rem",
  },
}));

const EventsCard = ({ content }) => {
  const { isMobile } = useCheckViewport();
  return (
    <CardArticle>
      <Box sx={{ flex: 1, padding: ["2.4rem", "4rem"] }}>
        <LabelContainer>
          <Label>
            <Image
              src="/images/events/icon/calendar.svg"
              width="24"
              height="24"
              className="mr-2"
              alt="Calendar Icon"
            ></Image>
            {content.date}
          </Label>
          <Label>
            {" "}
            <Image
              src="/images/events/icon/location.svg"
              width="24"
              height="24"
              className="mr-2"
              alt="Location Icon"
            ></Image>
            {content.location}
          </Label>
        </LabelContainer>
        <Box>
          <Title> {content.name} </Title>
        </Box>
        {isMobile && (
          <img
            src={content.image}
            style={{ width: "80%", height: "auto", objectFit: "contain" }}
            alt="Events"
            className="mx-auto mb-[1.2rem] block"
          />
        )}
        <Button
          href={content.url}
          color="primary"
          width={isMobile ? "100%" : "25rem"}
          onClick={() =>
            sendGAEvent("event", "hackathonClicked", { value: content.name })
          }
          disabled={content.buttonDisabled}
        >
          {content.buttonText}
        </Button>
      </Box>
      {!isMobile && (
        <Box>
          <img
            src={content.image}
            style={{
              height: "100%",
              objectFit: "contain",
              width: "auto",
              objectPosition: "bottom",
            }}
            alt="Events"
          />
        </Box>
      )}
    </CardArticle>
  );
};

export default EventsCard;
