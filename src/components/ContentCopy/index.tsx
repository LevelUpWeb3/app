"use client";

import React from "react";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import CopyButton from "./CopyButton";

const ContentCopy: React.FC<{ code: string; language: string }> = ({
  code,
  language,
}) => (
  <div
    style={{
      position: "relative",
      backgroundColor: "#15150F",
      borderRadius: 10,
      fontSize: "14px",
    }}
  >
    {MDXCodeHighlighter.code({
      node: null,
      inline: false,
      className: `language-${language}`,
      children: code,
    })}
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <CopyButton text={code} />
    </div>
  </div>
);

export default ContentCopy;
