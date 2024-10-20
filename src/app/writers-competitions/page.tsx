"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";

import List from "./List";

const WritersCompetitionsPage = () => {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <SectionHeader title="Writers competitions" url={"/images/writers-competitions.svg"} />
      <Wrapper>
        <List />
      </Wrapper>
    </div>
  );
};

export default WritersCompetitionsPage;
