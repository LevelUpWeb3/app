"use client";

import { Box, Container } from "@mui/material";

import Button from "@/components/Button";
import { sendGAEvent } from "@next/third-parties/google";
import MarkdownViewer from "@/components/MarkdownViewer";

const EventOverview = (props) => {
  const { details, hackathonId } = props;

  const imageURL = `/images/events/${hackathonId}.svg`;

  return (
    <Box
      sx={{
        py: ["60px"],
        backgroundColor: "text.primary",
      }}
    >
      <Container
        sx={{ background: `url(${imageURL}) 10% center / auto 100% no-repeat` }}
      >
        <Box className="markdown-level-up text-white">
          <h1 className="!pt-0 pl-[50%]">{details.title}</h1>
          <MarkdownViewer data={details} theme="dark" />
        </Box>
        <Box sx={{ pl: "50%", mt: "30px" }}>
          <Button
            href={`/events/${hackathonId}/submit`}
            onClick={() =>
              sendGAEvent("event", "eventsClicked", {
                value: { slug: hackathonId },
              })
            }
          >
            Register Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EventOverview;
