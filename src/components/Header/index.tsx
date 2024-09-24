"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { NoSsr } from "@mui/base/NoSsr";

import { AppBar, Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import useCheckViewport from "@/hooks/useCheckViewport";

import { navigations } from "./constants";
import DesktopNav from "./desktop_header";
import MobileNav from "./mobile_header";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  position: "sticky",
  backgroundColor: "transparent",
  paddingRight: "0 !important",
  minHeight: "65px",
  [theme.breakpoints.up("md")]: {
    minHeight: "62px",
  },
}));

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
  const { isLandscape } = useCheckViewport();
  const pathname = usePathname();

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

  if (isLandscape) {
    return (
      <HideOnScroll>
        <AppBarStyled>
          <DesktopNav currentMenu={currentMenu} />
        </AppBarStyled>
      </HideOnScroll>
    );
  } else {
    return (
      <HideOnScroll>
        <AppBarStyled>
          <NoSsr>
            <MobileNav currentMenu={currentMenu} />
          </NoSsr>
        </AppBarStyled>
      </HideOnScroll>
    );
  }
}
