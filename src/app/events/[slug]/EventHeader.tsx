import { Box, Stack, Typography } from "@mui/material";

import Button from "@/components/Button";
import Tooltip from "@/components/EditorTooltip";
import Link from "next/link";

import XSvg from "@/assets/svgs/socials/x.svg";
import TelegramSvg from "@/assets/svgs/socials/telegram.svg";
import StarSvg from "@/assets/svgs/events/star.svg";

import { generateShareTwitterURL } from "@/utils";

const HackathonHeader = (props) => {
  const {
    name,
    hackathonId,
    buttonText,
    date,
    location,
    registrationButtonDisabled,
  } = props;

  const registrationLink = `/events/${hackathonId}/register`;

  const text = `Exciting news! \n 🚀 ${name} event is happening now! Join the event from levelup.xyz/events, and let's level up together! 🔥`;

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing="8px"
        sx={{
          width: ["100%", "100%", "50%"],
          fontSize: ["14px", "16px"],
          fontWeight: 500,
          lineHeight: "24px",
        }}
      >
        <p>{date}</p>
        <StarSvg className="!mt-[-4px]"></StarSvg>
        <p>{location}</p>
      </Stack>
      <Typography
        sx={{
          fontSize: ["36px", "48px"],
          mt: "10px",
          width: ["100%", "100%", "50%"],
        }}
      >
        {name}
      </Typography>

      <Stack
        direction={["column", "row"]}
        sx={{ mt: "30px" }}
        gap={["40px", 0]}
        justifyContent="space-between"
      >
        <Button href={registrationLink} disabled={registrationButtonDisabled}>
          Register Now
        </Button>
        <Stack direction="row" spacing="30px" alignItems="flex-end">
          <Link
            className="inline-flex items-center gap-[10px] text-[16px]"
            href={generateShareTwitterURL(
              text,
              `https://www.levelup.xyz/events/${hackathonId}`,
            )}
            target="_blank"
          >
            <XSvg className="w-[16px]"></XSvg>
            <span className="translate-y-0.5">Share your thoughts</span>
          </Link>

          <Tooltip title="Join the study group for help!" placement="top">
            <Link
              className="inline-flex items-center gap-[10px] text-[16px]"
              href="https://t.me/+jbhmyDZ63Vw0ZGYy"
              target="_blank"
            >
              <TelegramSvg className="w-[16px]" />
              <span className="translate-y-0.5">Get Help</span>
            </Link>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HackathonHeader;
