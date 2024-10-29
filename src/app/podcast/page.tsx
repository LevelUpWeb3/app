import NoData from "@/components/NoData";
import { Container } from "@mui/material";
import { FULL_SCREEN_HEIGHT } from "@/constants";

const PodcastPage = () => {
  return (
    <Container sx={{ minHeight: FULL_SCREEN_HEIGHT }}>
      <NoData title="No result" description="reselect"></NoData>;
    </Container>
  );
};

export default PodcastPage;
