"use client";

import MDXHeaders from "@/components/MDXHeaders";
import MarkdownViewer from "@/components/MarkdownViewer";
import CrossDetection from "@/components/CrossDetection";

const EventViewer = (props) => {
  const { data } = props;

  return (
    <CrossDetection
      dataSource={data}
      className="event-viewer py-[30px] sm:py-[40px] md:py-[60px]"
    >
      <MarkdownViewer
        data={data}
        components={{
          // ...ContentMDXCodeHighlighter,
          ...MDXHeaders,
        }}
      ></MarkdownViewer>
    </CrossDetection>
  );
};

export default EventViewer;
