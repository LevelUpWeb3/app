"use client";

import React from "react";
import { styled } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";

const HackathonPage = () => {
  const Header = styled("header")({
    backgroundColor: "#FFF0DD",
  });

  const { isDesktop, isTabletLandscape, isTablet, isMobile } =
    useCheckViewport();

  let additionalClasses = "";
  if (isTabletLandscape) {
    additionalClasses = "pl-[96px]";
  } else if (isTablet) {
    additionalClasses = "pl-[56px]";
  } else if (isMobile) {
    additionalClasses = "pl-[42px]";
  }

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <Header className="justify-left relative flex h-[356px] w-full items-center overflow-hidden text-left max-md:h-[18rem] max-md:max-w-full">
        <div
          className={`mx-auto w-full ${isDesktop ? "max-w-[1536px] pl-[104px] text-9xl" : ""}`}
        >
          <h1
            className={`relative ${isMobile ? "text-7xl" : "text-8xl"} font-semibold leading-[356px] text-stone-950 max-md:text-[3.6rem] ${additionalClasses} `}
          >
            Hackathon
          </h1>
        </div>
      </Header>
    </div>
  );
};

export default HackathonPage;
