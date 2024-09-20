"use client";
import React, { useState, useEffect } from "react";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Skeleton } from "@mui/material";

import Data from "../../hackathonList.json";

const RegistrationPage = () => {
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
    <div className="max-h-full">
      <iframe
        data-tally-src={hackathonData.registrationLink}
        title="Register for Alchemy mini hack!"
        width="100%"
        height="1411"
      ></iframe>

      <Script
        src="https://tally.so/widgets/embed.js"
        onLoad={() => window.Tally.loadEmbeds()}
      />
    </div>
  );
};

export default RegistrationPage;
