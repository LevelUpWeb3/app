import { headers } from "next/headers";

import Attribution from "./Attribution";
import MoreContent from "./MoreContent";

import { Stack, Container, Box } from "@mui/material";
import BackLink from "@/components/Back";
import MarkdownViewer from "./MarkdownViewer";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

export default async function ContentDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { origin } = new URL(headers().get("x-url")!);
  let isLoading = true;
  const data = await fetch(`${origin}/data/contents/${params.slug}.json`).then(
    (res) => res.json(),
  );
  isLoading = false;

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
        <MarkdownViewer isLoading={isLoading} data={data}></MarkdownViewer>
      </Container>
      <MoreContent index={data.index} />
    </>
  );
}
