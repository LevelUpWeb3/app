import MDXHeaders from "@/components/MDXHeaders";
import { readFileSync } from "node:fs";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "mdx/types";

const EventViewer = ({ params }) => {
  const data = readFileSync(
    path.resolve(
      process.cwd(),
      `public/data/events/${params.slug}/${params.slug}_overview.mdx`,
    ),
    "utf-8",
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
