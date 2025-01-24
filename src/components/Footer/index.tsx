import Link from "next/link";

import { Stack, Container, Typography, Box } from "@mui/material";

import XLogoIcon from "@/assets/svgs/socials/x.svg";
import YoutubeIcon from "@/assets/svgs/socials/youtube.svg";
import TelegramIcon from "@/assets/svgs/socials/telegram.svg";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      sx={{
        py: ["30px", "60px"],
      }}
    >
      <Container>
        <Stack
          direction={["column", "column", "row-reverse"]}
          justifyContent="space-between"
        >
          <Stack
            gap={["35px", "60px"]}
            direction="row"
            alignItems="center"
            className="mb-[20px] md:mb-0"
          >
            <Link href="https://x.com/levelupweb3" target="_blank">
              <XLogoIcon></XLogoIcon>
            </Link>
            <Link href="https://www.youtube.com/@levelupinweb3" target="_blank">
              <YoutubeIcon></YoutubeIcon>
            </Link>
            <Link href="https://t.me/+jbhmyDZ63Vw0ZGYy" target="_blank">
              <TelegramIcon></TelegramIcon>
            </Link>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: [
                "max-content 1fr",
                "repeat(3, max-content)",
              ],
              alignItems: "center",
              columnGap: ["15px", "30px"],
              rowGap: ["5px", "30px"],
              fontSize: ["12px", "15px"],
            }}
            className="text-[12px] font-medium sm:text-[15px]"
          >
            <Typography
              sx={{
                fontSize: ["12px", "15px"],
                gridColumn: ["span 2", "span 1"],
              }}
            >
              © {year} Scroll Foundation | All rights reserved
            </Typography>
            <Link
              href="https://scroll.io/terms-of-service"
              className="leading-tight"
            >
              Terms of Use
            </Link>
            <Link
              href="https://scroll.io/privacy-policy"
              className="leading-tight"
            >
              Privacy Policy
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
