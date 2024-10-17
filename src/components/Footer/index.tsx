"use client";

import Link from "next/link";

import { SvgIcon, Stack, Container, Typography, Box } from "@mui/material";

import XLogoIcon from "@/assets/svgs/socials/x.svg";
import YoutubeIcon from "@/assets/svgs/socials/youtube.svg";
import TelegramIcon from "@/assets/svgs/socials/telegram.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        pb: ["84px", "60px"],
        pt: ["30px", "60px"],
      }}
    >
      <Container>
        <Stack
          direction={["column", "row-reverse"]}
          justifyContent="space-between"
        >
          <Stack gap="35px" direction="row" className="mb-[20px] sm:mb-0">
            <Link href="https://x.com/levelupweb3" target="_blank">
              <SvgIcon
                sx={{
                  fontSize: "18px",
                }}
                inheritViewBox
                component={XLogoIcon}
              />
            </Link>
            <Link href="https://www.youtube.com/@levelupinweb3" target="_blank">
              <SvgIcon
                sx={{
                  fontSize: "18px",
                }}
                inheritViewBox
                component={YoutubeIcon}
              />
            </Link>
            <Link href="https://t.me/+PdNbk5milo1mMTAy" target="_blank">
              <SvgIcon
                sx={{
                  fontSize: "18px",
                }}
                inheritViewBox
                component={TelegramIcon}
              />
            </Link>
          </Stack>
          <Box
            sx={[
              {
                display: "grid",
                gridTemplateColumns: "repeat(3, max-content)",
                gap: "30px",
                fontSize: ["12px", "15px"],
              },
              (theme) => ({
                [theme.breakpoints.down("sm")]: {
                  gridTemplateColumns: "max-content 1fr",
                  columnGap: "15px",
                  rowGap: "5px",
                },
              }),
            ]}
            className="text-[12px] font-medium sm:text-[15px]"
          >
            <Typography
              sx={{
                fontSize: ["12px", "15px"],
                gridColumn: ["span 2", "span 1"],
              }}
            >
              © 2024 Scroll Foundation | All rights reserved
            </Typography>
            <Link href="">Terms of Use</Link>
            <Link href="">Privacy Policy</Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
