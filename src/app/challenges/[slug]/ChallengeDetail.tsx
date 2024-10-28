import { Box, Chip, Stack, Typography } from "@mui/material";

import Button from "@/components/Button";
import Tooltip from "@/components/EditorTooltip";

import Link from "next/link";

import XSvg from "@/assets/svgs/socials/x.svg";
import TelegramSvg from "@/assets/svgs/socials/telegram.svg";

const ChallengeDetail = (props) => {
  const { challengeData, ...restProps } = props;
  const text = `I am excited to take on the ${challengeData.name} challenge in Level Up! Join me and let's level up together at levelup.xyz/!`;

  const combinedLabels = [
    ...(challengeData.labels || []),
    ...(challengeData.level ? [`Level ${challengeData.level}`] : []),
  ];

  return (
    <Box {...restProps}>
      <Stack direction="column" spacing="10px" sx={{ width: "50%" }}>
        <Stack direction="row" spacing="8px">
          {combinedLabels.map((label) => (
            <Chip
              sx={{
                backgroundColor: "themeBackground.brand",
                borderRadius: "6px",
                p: "5px 10px",
                height: "28px",
                [`.MuiChip-label`]: {
                  fontSize: ["14px"],
                  fontWeight: 500,
                  p: 0,
                },
              }}
              key={label}
              label={label}
            ></Chip>
          ))}
        </Stack>
        <Typography sx={{ fontSize: "48px", pt: "0.3em" }}>
          {challengeData.name}
        </Typography>
        <Typography sx={{ fontSize: "24px" }}>
          {challengeData.summary}
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mt: "30px" }} justifyContent="space-between">
        <Button href={challengeData.website}>Go to Github</Button>
        <Stack direction="row" spacing="30px" alignItems="flex-end">
          <Link
            className="inline-flex items-center gap-[10px] text-[16px]"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
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

export default ChallengeDetail;
