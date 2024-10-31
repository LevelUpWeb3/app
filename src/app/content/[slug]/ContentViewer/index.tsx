"use client";

import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { Box } from "@mui/material";
import MarkdownViewer from "@/components/MarkdownViewer";

const ContentViewer = (props) => {
  const { data } = props;

  return (
    <Box className="markdown-level-up py-[60px]">
      <MarkdownViewer
        data={data}
        components={{
          ...MDXCodeHighlighter(),
          ...MDXHeaders,
          Mermaid,
          YoutubeEmbed,
        }}
      ></MarkdownViewer>
    </Box>
  );
};

export default ContentViewer;
