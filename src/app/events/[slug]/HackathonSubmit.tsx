"use client";

import { Box } from "@mui/material";
import Button from "@/components/Button";
import { sendGAEvent } from "@next/third-parties/google";

const HackathonSubmit = (props) => {
  const { hackathonId } = props;

  return (
    <Box sx={{ pl: "50%", mt: "30px", mb: "60px" }}>
      <Button
        color="primary"
        href={`/hackathon/${hackathonId}/submit`}
        sx={{ width: ["100% !important", "auto !important"] }}
        onClick={() =>
          sendGAEvent("event", "hackathonClicked", {
            value: { slug: "hackathonId" },
          })
        }
      >
        Submit your project
      </Button>
    </Box>
  );
};

export default HackathonSubmit;
