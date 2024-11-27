import { Stack } from "@mui/material";

import { genMeta } from "@/utils/route";
import BackLink from "@/components/Back";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import CrossDetection from "@/components/CrossDetection";
// import MoreContent from "./MoreContent";

import ChallengeHeader from "./ChallengeHeader";
import ChallengeNavigation from "./ChallengeNavigation";
import ChallengeViewer from "./ChallengeViewer";
import ChallengeSubmit from "./ChallengeSubmit";
import markdownData from "../markdownData.json";
// import SubmitAction from "./SubmitAction";

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  titleSuffix: "Challenge Detail",
  relativeURL: `/challenges/${slug}`,
}));

export default async function ChallengeDetailPage({ params }) {
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

      <CrossDetection className="challenge-viewer py-[30px] sm:py-[40px] md:py-[60px]">
        <ChallengeViewer params={params}></ChallengeViewer>
      </CrossDetection>
      <ChallengeSubmit
        type={data?.submitWithoutCode ? "normal" : "code"}
      ></ChallengeSubmit>

      {/* <MoreContent /> */}
      <ChallengeNavigation challengeId={params.slug}></ChallengeNavigation>
    </>
  );
}
