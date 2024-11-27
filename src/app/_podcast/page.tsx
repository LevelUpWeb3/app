import NoData from "@/components/NoData";
import { Container } from "@mui/material";
import { PAGE_MIN_HEIGHT } from "@/constants";
import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Podcast",
  relativeURL: "podcast",
}));

const PodcastPage = () => {
  return (
    <Container sx={{ minHeight: PAGE_MIN_HEIGHT }}>
      <NoData></NoData>;
    </Container>
  );
};

export default PodcastPage;
