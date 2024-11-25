import { Box, Container, Stack } from "@mui/material";
import BackLink from "@/components/Back";

import EventHeader from "./EventHeader";
import EventNavigation from "./EventNavigation";
import Data from "../eventsList.json";

const HackathonDetailLayout = async ({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
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

      {children}
      <EventNavigation></EventNavigation>
    </>
  );
};

export default HackathonDetailLayout;
