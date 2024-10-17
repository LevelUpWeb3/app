"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { AppBar, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import useCheckViewport from "@/hooks/useCheckViewport";

import { navigations } from "./constants";
import DesktopNav from "./DesktopHeader";
import MobileNav from "./MobileHeader";
import useMainBgColor from "@/hooks/useMainBgColor";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
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

export default function Header() {
  const { isPortrait } = useCheckViewport();
  const pathname = usePathname();
  useMainBgColor();

  const [currentMenu, setCurrentMenu] = useState("");

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
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{ boxShadow: "none", backgroundColor: "transparent" }}
      >
        {isPortrait ? (
          <MobileNav currentMenu={currentMenu} />
        ) : (
          <DesktopNav currentMenu={currentMenu} />
        )}
      </AppBar>
    </HideOnScroll>
  );
}
