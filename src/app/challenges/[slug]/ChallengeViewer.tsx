"use client";

import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";

import MarkdownViewer from "@/components/MarkdownViewer";
import CrossDetection from "@/components/CrossDetection";

const ChallengeMDXCodeHighlighter = MDXCodeHighlighter();

const ChallengeViewer = (props) => {
  const { data } = props;

  return (
    <CrossDetection
      dataSource={data}
      className="challenge py-[30px] sm:py-[40px] md:py-[60px]"
    >
      <MarkdownViewer
        data={data}
        components={{ ...ChallengeMDXCodeHighlighter, ...MDXHeaders }}
      ></MarkdownViewer>
    </CrossDetection>
  );
};

export default ChallengeViewer;
