import { Stack } from "@mui/material";

import { genMeta } from "@/utils/route";
import BackLink from "@/components/Back";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import CrossDetection from "@/components/CrossDetection";

import Attribution from "./Attribution";
import MoreContent from "./MoreContent";
import ContentViewer from "./ContentViewer";
import markdownData from "../markdownData.json";

export const generateMetadata = genMeta(({ params: { slug } }) => ({
  relativeURL: `/content/${slug}`,
}));

export async function generateStaticParams() {
  return markdownData.map((x) => x.id);
}

export default async function ContentDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = markdownData.find((x) => x.id === params.slug);
  if (!data) return;

  return (
    <>
      <PageHeaderWrapper
        bgColor="rgba(164, 148, 255, 0.20)"
        sx={{ pt: ["60px", "60px", "84px"], pb: ["30px", "40px", "60px"] }}
      >
        <Stack
          direction={["column", "column", "row"]}
          gap="40px"
          justifyContent={["flex-start", "space-between"]}
        >
          <BackLink></BackLink>
          <Attribution {...data}></Attribution>
        </Stack>
      </PageHeaderWrapper>

      <CrossDetection className="py-[30px] sm:py-[40px] md:py-[60px]">
        <ContentViewer params={params} />
      </CrossDetection>

      <MoreContent index={data.index} />
    </>
  );
}
