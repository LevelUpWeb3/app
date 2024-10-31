"use client";

import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import { Container } from "@mui/material";

import MarkdownViewer from "@/components/MarkdownViewer";

const ChallengeViewer = (props) => {
  const { data } = props;

  return (
    <Container className="markdown-level-up challenge py-[30px] sm:py-[60px]">
      <MarkdownViewer
        data={data}
        components={{ ...MDXCodeHighlighter(), ...MDXHeaders }}
      ></MarkdownViewer>
    </Container>
  );
};

export default ChallengeViewer;
