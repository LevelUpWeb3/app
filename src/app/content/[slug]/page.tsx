"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";

import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import ContentCopy from "@/components/ContentCopy";
import YoutubeEmbed from "@/components/YoutubeEmbed";

import BackSvg from "@/assets/svgs/common/back.svg";
import ContentFooter from "@/components/ContentFooter";

import { SvgIcon, Skeleton } from "@mui/material";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);

export default function ContentDetailsPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname!.split("/").pop();
    fetch(`/data/contents/${slug}.json`)
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
            <Link href="/content" className="flex items-center">
              <SvgIcon component={BackSvg} className="mr-[1.2rem]" /> Back
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid h-screen w-full max-w-[140rem] px-[6rem]">
        {isLoading ? (
          <>
            <Skeleton variant="rounded" className="min-h-screen w-full" />
          </>
        ) : (
          <>
            <div className="markdown-body" style={{ overflow: "visible" }}>
              {" "}
              {data?.content ? (
                <>
                  <MDXRemote
                    {...data.content}
                    components={{
                      ...MDXCodeHighlighter,
                      Mermaid,
                      YoutubeEmbed,
                      ContentCopy,
                    }}
                  />
                  <ContentFooter />
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}
