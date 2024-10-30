"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);
const HackathonSection = ({ details }) => {
  return (
    <Box className="markdown-level-up" sx={{ mt: "60px" }}>
      <MDXRemote {...details.content} />
    </Box>
  );
};

export default HackathonSection;
