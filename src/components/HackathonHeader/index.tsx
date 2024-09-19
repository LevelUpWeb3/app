"use client";

import React, { useMemo } from "react";

import { styled } from "@mui/material";
import { SvgIcon } from "@mui/material";
import Button from "@/components/Button";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";
import useCheckViewport from "@/hooks/useCheckViewport";
import BackSvg from "@/assets/svgs/common/back.svg";

const HackathonHeader = (props) => {
  const { isMobile } = useCheckViewport();
  const { title, url, registrationLink, hackathonDate, location, imgClass } =
    useMemo(() => props, [props]);

  console.log("Props: ", props);

  const Header = styled("header")({
    backgroundColor: "#FFF0DD",
    width: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
  });

  const ContentContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    overflow: "hidden",
  });

  return (
    <Header className="h-[48rem] pt-[6.5rem] max-md:h-[30rem] max-md:pt-[6.2rem]">
      <ContentContainer className="mx-auto max-w-[1536px] px-[10.4rem] max-md:px-[1.6rem]">
        <div className="flex h-full items-center justify-between">
          <div className="w-1/2">
            <div className="mt-20 flex gap-3 self-start whitespace-nowrap text-lg font-semibold leading-8 text-stone-950">
              <Link
                href="/hackathon"
                className="mt-[-8rem] self-start whitespace-nowrap text-lg font-semibold leading-8 text-stone-950 max-lg:text-[2.4rem] max-md:mt-[-4rem] max-md:text-[1.6rem]"
              >
                <SvgIcon component={BackSvg} className="mr-[1.2rem]" /> Back
              </Link>
            </div>
            <p className="whitespace-nowrap pb-10 text-[16px] max-md:pb-0 max-md:text-[1.2rem]">
              {hackathonDate} · {location}
            </p>
            <h1 className="mb-[15px] mt-[-2rem] text-[48px] leading-[1.2] text-stone-950 max-lg:text-[3.0rem] max-md:mt-0 max-md:text-[2.0rem]">
              {title}
            </h1>
            <Button
              href={registrationLink}
              color="primary"
              width={isMobile ? "100%" : "25rem"}
              onClick={() =>
                sendGAEvent("event", "hackathonClicked", {
                  value: { title },
                })
              }
            >
              Register now
            </Button>
          </div>
          <img
            src={url}
            className={`max-h-full object-contain ${imgClass} max-md:max-h-[90%]`}
          />
        </div>
      </ContentContainer>
    </Header>
  );
};

export default HackathonHeader;
