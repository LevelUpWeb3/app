import { Box, Container, Stack } from "@mui/material";
import { headers } from "next/headers";

import BackLink from "@/components/Back";

import ChallengeHeader from "./ChallengeHeader";
import SubmitAction from "./SubmitAction";
import MarkdownViewer from "./MarkdownViewer";
import ChallengeNavigation from "./ChallengeNavigation";

export default async function ChallengeDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/challenges/${slug}.json`).then(
    (res) => res.json(),
  );

  return (
    <>
      <Box
        sx={{
          pt: ["124px", "159px"],
          pb: ["30px", "60px"],
          mt: ["-64px", "-75px"],
          backgroundColor: "rgba(255, 238, 218, 0.30)",
        }}
      >
        <Container>
          <Stack>
            <BackLink></BackLink>
            <ChallengeHeader sx={{ mt: "60px" }} challengeData={data} />
          </Stack>
        </Container>
      </Box>
      <MarkdownViewer data={data}></MarkdownViewer>
      <SubmitAction sx={{ mt: "60px" }}></SubmitAction>
      <ChallengeNavigation challengeId={slug}></ChallengeNavigation>
    </>
  );
}
