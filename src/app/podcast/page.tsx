import { LAYOUT_HEADER_HEIGHT, LAYOUT_FOOTER_HEIGHT } from "@/constants";
import { Container } from "@mui/material";
const PodcastPage = () => {
  return (
    <Container
      sx={{
        py: ["8.4rem"],
        minHeight: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT})`,
      }}
    >
      comming soon
    </Container>
  );
};

export default PodcastPage;
