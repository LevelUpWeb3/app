"use client";

import { Box } from "@mui/material";
import MarkdownViewer from "@/components/MarkdownViewer";

const EventSection = ({ details }) => {
  return (
    <Box className="markdown-level-up" sx={{ mt: ["30px", "40px", "60px"] }}>
      <h1 className="!pt-0 pl-[50%]">{details.title}</h1>
      <MarkdownViewer data={details}></MarkdownViewer>
    </Box>
  );
};

export default EventSection;
