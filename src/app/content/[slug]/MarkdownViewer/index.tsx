"use client";
import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);
const MarkdownViewer = (props) => {
  const { isLoading, data } = props;
  return (
    <Box className="markdown-level-up">
      {!isLoading && data?.content && (
        <MDXRemote
          {...data.content}
          components={{
            ...MDXCodeHighlighter,
            ...MDXHeaders,
            Mermaid,
            YoutubeEmbed,
          }}
        />
      )}
    </Box>
  );
};

export default MarkdownViewer;
