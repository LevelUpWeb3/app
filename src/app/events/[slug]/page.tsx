import HackathonHeader from "./HackathonHeader";

import BackLink from "@/components/Back";
import { headers } from "next/headers";

import { Box, Container, Stack } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";
import Data from "../eventsList.json";
import HackathonOverview from "./HackathonOverview";
import HackathonSection from "./HackathonSection";
import HackathonSubmit from "./HackathonSubmit";
import Navigation from "./Navigation";

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
            <HackathonHeader
              {...hackathonData}
              hackathonId={params.slug}
            ></HackathonHeader>
          </Stack>
        </Container>
      </Box>
      <HackathonOverview
        details={sortedDetails[0] ?? {}}
        hackathonId={params.slug}
      ></HackathonOverview>
      <Container>
        {sortedDetails.slice(1).map((detail, index) => {
          return (
            <HackathonSection
              key={detail.id}
              details={detail}
            ></HackathonSection>
          );
        })}
        <HackathonSubmit hackathonId={params.slug}></HackathonSubmit>
      </Container>
      <Navigation></Navigation>
    </>
  );
};

export default HackathonDetailPage;
