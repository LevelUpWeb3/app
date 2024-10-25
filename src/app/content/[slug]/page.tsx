import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

import Attribution from "./Attribution";
// import ContentFooter from "@/components/ContentFooter";
import MoreContent from "./MoreContent";
import BackSvg from "@/assets/svgs/common/back.svg";

import {
  SvgIcon,
  Skeleton,
  Stack,
  Typography,
  Avatar,
  Container,
  Box,
} from "@mui/material";
import BackLink from "@/components/Back";
import MarkdownViewer from "./MarkdownViewer";

export default async function ContentDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  let isLoading = true;
  const data = await fetch(
    `http://localhost:3001/data/contents/${params.slug}.json`,
  ).then((res) => res.json());
  isLoading = false;

  return (
    <>
      <Box
        sx={{
          pt: ["124px", "159px"],
          pb: ["30px", "60px"],
          mt: ["-64px", "-75px"],
          backgroundColor: "rgba(164, 148, 255, 0.20)",
        }}
      >
        <Container>
          <Stack
            direction={["column", "row"]}
            gap="40px"
            justifyContent={["flex-start", "space-between"]}
          >
            <BackLink></BackLink>
            <Attribution {...data}></Attribution>
          </Stack>
        </Container>
      </Box>
      <Container>
        <MarkdownViewer isLoading={isLoading} data={data}></MarkdownViewer>
      </Container>
      <Box
        sx={{
          backgroundColor: "#1010101A",
          p: ["30px 0", "60px"],
          mt: "60px",
        }}
      >
        <Container>
          <MoreContent currentContentIndex={data.index} />
        </Container>
      </Box>
    </>
  );
}
