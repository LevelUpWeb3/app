"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import BackSvg from "@/assets/svgs/common/back.svg";
import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";
import { sendGAEvent } from "@next/third-parties/google";
import WritersCompetitionHeader from "@/components/WritersCompetitionHeader";

import { SvgIcon, Skeleton } from "@mui/material";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);

function SubmitButton({ slug, isMobile, submissionForm }: { slug: string; isMobile: boolean, submissionForm: string }) {
  return (
    <div className="mt-10">
      <Button
        color="primary"
        href={ submissionForm }
        width={isMobile ? "100%" : "25rem"}
        isExternal={ true }
        onClick={() =>
          sendGAEvent("event", "hackathonClicked", {
            value: { slug }
          })
        }
      >
        Submit your article
      </Button>
    </div>
  )
}

export default function ContentDetailsPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();
  const slug = pathname!.split("/").pop();
  const { isMobile } = useCheckViewport();

  useEffect(() => {
    fetch(`/data/writers-competitions/${slug}.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    setLoading(false);
  }, [pathname]);

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
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

      <WritersCompetitionHeader
        title={data.title}
        submissionForm={ data.submission_form }
        url={`/images/writers-competitions/${slug}.svg`}
        eventsDate={ data.dates }
        location={"Global"}
      />
      <div className="mx-auto mb-32 mt-20 w-full max-w-[153.6rem] px-[10.4rem] max-md:px-[1.6rem]">
        {isLoading ? (
          <>
            <Skeleton variant="rounded" className="min-h-screen w-full" />
          </>
        ) : (
          <>
            <div className="markdown-body" style={{ overflow: "visible" }}>
              {" "}
              {data?.content && data.published ? (
                <>
                  <MDXRemote
                    {...data.content}
                    components={{
                      ...MDXCodeHighlighter,
                      ...MDXHeaders,
                      Mermaid,
                      YoutubeEmbed,
                    }}
                  />
                  <div className="mt-[-6.5rem] flex flex-col pb-2.5">
                    <div className="mx-auto mb-32 mt-20 w-full max-w-[153.6rem] px-[10.4rem] max-md:px-[1.6rem]">
                      <SubmitButton slug={slug!} isMobile={isMobile} submissionForm={ data.submission_form } /> {}
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
