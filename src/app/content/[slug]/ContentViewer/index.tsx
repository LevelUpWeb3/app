"use client";

import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import MarkdownViewer from "@/components/MarkdownViewer";
import CrossDetection from "@/components/CrossDetection";

const ContentMDXCodeHighlighter = MDXCodeHighlighter();

const ContentViewer = (props) => {
  const { data } = props;

  return (
    <CrossDetection dataSource={data} className="py-[30px] sm:py-[60px]">
      <MarkdownViewer
        data={data}
        components={{
          ...ContentMDXCodeHighlighter,
          ...MDXHeaders,
          Mermaid,
          YoutubeEmbed,
        }}
      ></MarkdownViewer>
    </CrossDetection>
  );
};

export default ContentViewer;
