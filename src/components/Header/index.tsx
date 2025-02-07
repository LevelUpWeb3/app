"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { AppBar, Slide, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import AnnouncementBar from "@/components/AnnouncementBar";
import StarSvg from "@/assets/svgs/events/star.svg";

import useCheckViewport from "@/hooks/useCheckViewport";

import { navigations } from "./constants";
import DesktopNav from "./DesktopHeader";
import MobileNav from "./MobileHeader";
import useMainBgColor from "@/hooks/useMainBgColor";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

interface HeaderProps {
  announcementVisible?: boolean;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header({ announcementVisible }: HeaderProps) {
  const { isPortrait } = useCheckViewport();
  const pathname = usePathname();
  useMainBgColor();

  const [currentMenu, setCurrentMenu] = useState("");

  const isHome = pathname === "/";

  useEffect(() => {
    const rootMenu = findRootMenu(pathname, navigations);
    setCurrentMenu(rootMenu ?? "");
  }, [pathname]);

  const findRootMenu = (pathname, menuList: Array<any>) => {
    for (const menuItem of menuList) {
      if (menuItem.href && pathname.includes(menuItem.href)) {
        return menuItem.rootKey || menuItem.key;
      } else if (menuItem.children) {
        const key = findRootMenu(pathname, menuItem.children);
        if (key) {
          return key;
        }
      }
    }
    return null;
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="sticky"
          sx={{ boxShadow: "none", backgroundColor: "transparent" }}
        >
          {isHome && (
            <AnnouncementBar
              autoFill
              pauseOnHover
              announcementVisible={announcementVisible}
            >
              <Stack
                direction="row"
                spacing="20px"
                mr="20px"
                alignItems="center"
              >
                <p>Jan 27 - March 17</p>
                <StarSvg className="!mt-[-4px]"></StarSvg>
                <Link
                  href="https://open.scroll.io"
                  className="font-medium"
                  target="_blank"
                >
                  Join Scroll Open: Build the Future of the Open Economy
                </Link>
              </Stack>
            </AnnouncementBar>
          )}

          {isPortrait ? (
            <MobileNav />
          ) : (
            <DesktopNav currentMenu={currentMenu} />
          )}
        </AppBar>
      </HideOnScroll>
    </>
  );
}
