import Attribution from "./Attribution";
import MoreContent from "./MoreContent";

import { Stack } from "@mui/material";
import BackLink from "@/components/Back";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import markdownData from "../markdownData.json";
import { genMeta } from "@/utils/route";

export async function generateMetadata({ params: { slug } }) {
  return genMeta({ relativeURL: `/content/${slug}` });
}

export default async function ContentDetailsLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
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

      {children}

      <MoreContent index={data.index} />
    </>
  );
}
