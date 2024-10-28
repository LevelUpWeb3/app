"use client";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import dynamic from "next/dynamic";
import { Container } from "@mui/material";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);
const MarkdownViewer = (props) => {
  const { isLoading, data } = props;
  return (
    <Container className="markdown-level-up challenge">
      {data?.content && (
        <MDXRemote
          {...data.content}
          components={{ ...MDXCodeHighlighter, ...MDXHeaders }}
        />
      )}
    </Container>
  );
};

export default MarkdownViewer;
