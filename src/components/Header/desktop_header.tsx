import { default as NavLink } from "next/link";
import React, { useState } from "react";
import { useStyles } from "tss-react/mui";

import {
  Box,
  Container,
  Fade,
  Link,
  Popper,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import TriangleDownSvg from "@/assets/svgs/common/header-triangle-down.svg";
import Logo from "@/components/ScrollLogo";
import WalletToolkit from "@/components/WalletToolkit";
import useCheckViewport from "@/hooks/useCheckViewport";

import { navigations } from "./constants";
import useCheckCustomNavBarBg from "./useCheckCustomNavBarBg";
import useCheckTheme from "./useCheckTheme";

const StyledBox = styled<any>(Stack, {
  shouldForwardProp: (prop) => prop !== "dark" && prop !== "bgColor",
})(({ theme, bgColor, dark }) => ({
  position: "sticky",
  top: 0,
  width: "100%",
  zIndex: 10,
  backgroundColor: "transparent",
}));

const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "60px",
}));

const MenuLinkButton = styled<any>(Link, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  fontSize: "1.6rem",
  fontWeight: 400,
  paddingLeft: "25px",
  paddingRight: "25px",
  marginLeft: "4px",
  marginRight: "4px",
  lineHeight: "65px",
  position: "relative",
  color: dark
    ? (theme as any).vars.palette.primary.contrastText
    : (theme as any).vars.palette.text.primary,
  "&:hover": {
    fontWeight: 500,
  },
}));

const LinkStyledButton = styled<any>(NavLink, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  fontSize: "1.6rem",
  fontWeight: 400,
  marginLeft: "0.5rem",
  marginRight: "0.5rem",
  lineHeight: "65px",
  position: "relative",
  color: dark
    ? (theme as any).vars.palette.primary.contrastText
    : (theme as any).vars.palette.text.primary,
  whiteSpace: "nowrap",
  "&:hover": {
    fontWeight: 500,
  },
  "&.active": {
    fontWeight: 600,
  },
}));

const App = ({ currentMenu }) => {
  const navbarBg = useCheckCustomNavBarBg();
  const { isDesktop } = useCheckViewport();
  const dark = useCheckTheme();

  const renderNavigationItem = (item) => {
    if (item.isExternal) {
      return (
        <MenuLinkButton
          underline="none"
          href={item.href}
          key={item.key}
          dark={dark}
        >
          {item.label}
        </MenuLinkButton>
      );
    } else {
      return (
        <LinkStyledButton
          className={currentMenu === item.key ? "active" : ""}
          dark={dark}
          href={item.href}
          end={item.end}
          key={item.key}
        >
          {item.label}
        </LinkStyledButton>
      );
    }
  };

  const renderNavigationList = () => {
    return (
      <Stack
        direction="row"
        spacing={isDesktop ? "4.4rem" : "2rem"}
        justifyContent="space-between"
        alignItems="center"
      >
        {navigations.map((item) => (
          <React.Fragment key={item.key}>
            {renderNavigationItem(item)}
          </React.Fragment>
        ))}
      </Stack>
    );
  };

  return (
    <StyledBox bgColor={navbarBg} dark={dark}>
      <Container>
        <HeaderContainer>
          {/* Fixed NavLink to redirect to home page */}
          <NavLink href="/" className="flex">
            <Logo light={dark} />
          </NavLink>
          <Stack
            direction="row"
            spacing={isDesktop ? "4.4rem" : "2rem"}
            alignItems="center"
            flex="1"
          >
            <Box>{renderNavigationList()}</Box>
          </Stack>
          {/* TODO: Box created to temporarily create placeholder space. Needs to be removed */}
          {/* <Box sx={{ padding: "3.0rem" }}></Box> */}
          {/* Temporarily disabled in MVP */}
          <WalletToolkit dark={dark}></WalletToolkit>
        </HeaderContainer>
      </Container>
    </StyledBox>
  );
};

export default App;
