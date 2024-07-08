"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { styled } from "@mui/material";

const Header = styled("header")({
  background: 'url("/images/banner.png")  center center / cover no-repeat',
});

function GrantsPage() {
  return (
    <div className="flex flex-col pb-2.5 mt-[-6.5rem]">
      <Header className="overflow-hidden relative flex items-center justify-center  w-full text-center h-[356px] max-md:max-w-full max-md:h-[18rem]">
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
