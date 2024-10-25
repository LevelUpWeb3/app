"use client";

import { Box } from "@mui/material";
import { Mermaid } from "mdx-mermaid/Mermaid";
import dynamic from "next/dynamic";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";

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
        p: "20px 10px",
        overflowY: "auto",
      }}
    >
      <Box className="markdown-body" sx={{ p: "35px 50px" }}>
        {data?.content && (
          <MDXRemote
            {...data.content}
            components={{
              ...MDXCodeHighlighter,
              ...MDXHeaders,
              ul: (props) => (
                <ul {...props} className="!mb-[20px] !pl-[1.2em]" />
              ),
              li: (props) => (
                <li {...props} className="!mt-0 !leading-[30px]" />
              ),
              Mermaid,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Teaching;
