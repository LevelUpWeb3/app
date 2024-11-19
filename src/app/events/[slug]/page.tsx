import { headers } from "next/headers";

import { Box, Container, Stack } from "@mui/material";
import BackLink from "@/components/Back";
import Data from "../eventsList.json";

import EventHeader from "./EventHeader";
import EventOverview from "./EventOverview";
import EventSection from "./EventSection";
import EventSubmit from "./EventSubmit";
import EventNavigation from "./EventNavigation";
import EventViewer from "./EventViewer";

const HackathonDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(
    `${origin}/data/events/${params.slug}/${params.slug}_overview.json`,
  ).then((res) => res.json());

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

      <EventViewer data={data}></EventViewer>
      <EventSubmit
        hackathonId={params.slug}
        buttonText={eventData?.buttonText}
      ></EventSubmit>
      <EventNavigation></EventNavigation>
    </>
  );
};

export default HackathonDetailPage;
