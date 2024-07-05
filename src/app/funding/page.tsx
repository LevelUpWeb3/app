"use client";

import React from "react";
import Script from "next/script";
import { styled } from "@mui/material";

const Header = styled("header")({
  background:
    'url("/images/funding-banner.png")  center center / cover no-repeat',
});

function FundingPage() {
  return (
    <div className="flex flex-col pb-2.5 mt-[-6.5rem]">
      <Header className="overflow-hidden relative flex items-center justify-center  w-full text-center h-[300px] max-md:max-w-full max-md:h-[18rem]">
        <h1 className="relative p-[10.0rem] mr-auto text-9xl font-semibold leading-[356px]  text-stone-950 max-md:text-[3.6rem]">
          Funding Program
        </h1>
      </Header>
      <iframe
        data-tally-src="https://tally.so/embed/w2Kp8M?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="1411"
        title="Scroll Grants"
      ></iframe>

      <Script
        src="https://tally.so/widgets/embed.js"
        onLoad={() => window.Tally.loadEmbeds()}
      />
    </div>
  );
}

export default FundingPage;
