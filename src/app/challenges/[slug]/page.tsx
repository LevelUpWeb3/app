import { Stack } from "@mui/material";
import { headers } from "next/headers";

import BackLink from "@/components/Back";

import ChallengeHeader from "./ChallengeHeader";
import SubmitAction from "./SubmitAction";
import ChallengeViewer from "./ChallengeViewer";
import ChallengeNavigation from "./ChallengeNavigation";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
// import MoreContent from "./MoreContent";
import ChallengeSubmit from "./ChallengeSubmit";

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
        sx={{ pt: ["60px", "60px", "84px"], pb: ["30px", "40px", "60px"] }}
      >
        <Stack>
          <BackLink></BackLink>
          <ChallengeHeader
            sx={{ mt: ["56px", "56px", "60px"] }}
            challengeData={data}
          />
        </Stack>
      </PageHeaderWrapper>

      <ChallengeViewer data={data}></ChallengeViewer>
      <ChallengeSubmit
        type={data.submitWithoutCode ? "normal" : "code"}
      ></ChallengeSubmit>

      {/* <MoreContent /> */}
      <ChallengeNavigation challengeId={slug}></ChallengeNavigation>
    </>
  );
}
