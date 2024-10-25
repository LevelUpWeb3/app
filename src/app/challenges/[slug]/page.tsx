"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { MDXRemote } from "next-mdx-remote";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import * as React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import ChallengeButton from "@/components/ChallengeButton";
import HelpAlert from "@/components/HelpAlert";
import BackSvg from "@/assets/svgs/common/back.svg";
import Head from "next/head";

import { SvgIcon, Box, Typography } from "@mui/material";

import { styled } from "@mui/system";

const ChallengeInfo = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",
  width: "100%",
  ["@media (max-width: 1000px)"]: {
    gridTemplateColumns: "1fr",
  },
});

const ChallengeCover = styled("img")({
  width: "100%",
  background: "#fff",
  borderRadius: "2rem",
  height: "100%",
  minHeight: "27rem",
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

const ChallengeDetails = ({ challengeData }) => {
  const text = `I am excited to take on the ${challengeData.name} challenge in Level Up! Join me and let's level up together at levelup.xyz/!`;

  const combinedLabels = [
    ...(challengeData.labels || []),
    ...(challengeData.level ? [`Level ${challengeData.level}`] : []),
  ];

  return (
    <ChallengeInfo>
      <ChallengeCover src={challengeData.heroImage} />
      <div className="my-[4rem] flex flex-col self-stretch font-medium max-md:mt-10 max-md:max-w-full">
        <h1 className="text-[4rem] leading-[56px] tracking-wide text-stone-950 max-md:max-w-full">
          {challengeData.name}
        </h1>
        <h4 className="text-[2rem] leading-[28px] tracking-wide text-[#5b5b5b] max-md:max-w-full">
          {challengeData.summary}
        </h4>
        <div className="mt-6 flex gap-2 self-start text-center text-base leading-6 tracking-normal text-yellow-800">
          {combinedLabels.map((label) => (
            <Label key={label}>{label}</Label>
          ))}
        </div>
        <div className="mr-5 mt-6 flex items-center gap-[2.4rem] text-center text-xl font-semibold leading-9 max-md:mr-2.5 max-md:flex-wrap">
          <Button color="primary" href={challengeData.website}>
            Go to Github
          </Button>
          <Button
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
          >
            Share
          </Button>
        </div>
      </div>
    </ChallengeInfo>
  );
};

export default function ChallengeDetailsPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname!.split("/").pop();
    fetch(`/data/challenges/${slug}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
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
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <div className="mx-auto flex max-w-[140rem] gap-5 px-[6rem] pb-16 pt-3 max-md:flex-wrap max-md:px-[2rem]">
        <div className="flex w-fit shrink-0 grow basis-0 flex-col max-md:max-w-full">
          <div className="mt-20 flex gap-3 self-start whitespace-nowrap text-lg font-semibold leading-8 text-stone-950 max-md:mt-10">
            <Link href="/challenges" className="flex items-center">
              <SvgIcon component={BackSvg} className="mr-[1.2rem]" /> Back
            </Link>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {/* <ChallengeCard challenge={challenge} /> */}
              {data?.content && <ChallengeDetails challengeData={data} />}
            </div>
          </div>
          <div className="mt-[4.8rem] flex items-center justify-between gap-5 text-xl font-semibold max-md:mt-10">
            <div className="text-left">About</div>
            <div className="text-right">
              <HelpAlert />
            </div>
          </div>
          <div className="z-10 mt-5 h-1 shrink-0 max-md:max-w-full" />
          <div className="mb-[4.8rem] h-px shrink-0 border border-solid border-stone-950 bg-stone-950 max-md:max-w-full" />
          <div className="markdown-body">
            {data?.content && (
              <MDXRemote
                {...data.content}
                components={{ ...MDXCodeHighlighter, ...MDXHeaders }}
              />
            )}
          </div>
          <ChallengeButton />
        </div>
      </div>
    </>
  );
}
