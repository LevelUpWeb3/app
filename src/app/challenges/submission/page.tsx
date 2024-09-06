"use client";
import React from "react";
import Script from "next/script";

const SubmissionPage = () => {
  return (
    <div className="max-h-full">
      <iframe
        data-tally-src="https://tally.so/r/wLYDW1"
        title="Submit your solution to a Level Up Challenge!"
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

export default SubmissionPage;
