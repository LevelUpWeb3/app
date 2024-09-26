"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";

import List from "./List";

const ChallengesPage = () => {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <SectionHeader title="Challenges" url={"/images/podcast-banner.svg"} />
      <Wrapper>
        <List />
      </Wrapper>
    </div>
  );
};

export default ChallengesPage;
