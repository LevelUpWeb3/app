import NoData from "@/components/NoData";
import { Container } from "@mui/material";
import { PAGE_MIN_HEIGHT } from "@/constants";

const PodcastPage = () => {
  return (
    <Container sx={{ minHeight: PAGE_MIN_HEIGHT }}>
      <NoData title="No result" description="reselect"></NoData>;
    </Container>
  );
};

export default PodcastPage;
