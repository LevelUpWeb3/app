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

const MobileHeader = () => {
  const pathname = usePathname();
  const dark = useCheckTheme();
  const [open, setOpen] = useState(false);

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
        height: "calc(100vh - 64px - 92px)",
        overflowY: "auto",
      }}
      component="nav"
    >
      {navigations.map((item) => (
        <ListItem
          key={item.key}
          sx={{
            height: "92px",
            borderBottom: "1.5px solid #101010",
            p: "8px 20px",
            "&.active": { backgroundColor: "#fff" },
          }}
          className={pathname === item.href ? "active" : ""}
          onClick={() => toggleDrawer(false)}
        >
          <Link href={item.href} className="flex w-full justify-between">
            <Typography sx={{ fontSize: "32px" }}>{item.label}</Typography>
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
          px="20px"
          sx={{
            borderTop: open ? "1.5px solid #101010" : "unset",
            borderBottom: open ? "1.5px solid #101010" : "unset",
          }}
        >
          <Link href="/">
            <Logo light={dark} />
          </Link>
          <MenuTrigger
            isOpen={open}
            onClick={() => toggleDrawer(!open)}
          ></MenuTrigger>

          {/* TODO: hidden temporarily */}
          {/* <WalletToolkit dark={dark}></WalletToolkit> */}
        </Stack>
        {open && (
          <Box
            sx={{
              height: "calc(100vh - 64px)",
            }}
          >
            <Box role="presentation" onKeyDown={() => toggleDrawer(false)}>
              {renderList()}
              <Stack
                spacing="35px"
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ pr: "20px", height: "92px" }}
              >
                <Link href="https://x.com/levelupweb3" target="_blank">
                  <SvgIcon
                    sx={{
                      fontSize: "22px",
                    }}
                    inheritViewBox
                    component={XLogoIcon}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@levelupinweb3"
                  target="_blank"
                >
                  <SvgIcon
                    sx={{
                      fontSize: "22px",
                    }}
                    inheritViewBox
                    component={YoutubeIcon}
                  />
                </Link>
                <Link href="https://t.me/+PdNbk5milo1mMTAy" target="_blank">
                  <SvgIcon
                    sx={{
                      fontSize: "22px",
                    }}
                    inheritViewBox
                    component={TelegramIcon}
                  />
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
