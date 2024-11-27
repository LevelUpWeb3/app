import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import { readPublicDataSync } from "@/utils/fs";

const ChallengeMDXCodeHighlighter = MDXCodeHighlighter();

const ChallengeViewer = ({ params }) => {
  const data = readPublicDataSync(`challenges/${params.slug}.mdx`);

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
