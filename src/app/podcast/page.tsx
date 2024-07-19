"use client";

import React from "react";
import Image from "next/image";

import { styled } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";

import List from "./List";

const PodcastPage = () => {
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

  let dynamicImagePositioning = "";
  if (isDesktop) {
    dynamicImagePositioning = "right-56";
  } else if (isTabletLandscape) {
    dynamicImagePositioning = "right-48";
  } else if (isTablet) {
    dynamicImagePositioning = "right-32";
  } else if (isMobile) {
    dynamicImagePositioning = "right-16";
  }

  let dynamicSvgWidthStyle = 0;
  if (isDesktop) {
    dynamicSvgWidthStyle = 245;
  } else if (isTabletLandscape) {
    dynamicSvgWidthStyle = 200;
  } else if (isTablet) {
    dynamicSvgWidthStyle = 250;
  } else if (isMobile) {
    dynamicSvgWidthStyle = 150;
  }

  let dynamicSvgHeightStyle = 0;
  if (isDesktop) {
    dynamicSvgHeightStyle = 200;
  } else if (isTabletLandscape) {
    dynamicSvgHeightStyle = 155;
  } else if (isTablet) {
    dynamicSvgHeightStyle = 155;
  } else if (isMobile) {
    dynamicSvgHeightStyle = 105;
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
            Podcast
            <Image
              src="/images/podcast-banner.svg"
              width={dynamicSvgWidthStyle}
              height={dynamicSvgHeightStyle}
              className={`absolute ${dynamicImagePositioning} top-1/2 mt-[3.0rem] -translate-y-1/2 transform`}
              alt="Content"
            />
          </h1>
        </div>
      </Header>
      <List />
    </div>
  );
};

export default PodcastPage;
