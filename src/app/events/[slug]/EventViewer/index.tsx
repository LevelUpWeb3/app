import MDXHeaders from "@/components/MDXHeaders";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "mdx/types";
import { readPublicDataSync } from "@/utils/fs";

const EventViewer = ({ params }) => {
  const data = readPublicDataSync(
    `events/${params.slug}/${params.slug}_overview.mdx`,
  );
  return (
    <MDXRemote
      source={data}
      options={{
        mdxOptions: { remarkPlugins: [remarkGfm] },
        parseFrontmatter: true,
      }}
      components={
        {
          // ...ContentMDXCodeHighlighter,
          ...MDXHeaders,
        } as MDXComponents
      }
    ></MDXRemote>
  );
};

export default EventViewer;
