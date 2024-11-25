import { Box } from "@mui/material";
import path from "node:path";
import { Mermaid } from "mdx-mermaid/Mermaid";
import MDXCodeHighlighter from "@/components/MDXCodeHighlighter";
import MDXHeaders from "@/components/MDXHeaders";
import { readFileSync } from "node:fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import "@/assets/css/markdown-level-up-light.css";

const ContentMDXCodeHighlighter = MDXCodeHighlighter();

interface MDXComponents {
  [key: string]: React.FC<any>;
}

const Teaching = ({ params }) => {
  const data = readFileSync(
    path.resolve(process.cwd(), `public/data/solidity/${params.slug}.mdx`),
    "utf8",
  );
  return (
    <Box
      sx={{
        backgroundColor: "rgba(186, 240, 247, 0.2)",
        height: ["auto", "auto", "820px"],
        p: ["30px 20px 10px 20px", "50px 50px 30px 50px", "50px 50px"],
        overflowY: "auto",
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#1010101A",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        // Firefox
        scrollbarWidth: "thin",
        scrollbarColor: "#1010101A transparent",
      }}
    >
      <Box className="markdown-level-up-light">
        <MDXRemote
          source={data}
          options={{
            parseFrontmatter: true,
          }}
          components={
            {
              ...ContentMDXCodeHighlighter,
              ...MDXHeaders,
              Mermaid,
            } as MDXComponents
          }
        ></MDXRemote>
      </Box>
    </Box>
  );
};

export default Teaching;
