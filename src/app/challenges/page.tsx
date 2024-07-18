"use client";

import List from "./List";
import { styled } from "@mui/material";

const Header = styled("header")({
  background: 'url("/images/banner.png")  center center / cover no-repeat',
});

function ChallengesPage() {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <Header className="relative flex h-[356px] w-full items-center justify-center overflow-hidden text-center max-md:h-[18rem] max-md:max-w-full">
        <h1 className="relative self-center text-7xl font-semibold leading-[356px] text-stone-950 max-md:text-[3.6rem]">
          Challenges
        </h1>
      </Header>
      <List />
    </div>
  );
}

export default ChallengesPage;
