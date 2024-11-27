import { Box, Container, Stack } from "@mui/material";

import { genMeta } from "@/utils/route";
import BackLink from "@/components/Back";
import CrossDetection from "@/components/CrossDetection";

// import EventOverview from "./EventOverview";
// import EventSection from "./EventSection";
import EventHeader from "./EventHeader";
import EventNavigation from "./EventNavigation";
import EventSubmit from "./EventSubmit";
import EventViewer from "./EventViewer";
import Data from "../eventsList.json";

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  relativeURL: `/events/${slug}`,
}));

export async function generateStaticParams() {
  return Data.filter((x) => x.url.startsWith("events/")).map(
    (x) => x.url.split("/")[1],
  );
}

const HackathonDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const eventData = Data.find((item) => item.url.includes(params.slug));

  return (
    <>
      <Box
        sx={{
          pt: ["124px", "159px"],
          pb: ["30px", "60px"],
          mt: ["-64px", "-75px"],
          backgroundColor: "#5167FF33",
        }}
      >
        <Container>
          <Stack spacing={["40px", "60px"]}>
            <BackLink></BackLink>
            <EventHeader {...eventData} hackathonId={params.slug}></EventHeader>
          </Stack>
        </Container>
      </Box>

      <CrossDetection className="event-viewer py-[30px] sm:py-[40px] md:py-[60px]">
        <EventViewer params={params}></EventViewer>
      </CrossDetection>
      <EventSubmit
        hackathonId={params.slug}
        buttonText={eventData?.buttonText}
      ></EventSubmit>
      <EventNavigation></EventNavigation>
    </>
  );
};

export default HackathonDetailPage;
