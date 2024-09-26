"use client";

import React, { useState, useEffect, useMemo } from "react";
import HackathonHeader from "@/components/HackathonHeader";

import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
import { sendGAEvent } from "@next/third-parties/google";

import { Skeleton } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";
import Data from "../hackathonList.json";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);

const HackathonDetailsPage = () => {
  const [hackathonData, setHackathonData] = useState<any>([]);
  const [sortedDetails, setSortedDetails] = useState<any>([]);
  const { isMobile } = useCheckViewport();

  const pathname = usePathname();
  const slug = pathname!.split("/").pop();

  useEffect(() => {
    fetch(`/data/hackathons/markdownData.json`)
      .then((res) => res.json())
      .then((data) => {
        const searchHackathon = Data.find((hackathon) =>
          hackathon.url.includes(pathname),
        );
        const filteredDetails = data.filter((item) => item.id.startsWith(slug));
        const sortedDetails = filteredDetails.sort((a, b) => a.index - b.index);
        setHackathonData(searchHackathon);
        setSortedDetails(sortedDetails);
      });
  }, [pathname, slug]);

  if (!hackathonData || sortedDetails.length === 0) {
    return <Skeleton className="h-screen max-w-full p-10"></Skeleton>;
  }

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <HackathonHeader
        title={hackathonData.name}
        registrationLink={`../../hackathon/${slug}/register`}
        url={`/images/hackathon/${slug}.svg`}
        hackathonDate={hackathonData.date}
        location={hackathonData.location}
      />
      <div className="mx-auto mb-32 mt-20 w-full max-w-[153.6rem] px-[10.4rem] max-md:px-[1.6rem]">
        {sortedDetails.map((details, index) => (
          <React.Fragment key={details.id}>
            <div className="markdown-body">
              <h1>{details.title}</h1>
              <MDXRemote {...details.content} />
              {details.index === 1 && (
                <div className="mt-10">
                  <Button
                    color="primary"
                    href={`../../hackathon/${slug}/register`}
                    width={isMobile ? "100%" : "25rem"}
                    onClick={() =>
                      sendGAEvent("event", "hackathonClicked", {
                        value: { slug },
                      })
                    }
                  >
                    Register now
                  </Button>
                </div>
              )}
            </div>
            {index < sortedDetails.length - 1 && (
              <div className="mb-[4.8rem] mt-[4.8rem] h-px shrink-0 border border-solid border-stone-950 bg-stone-950 max-md:max-w-full" />
            )}
          </React.Fragment>
        ))}
        <div className="mt-10">
          <Button
            color="primary"
            href={`../../hackathon/${slug}/submit`}
            width={isMobile ? "100%" : "25rem"}
            onClick={() =>
              sendGAEvent("event", "hackathonClicked", {
                value: { slug },
              })
            }
          >
            Submit your project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HackathonDetailsPage;
