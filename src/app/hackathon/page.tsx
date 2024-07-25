"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";

import List from "./List";

const HackathonPage = () => {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <SectionHeader title="Hackathon" url={"/images/hackathon.svg"} />
      <Wrapper>
        <div className="mb-[2.4rem] mt-[4rem] text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
          Upcoming
        </div>
        <List />
      </Wrapper>
    </div>
  );
};

export default HackathonPage;
