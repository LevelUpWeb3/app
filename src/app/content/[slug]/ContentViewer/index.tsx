import { Mermaid } from "mdx-mermaid/Mermaid";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { readPublicDataSync } from "@/utils/fs";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import YoutubeEmbed from "@/components/YoutubeEmbed";

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
  const data = readPublicDataSync(`contents/${params.slug}.mdx`);

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
