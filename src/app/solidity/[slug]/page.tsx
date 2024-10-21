"use client";
import { useEffect, useState, useMemo } from "react";
import { usePathname, useParams } from "next/navigation";
import dynamic from "next/dynamic";
// import { MDXRemote } from "next-mdx-remote";
import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import * as React from "react";
// import Link from "next/link";
import PageButton from "./PageButton";
import IdeEditor from "./Ide";
// import BackSvg from "@/assets/svgs/common/back.svg";
import Head from "next/head";

import BackLink from "@/components/Back";

import Button from "@/components/Button";

import { Box, Typography, Skeleton, Stack, Container } from "@mui/material";

import { styled } from "@mui/system";
import Link from "next/link";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);

const ChallengeInfo = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",
  width: "100%",
  ["@media (max-width: 1000px)"]: {
    gridTemplateColumns: "1fr",
  },
});

const Label = styled(Typography)(() => ({
  fontSize: "1.6rem",
  background: "#FFDEB5",
  borderRadius: "0.4rem",
  color: "#84623A",
  height: "3.2rem",
  padding: "0 1.6rem",
  lineHeight: "3.2rem",
  fontWeight: "500",
  textAlign: "center",
}));

export default function SolidityDetailPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const { slug: lessonId } = useParams();

  useEffect(() => {
    fetch(`/data/solidity/${lessonId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
          crossOrigin="anonymous"
        />
      </Head>

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
        <Box
          sx={{
            backgroundColor: "rgba(186, 240, 247, 0.2)",
            height: "820px",
            p: "20px 10px",
            overflowY: "auto",
          }}
        >
          <Box className="markdown-body" sx={{ p: "35px 50px" }}>
            {!isLoading && data?.content && (
              <MDXRemote
                {...data.content}
                components={{
                  ...MDXCodeHighlighter,
                  ...MDXHeaders,
                  ul: (props) => (
                    <ul {...props} className="!mb-[20px] !pl-[1.2em]" />
                  ),
                  li: (props) => (
                    <li {...props} className="!mt-0 !leading-[30px]" />
                  ),
                  Mermaid,
                }}
              />
            )}
          </Box>
        </Box>
        <IdeEditor />
        <PageButton
          sx={{
            gridColumn: "span 2",
            backgroundColor: "#FFEEDA80",
            py: "56px",
          }}
        />
      </Container>
    </>
  );
}
