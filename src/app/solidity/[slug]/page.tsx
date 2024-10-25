import LessonNavigation from "./LessonNavigation";
import EditorPanel from "./EditorPanel";
import Head from "next/head";

import BackLink from "@/components/Back";

import { Typography, Stack, Container } from "@mui/material";

import Teaching from "./Teaching";

export default async function SolidityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await fetch(
    `http://localhost:3001/data/solidity/${params.slug}.json`,
  ).then((res) => res.json());

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 50%)",
        mt: "80px",
      }}
    >
      <BackLink></BackLink>
      <Stack direction="column" spacing="14px" sx={{ mb: "80px" }}>
        <Typography sx={{ fontSize: "48px" }}>
          Lesson {data.lesson}: {data.name}
        </Typography>
        <Typography sx={{ fontSize: "24px" }}>{data.summary}</Typography>
      </Stack>
      <Teaching data={data}></Teaching>
      <EditorPanel />
      <LessonNavigation
        sx={{
          gridColumn: "span 2",
          backgroundColor: "#FFEEDA80",
          py: "56px",
        }}
        lessonId={params.slug}
      />
    </Container>
  );
}
