import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { readFileSync } from "node:fs";
import path from "node:path";

const ContentMDXCodeHighlighter = MDXCodeHighlighter();

interface MDXComponents {
  [key: string]: React.FC<any>;
}

const components: MDXComponents = {
  ...ContentMDXCodeHighlighter,
  ...MDXHeaders,
  Mermaid,
  YoutubeEmbed,
};

const ContentViewer = async ({ params }) => {
  const data = readFileSync(
    path.resolve(process.cwd(), `public/data/contents/${params.slug}.mdx`),
    "utf8",
  );

  return (
    <MDXRemote
      source={data}
      options={{
        mdxOptions: { remarkPlugins: [remarkGfm] },
        parseFrontmatter: true,
      }}
      components={components}
    />
  );
};

export default ContentViewer;
