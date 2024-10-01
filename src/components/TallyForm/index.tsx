"use client";
import React from "react";
import Script from "next/script";

const TallyForm = ({ tallyUrl, title }) => {
  return (
    <div className="max-h-full">
      <iframe
        data-tally-src={tallyUrl}
        title={title}
        width="100%"
        height="1411"
      ></iframe>

      <Script
        src="https://tally.so/widgets/embed.js"
        onReady={() => window.Tally.loadEmbeds()}
      />
    </div>
  );
};

export default TallyForm;
