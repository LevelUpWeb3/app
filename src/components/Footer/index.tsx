"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NoSsr } from "@mui/base/NoSsr";

import {
  AppBar,
  SvgIcon,
  Stack,
  Container,
  Typography,
  Box,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import XLogoIcon from "@/assets/svgs/socials/x.svg";
import YoutubeIcon from "@/assets/svgs/socials/youtube.svg";
import TelegramIcon from "@/assets/svgs/socials/telegram.svg";

export default function Footer() {
  return (
    <Box
      sx={{
        pb: ["80px", "60px"],
        pt: ["30px", "60px"],
      }}
    >
      <Container>
        <Stack
          direction={["column", "row-reverse"]}
          justifyContent="space-between"
        >
          <Stack gap={["35px"]} direction="row" className="mb-[20px]">
            <SvgIcon
              sx={{
                fontSize: "16px",
                height: "auto",
                verticalAlign: "middle",
              }}
              inheritViewBox
              component={XLogoIcon}
            />
            <SvgIcon
              sx={{
                fontSize: "16px",
                height: "auto",
                verticalAlign: "middle",
              }}
              inheritViewBox
              component={YoutubeIcon}
            />
            <SvgIcon
              sx={{
                fontSize: "16px",
                height: "auto",
                verticalAlign: "middle",
              }}
              inheritViewBox
              component={TelegramIcon}
            />
          </Stack>
          <Stack
            sx={{
              mb: ["5px"],
              fontSize: ["12px", "15px"],
            }}
            direction={["column", "row"]}
            gap={["30px"]}
          >
            <Typography
              sx={{
                fontSize: ["12px", "15px"],
              }}
            >
              © 2024 Scroll Foundation | All rights reserved
            </Typography>
            <Stack className="font-medium" direction="row" gap={["15px"]}>
              <a>Terms of Use</a>
              <a>Privacy Policy</a>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
