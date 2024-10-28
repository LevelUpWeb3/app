"use client";

import { Box, Chip, Container, Stack, Typography } from "@mui/material";

import Button from "@/components/Button";
import Tooltip from "@/components/EditorTooltip";
import dynamic from "next/dynamic";
import { sendGAEvent } from "@next/third-parties/google";

import Link from "next/link";

import XSvg from "@/assets/svgs/socials/x.svg";
import TelegramSvg from "@/assets/svgs/socials/telegram.svg";
import StarSvg from "@/assets/svgs/hackathon/star.svg";
import clsx from "clsx";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
  },
);

const HackathonOverview = (props) => {
  const { details, hackathonId, ...restProps } = props;

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
          {details?.content && <MDXRemote {...details.content} />}
        </Box>
        <Box sx={{ pl: "50%", mt: "30px" }}>
          <Button
            href={`../../hackathon/${hackathonId}/submit`}
            onClick={() =>
              sendGAEvent("event", "eventsClicked", {
                value: { slug },
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

export default HackathonOverview;
