"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@/components/Button";
import { sendGAEvent } from "@next/third-parties/google";

const EventSubmit = (props) => {
  const { hackathonId, buttonText, submissionButtonDisabled } = props;

  return (
    <Box
      sx={{
        backgroundColor: "rgba(232, 246, 40, 0.20)",
        py: ["30px", "40px", "60px"],
      }}
    >
      <Container>
        <Stack
          direction={["column", "column", "row"]}
          alignItems={["center", "center", "flex-start"]}
          sx={{ textAlign: ["center", "center", "left"] }}
        >
          <Typography
            sx={{
              fontSize: ["24px", "24px", "36px"],
              width: ["100%", "100%", "50%"],
            }}
          >
            Submit Your Article
          </Typography>
          <Stack sx={{ width: ["100%", "100%", "50%"] }} gap={["16px", "20px"]}>
            <Typography sx={{ fontSize: "16px" }}>
              Submit your article using the button below.
            </Typography>
            <Button
              color="primary"
              size="large"
              href={`/events/${hackathonId}/submit`}
              sx={{ width: "100% !important" }}
              disabled={submissionButtonDisabled}
              onClick={() =>
                sendGAEvent("event", "hackathonClicked", {
                  value: { slug: hackathonId },
                })
              }
            >
              {buttonText}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default EventSubmit;
