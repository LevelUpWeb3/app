import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";

const CardArticle = styled("article")(() => ({
  padding: "2.4rem",
  background: "#FFF0DD",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  justifyContent: "space-between",
  marginBottom: "2.4rem",
  position: "relative",
}));

const Title = styled(Typography)(() => ({
  fontSize: "2rem",
  lineHeight: "2.8rem",
  marginBottom: "1.2rem",
  fontWeight: 500,
}));

const LabelContainer = styled("div")(() => ({
  display: "flex",
  gap: "2rem",
  marginTop: "1.6rem",
  marginBottom: "1.6rem",
}));

const Label = styled(Typography)(() => ({
  fontSize: "1.35rem",
  background: "#FFF8F3",
  borderRadius: "24px",
  color: "#101010",
  height: "auto",
  padding: "0.4rem 1.0rem",
  lineHeight: "24px",
  fontWeight: "600",
  textAlign: "center",
  whiteSpace: "normal",
  overflowWrap: "break-word",
}));

const HackathonCard = ({ content }) => {
  const { isMobile } = useCheckViewport();
  return (
    <CardArticle>
      <Box sx={{ flex: 1 }}>
        <LabelContainer>
          <Label>
            <Image
              src="/images/hackathon/icon/calendar.svg"
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
              src="/images/hackathon/icon/location.svg"
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
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            alt="Hackathon"
            className="mb-2"
          />
        )}
        <Button href={content.url} color="primary" width="25rem">
          {content.status}
        </Button>
      </Box>
      {!isMobile && (
        <Box sx={{ position: "absolute", right: 0, top: 0, bottom: 0 }}>
          <img
            src={content.image}
            style={{ height: "100%", objectFit: "contain", width: "auto" }}
            alt="Hackathon"
          />
        </Box>
      )}
    </CardArticle>
  );
};

export default HackathonCard;
