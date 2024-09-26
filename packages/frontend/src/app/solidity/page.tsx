"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";

import List from "./List";

const SolidityPage = () => {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <SectionHeader
        title="Solidity Challenges"
        url={"/images/solidity-banner.svg"}
        imgClass="self-end"
      />
      <Wrapper>
        <List />
      </Wrapper>
    </div>
  );
};

export default SolidityPage;
