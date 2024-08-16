"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";
import DateSelect from "./List/DateSelect";
import RegionSelect from "./List/RegionSelect";

import List from "./List";

const HackathonPage = () => {
  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <SectionHeader title="Hackathon" url={"/images/hackathon.svg"} />
      <Wrapper>
        <List />
      </Wrapper>
    </div>
  );
};

export default HackathonPage;
