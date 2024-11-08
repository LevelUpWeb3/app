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
import AttributionComponent from "@/components/Attribution";
import ContentFooter from "@/components/ContentFooter";
import BackSvg from "@/assets/svgs/common/back.svg";

import { SvgIcon, Skeleton } from "@mui/material";

import { MDXRemote } from "next-mdx-remote";

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
  }, [pathname]);

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
      <div className="mx-auto grid h-screen w-full max-w-[140rem] grid-cols-[100%] px-[6rem]">
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
                  <h1>{data.name}</h1>
                  {data.author &&
                    data.authorIcon &&
                    data.authorLink &&
                    data.published &&
                    data.readTime && (
                      <AttributionComponent
                        author={data.author}
                        authorIcon={data.authorIcon}
                        authorLink={data.authorLink}
                        published={data.published}
                        readTime={data.readTime}
                      />
                    )}
                  <MDXRemote
                    {...data.content}
                    components={{
                      ...MDXCodeHighlighter,
                      ...MDXHeaders,
                      Mermaid,
                      YoutubeEmbed,
                    }}
                  />
                  <ContentFooter currentContentIndex={data.index} />
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}
