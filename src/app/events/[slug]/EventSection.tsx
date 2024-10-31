"use client";

import { Box } from "@mui/material";
import MarkdownViewer from "@/components/MarkdownViewer";

const EventSection = ({ details }) => {
  return (
    <Box className="markdown-level-up" sx={{ mt: "60px" }}>
      <MarkdownViewer data={details}></MarkdownViewer>
    </Box>
  );
};

export default EventSection;
