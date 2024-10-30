import { Stack } from "@mui/material";
import { headers } from "next/headers";

import BackLink from "@/components/Back";

import ChallengeHeader from "./ChallengeHeader";
import SubmitAction from "./SubmitAction";
import MarkdownViewer from "./MarkdownViewer";
import ChallengeNavigation from "./ChallengeNavigation";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import MoreContent from "./MoreContent";

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
      <PageHeaderWrapper
        bgColor="rgba(255, 238, 218, 0.30)"
        sx={{ pt: ["60px", "84px"], pb: ["30px", "60px"] }}
      >
        <Stack>
          <BackLink></BackLink>
          <ChallengeHeader sx={{ mt: "60px" }} challengeData={data} />
        </Stack>
      </PageHeaderWrapper>

      <MarkdownViewer data={data}></MarkdownViewer>
      <SubmitAction sx={{ mt: "60px" }}></SubmitAction>
      <MoreContent />
      <ChallengeNavigation challengeId={slug}></ChallengeNavigation>
    </>
  );
}
