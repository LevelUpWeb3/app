import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

const CardArticle = styled("article")(() => ({
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  border: "1.5px solid #101010",
  overflow: "hidden",
  ["& *"]: {
    cursor: "pointer !important",
  },
}));

const Title = styled(Typography)(() => ({
  fontSize: "1.6rem",
  lineHeight: "4rem",
  marginBottom: "1.2rem",
  fontWeight: 400,
  textAlign: "center",
  background: "rgba(186, 240, 247, 0.80)",
  borderBottom: "1.5px solid #101010",
}));

const Summary = styled(Typography)(() => ({
  fontSize: "2rem",
  fontWeight: 500,
  lineHeight: "7.2rem",
  marginBottom: "1.2rem",
  textAlign: "center",
}));

const SolidityCardList = ({ content, key }) => {
  const router = useRouter();

  const handleClick = () => {
    sendGAEvent("event", "challengeClicked", {
      value: `Lesson ${content.lesson}: ${content.name}`,
    });
    if (content.url) {
      window.open(content.url);
    } else {
      router.push(`${location.pathname}/${content.id}`);
    }
  };

  return (
    <CardArticle key={key} onClick={handleClick}>
      <Box>
        <Title>Lesson {content.lesson}</Title>
        <Summary> {content.name} </Summary>
      </Box>
    </CardArticle>
  );
};

export default SolidityCardList;
