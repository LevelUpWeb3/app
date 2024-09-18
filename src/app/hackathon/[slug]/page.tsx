"use client";

import React, { useState, useEffect } from "react";
import HackathonHeader from "@/components/HackathonHeader";
import Wrapper from "@/components/Wrapper";

import { usePathname } from "next/navigation";
import Data from "./../hackathonList.json";

const HackathonDetailsPage = () => {
  const [hackathonData, setHackathonData] = useState<any>([]);

  const pathname = usePathname();
  const slug = pathname!.split("/").pop();

  useEffect(() => {
    const searchHackathon = Data.find((hackathon) =>
      hackathon.url.includes(pathname),
    );
    setHackathonData(searchHackathon);
  }, [pathname]);

  //TODO: Add skeleton loading
  if (!hackathonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-[-6.5rem] flex flex-col pb-2.5">
      <HackathonHeader
        title={hackathonData.name}
        url={`/images/hackathon/${slug}.svg`}
        hackathonDate={hackathonData.date}
        location={hackathonData.location}
      />
      <Wrapper></Wrapper>
    </div>
  );
};

export default HackathonDetailsPage;
