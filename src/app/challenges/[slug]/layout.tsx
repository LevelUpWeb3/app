import { Stack } from "@mui/material";

import BackLink from "@/components/Back";

import ChallengeHeader from "./ChallengeHeader";
import ChallengeNavigation from "./ChallengeNavigation";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
// import MoreContent from "./MoreContent";
import markdownData from "../markdownData.json";
import { genMeta } from "@/utils/route";

export async function generateMetadata({ params: { slug } }) {
  return genMeta({ relativeURL: `/challenges/${slug}` });
}

export default async function ChallengeDetailPage({ params, children }) {
  const data = markdownData.find((x) => x.id === params.slug);
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

      {children}

      {/* <MoreContent /> */}
      <ChallengeNavigation challengeId={params.slug}></ChallengeNavigation>
    </>
  );
}
