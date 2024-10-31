import { headers } from "next/headers";

import Attribution from "./Attribution";
import MoreContent from "./MoreContent";

import { Stack, Container } from "@mui/material";
import BackLink from "@/components/Back";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import ContentViewer from "./ContentViewer";

export default async function ContentDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/contents/${params.slug}.json`).then(
    (res) => res.json(),
  );

  return (
    <>
      <PageHeaderWrapper
        bgColor="rgba(164, 148, 255, 0.20)"
        sx={{ pt: ["60px", "84px"], pb: ["30px", "60px"] }}
      >
        <Stack
          direction={["column", "row"]}
          gap="40px"
          justifyContent={["flex-start", "space-between"]}
        >
          <BackLink></BackLink>
          <Attribution {...data}></Attribution>
        </Stack>
      </PageHeaderWrapper>
      <Container>
        <ContentViewer data={data}></ContentViewer>
      </Container>
      <MoreContent index={data.index} />
    </>
  );
}
