"use client";

import React, { useState, useEffect, useMemo } from "react";
import EventsHeader from "@/components/EventsHeader";

import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import dynamic from "next/dynamic";
import { sendGAEvent } from "@next/third-parties/google";

import { Box } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";
import Data from "../eventsList.json";

import { MDXRemote } from "next-mdx-remote";

const EventsDetailsPage = () => {
  const [eventsData, setEventsData] = useState<any>([]);
  const [sortedDetails, setSortedDetails] = useState<any>([]);
  const { isMobile } = useCheckViewport();

  const pathname = usePathname();
  const slug = pathname!.split("/").pop();

  useEffect(() => {
    fetch(`/data/events/markdownData.json`)
      .then((res) => res.json())
      .then((data) => {
        const searchEvents = Data.find((events) =>
          events.url.includes(pathname),
        );
        const filteredDetails = data.filter((item) => item.id.startsWith(slug));
        const sortedDetails = filteredDetails.sort((a, b) => a.index - b.index);
        setEventsData(searchEvents);
        setSortedDetails(sortedDetails);
      });
  }, [pathname, slug]);

  if (!eventsData || sortedDetails.length === 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <ComingSoon />
      </Box>
    );
  }

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <EventsHeader
        title={eventsData.name}
        registrationLink={`../../events/${slug}/register`}
        url={`/images/events/${slug}.svg`}
        eventsDate={eventsData.date}
        location={eventsData.location}
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
                    href={`../../events/${slug}/register`}
                    width={isMobile ? "100%" : "25rem"}
                    onClick={() =>
                      sendGAEvent("event", "eventsClicked", {
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
            href={`../../events/${slug}/submit`}
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

export default EventsDetailsPage;
