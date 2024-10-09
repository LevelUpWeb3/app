"use client";
import React, { useState, useEffect } from "react";

import { usePathname } from "next/navigation";
import { Skeleton } from "@mui/material";

import TallyForm from "@/components/TallyForm";
import Data from "../../eventsList.json";

const SubmissionPage = () => {
  const [hackathonData, setHackathonData] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").slice(-2, -1)[0];

    const searchHackathon = Data.find((hackathon) =>
      hackathon.url.includes(slug),
    );
    setHackathonData(searchHackathon);
  }, [pathname]);

  if (!hackathonData) {
    return <Skeleton className="h-screen max-w-full p-10"></Skeleton>;
  }

  return (
    <TallyForm
      tallyUrl={hackathonData.submissionLink}
      title="Submit your Alchemy mini hack!"
    />
  );
};

export default SubmissionPage;
