"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
// import { MDXRemote } from "next-mdx-remote";
import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import * as React from "react";
import Link from "next/link";
import PageButton from "./PageButton";
import IdePage from "./Ide";
import BackSvg from "@/assets/svgs/common/back.svg";
import Head from "next/head";

import { SvgIcon, Box, Typography, Skeleton } from "@mui/material";

import { styled } from "@mui/system";

import { MDXRemote } from "next-mdx-remote";

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

const ChallengeDetails = ({ challengeData }) => (
  <ChallengeInfo>
    <div className="my-[4rem] flex flex-col self-stretch font-medium max-md:mt-10 max-md:max-w-full">
      <h1 className="text-[4rem] leading-[56px] tracking-wide text-stone-950 max-md:max-w-full">
        Lesson {challengeData.lesson}: {challengeData.name}
      </h1>
      <h4 className="text-[2rem] leading-[28px] tracking-wide text-[#5b5b5b] max-md:max-w-full">
        {challengeData.summary}
      </h4>
      <div className="mt-6 flex gap-2 self-start text-center text-base leading-6 tracking-normal text-yellow-800">
        {challengeData.labels?.map((label) => (
          <Label key={label}>{label}</Label>
        ))}
      </div>
    </div>
  </ChallengeInfo>
);

export default function ChallengeDetailsPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  // useEffect(() => {
  //   const loader = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(loader);
  //   };
  // });

  useEffect(() => {
    const slug = pathname!.split("/").pop();
    fetch(`/data/solidity/${slug}.json`)
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

      <div className="mx-auto flex max-w-[140rem] gap-5 px-[6rem] pb-16 pt-3 max-md:flex-wrap max-md:px-[2rem]">
        <div className="flex w-fit shrink-0 grow basis-0 flex-col max-md:max-w-full">
          <div className="mt-20 flex gap-3 self-start whitespace-nowrap text-lg font-semibold leading-8 text-stone-950 max-md:mt-10">
            <Link href="/solidity" className="flex items-center">
              <SvgIcon component={BackSvg} className="mr-[1.2rem]" /> Back
            </Link>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* <ChallengeCard challenge={challenge} /> */}
              {data?.content && <ChallengeDetails challengeData={data} />}
            </div>
          </div>
          <div className="z-10 mt-5 h-1 shrink-0 max-md:max-w-full" />
          <div className="mb-[4.8rem] h-px shrink-0 border border-solid border-stone-950 bg-stone-950 max-md:max-w-full" />
        </div>
      </div>
      <div className="mx-auto grid h-screen w-full max-w-[140rem] grid-cols-2 gap-5 px-[6rem]">
        {isLoading ? (
          <>
            <Skeleton variant="rounded" className="min-h-screen w-full" />
            <Skeleton variant="rounded" className="min-h-screen w-full" />
          </>
        ) : (
          <>
            <div className="markdown-body">
              {" "}
              {data?.content ? (
                <>
                  <MDXRemote
                    {...data.content}
                    components={{
                      ...MDXCodeHighlighter,
                      ...MDXHeaders,
                      Mermaid,
                    }}
                  />
                  <PageButton />
                </>
              ) : null}
            </div>
            <div>
              <IdePage />
            </div>
          </>
        )}
      </div>
    </>
  );
}
