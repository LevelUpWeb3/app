"use client";

import { Box } from "@mui/material";
import { Mermaid } from "mdx-mermaid/Mermaid";
import dynamic from "next/dynamic";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";

import "@/assets/css/markdown-level-up-light.css";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);
const Teaching = (props) => {
  const { data } = props;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(186, 240, 247, 0.2)",
        height: "820px",
        p: "50px 50px",
        overflowY: "auto",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#1010101A",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        // Firefox
        scrollbarWidth: "thin",
        scrollbarColor: "#1010101A transparent",
      }}
    >
      <Box className="markdown-level-up-light">
        {data?.content && (
          <MDXRemote
            {...data.content}
            components={{
              ...MDXCodeHighlighter("light"),
              ...MDXHeaders,
              Mermaid,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Teaching;
