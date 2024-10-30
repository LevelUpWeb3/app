import { headers } from "next/headers";

import { Box, Container, Stack } from "@mui/material";
import BackLink from "@/components/Back";
import Data from "../eventsList.json";

import EventHeader from "./EventHeader";
import EventOverview from "./EventOverview";
import EventSection from "./EventSection";
import EventSubmit from "./EventSubmit";
import EventNavigation from "./EventNavigation";

const HackathonDetailPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/events/markdownData.json`).then(
    (res) => res.json(),
  );
  const sortedDetails = data
    .filter((item) => item.id.startsWith(params.slug))
    .sort((a, b) => a.index - b.index);

  const hackathonData = Data.find((item) => item.url.includes(params.slug));

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
            <EventHeader
              {...hackathonData}
              hackathonId={params.slug}
            ></EventHeader>
          </Stack>
        </Container>
      </Box>
      <EventOverview
        details={sortedDetails[0] ?? {}}
        hackathonId={params.slug}
      ></EventOverview>
      <Container>
        {sortedDetails.slice(1).map((detail) => {
          return <EventSection key={detail.id} details={detail}></EventSection>;
        })}
        <EventSubmit hackathonId={params.slug}></EventSubmit>
      </Container>
      <EventNavigation></EventNavigation>
    </>
  );
};

export default HackathonDetailPage;
