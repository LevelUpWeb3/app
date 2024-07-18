"use client";

import React from "react";
import Image from "next/image";

import { styled } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";

import List from "./List";

const HackathonPage = () => {
  const Header = styled("header")({
    backgroundColor: "#FFF0DD",
  });

  const { isDesktop, isTabletLandscape, isTablet, isMobile } =
    useCheckViewport();

  let dynamicPaddingStyle = "";
  if (isTabletLandscape) {
    dynamicPaddingStyle = "pl-[96px]";
  } else if (isTablet) {
    dynamicPaddingStyle = "pl-[56px]";
  } else if (isMobile) {
    dynamicPaddingStyle = "pl-[42px]";
  }

  let dynamicSvgWidthStyle = 0;
  if (isDesktop) {
    dynamicSvgWidthStyle = 225;
  } else if (isTabletLandscape) {
    dynamicSvgWidthStyle = 200;
  } else if (isTablet) {
    dynamicSvgWidthStyle = 175;
  } else if (isMobile) {
    dynamicSvgWidthStyle = 90;
  }

  let dynamicSvgHeightStyle = 0;
  if (isDesktop) {
    dynamicSvgHeightStyle = 200;
  } else if (isTabletLandscape) {
    dynamicSvgHeightStyle = 175;
  } else if (isTablet) {
    dynamicSvgHeightStyle = 150;
  } else if (isMobile) {
    dynamicSvgHeightStyle = 75;
  }

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <Header className="justify-left relative flex h-[356px] w-full items-center overflow-hidden text-left max-md:h-[18rem] max-md:max-w-full">
        <div
          className={`relative mx-auto w-full ${isDesktop ? "max-w-[1536px] pl-[104px] text-9xl" : ""}`}
        >
          <h1
            className={`${isMobile ? "text-7xl" : "text-8xl"} font-semibold leading-[356px] text-stone-950 max-md:text-[3.6rem] ${dynamicPaddingStyle} `}
          >
            Hackathon
            <Image
              src="/images/hackathon.svg"
              width={dynamicSvgWidthStyle}
              height={dynamicSvgHeightStyle}
              className="absolute right-12 top-1/2 -translate-y-1/2 transform"
              alt="Hackathon"
            />
          </h1>
        </div>
      </Header>
      <div
        className={`relative mx-auto mb-[2rem] mt-[3rem] w-full ${isDesktop ? "max-w-[1536px] pl-[104px] text-9xl" : ""}`}
      >
        <span
          className={`${isMobile ? "text-4xl" : "text-6xl"} text-stone-950 max-md:text-[3.6rem] ${dynamicPaddingStyle}`}
        >
          Upcoming
        </span>
      </div>
      <div
        className={`mx-auto mb-[2rem] mt-[3rem] w-full ${isDesktop ? "max-w-[1536px] pl-[104px] pr-[104px]" : ""}`}
      >
        <List />
      </div>
    </div>
  );
};

export default HackathonPage;
