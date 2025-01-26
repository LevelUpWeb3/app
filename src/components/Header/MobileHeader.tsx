import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

import { Box, List, ListItem, Stack, SvgIcon, Typography } from "@mui/material";

// import WalletToolkit from "@/components/WalletToolkit";

import Logo from "../ScrollLogo";
import { navigations } from "./constants";
import useCheckTheme from "./useCheckTheme";

import XLogoIcon from "@/assets/svgs/socials/x.svg";
import YoutubeIcon from "@/assets/svgs/socials/youtube.svg";
import TelegramIcon from "@/assets/svgs/socials/telegram.svg";
import RightArrow from "@/assets/svgs/header/arrow.svg";
import MenuTrigger from "./MenuTrigger";
import { MOBILE_LAYOUT_HEADER_HEIGHT } from "@/constants";

const MobileHeader = () => {
  const pathname = usePathname();
  const dark = useCheckTheme();
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
      window.document.body.classList.add("mobile-top-nav-open");
    } else {
      window.document.body.classList.remove("mobile-top-nav-open");
    }
  };

  const renderList = () => (
    <List
      sx={{
        padding: 0,
        fontSize: "16px",
        height: `calc(${window.visualViewport?.height ?? window.innerHeight}px - ${MOBILE_LAYOUT_HEADER_HEIGHT} - ${isHome ? "60px" : "0px"} - 92px)`,
        overflowY: "auto",
      }}
      component="nav"
    >
      {navigations.map((item, index) => (
        <ListItem
          key={item.key}
          sx={{
            height: "92px",
            borderTop: !index ? "1.5px solid #101010" : "unset",
            borderBottom: "1.5px solid #101010",
            p: ["8px 20px", "8px 40px"],
            "&.active": { backgroundColor: "#fff" },
          }}
          className={pathname!.includes(item.key) ? "active" : ""}
          onClick={() => toggleDrawer(false)}
        >
          <Link href={item.href} className="flex w-full justify-between">
            <Typography
              sx={{ fontSize: "32px", transform: "translateY(0.125em)" }}
            >
              {item.label}
            </Typography>
            <SvgIcon
              sx={{ fontSize: "18px", height: "auto" }}
              component={RightArrow}
              inheritViewBox
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ backgroundColor: open ? "background.default" : "transparent" }}>
      <Box sx={{ backgroundColor: open ? "#E8F62833" : "transparent" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="25px"
          height="64px"
          px={["20px", "40px"]}
        >
          <Link href="/">
            <Logo light={dark} />
          </Link>
          <MenuTrigger
            sx={{ mr: "-8px" }}
            isOpen={open}
            onClick={() => toggleDrawer(!open)}
          ></MenuTrigger>

          {/* TODO: hidden temporarily */}
          {/* <WalletToolkit dark={dark}></WalletToolkit> */}
        </Stack>
        {open && (
          <Box
            sx={{
              height: `calc(${window.visualViewport?.height ?? window.innerHeight}px - ${MOBILE_LAYOUT_HEADER_HEIGHT} - ${isHome ? "60px" : "0px"})`,
            }}
          >
            <Box role="presentation" onKeyDown={() => toggleDrawer(false)}>
              {renderList()}
              <Stack
                spacing="35px"
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ pr: ["20px", "40px"], height: "92px" }}
              >
                <Link href="https://x.com/levelupweb3" target="_blank">
                  <XLogoIcon className="h-auto w-[20px]"></XLogoIcon>
                </Link>
                <Link
                  href="https://www.youtube.com/@levelupinweb3"
                  target="_blank"
                >
                  <YoutubeIcon className="h-auto w-[21px]"></YoutubeIcon>
                </Link>
                <Link href="https://t.me/+jbhmyDZ63Vw0ZGYy" target="_blank">
                  <TelegramIcon className="h-auto w-[24px]"></TelegramIcon>
                </Link>
              </Stack>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MobileHeader;
