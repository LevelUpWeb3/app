"use client";

import React from "react";
import Script from "next/script";
import { styled } from "@mui/material";

const Header = styled("header")({
  background: 'url("/images/banner.png")  center center / cover no-repeat',
});

function GrantsPage() {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <Header className="relative flex h-[356px] w-full items-center justify-center overflow-hidden text-center max-md:h-[18rem] max-md:max-w-full">
        <h1 className="relative self-center text-9xl font-semibold leading-[356px] text-stone-950 max-md:text-[3.6rem]">
          Grants Program
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

export default GrantsPage;
