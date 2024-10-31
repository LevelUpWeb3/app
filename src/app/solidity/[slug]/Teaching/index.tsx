"use client";

import { Box } from "@mui/material";
import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";

import MarkdownViewer from "@/components/MarkdownViewer";
import "@/assets/css/markdown-level-up-light.css";

const Teaching = (props) => {
  const { data } = props;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(186, 240, 247, 0.2)",
        height: "820px",
        p: ["30px 20px", "50px 50px"],
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
        <MarkdownViewer
          data={data}
          components={{
            ...MDXCodeHighlighter("light"),
            ...MDXHeaders,
            Mermaid,
          }}
        ></MarkdownViewer>
      </Box>
    </Box>
  );
};

export default Teaching;
