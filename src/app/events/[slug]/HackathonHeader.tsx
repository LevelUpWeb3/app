import { Box, Chip, Stack, Typography } from "@mui/material";

import Button from "@/components/Button";
import Tooltip from "@/components/EditorTooltip";
import Link from "next/link";

import XSvg from "@/assets/svgs/socials/x.svg";
import TelegramSvg from "@/assets/svgs/socials/telegram.svg";
import StarSvg from "@/assets/svgs/hackathon/star.svg";

import { generateShareTwitterURL } from "@/utils";

const HackathonHeader = (props) => {
  const { name, hackathonId, date, location } = props;

  const registrationLink = `/hackathon/${hackathonId}/register`;

  const text = `Exciting news! \n 🚀 ${name} event is happening now! Join the event from levelup.xyz/events, and let's level up together! 🔥`;

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing="8px"
        sx={{
          width: "50%",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
        }}
      >
        <p sx={{ fontSize: "48px" }}>{date}</p>
        <StarSvg className="!mt-[-4px]"></StarSvg>
        <p sx={{ fontSize: "24px" }}>{location}</p>
      </Stack>
      <Typography sx={{ fontSize: "48px", mt: "10px", width: "50%" }}>
        {name}
      </Typography>

      <Stack direction="row" sx={{ mt: "30px" }} justifyContent="space-between">
        <Button href={registrationLink}>Register Now</Button>
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
            <span>Share your thoughts</span>
          </Link>

          <Tooltip title="Join the study group for help!" placement="top">
            <Link
              className="inline-flex items-center gap-[10px] text-[16px]"
              href="https://t.me/+PdNbk5milo1mMTAy"
              target="_blank"
            >
              <TelegramSvg className="w-[16px]" />
              <span>Get Help</span>
            </Link>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HackathonHeader;
