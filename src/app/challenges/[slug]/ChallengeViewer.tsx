import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import { MDXComponents } from "mdx/types";

import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "node:fs";
import path from "node:path";

const ChallengeMDXCodeHighlighter = MDXCodeHighlighter();

const ChallengeViewer = ({ params }) => {
  const data = readFileSync(
    path.resolve(process.cwd(), `public/data/challenges/${params.slug}.mdx`),
    "utf8",
  );

  return (
    <MDXRemote
      source={data}
      options={{
        parseFrontmatter: true,
      }}
      components={
        { ...ChallengeMDXCodeHighlighter, ...MDXHeaders } as MDXComponents
      }
    ></MDXRemote>
  );
};

export default ChallengeViewer;
