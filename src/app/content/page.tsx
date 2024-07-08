"use client";

import List from "./List";
import { styled } from "@mui/material";

const Header = styled("header")({
  background: 'url("/images/banner.png")  center center / cover no-repeat',
});

function ContentPage({}) {
  return (
    <div className="flex flex-col pb-[5rem] mt-[-6.5rem]">
      <Header className="overflow-hidden relative flex items-center justify-center  w-full text-center h-[356px] max-md:max-w-full max-md:h-[18rem]">
        <h1 className="relative self-center text-9xl font-semibold leading-[356px] text-stone-950 max-md:text-[3.6rem]">
          Content
        </h1>
      </Header>
      <List />
    </div>
  );
}

export default ContentPage;
