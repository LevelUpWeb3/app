import { default as NavLink } from "next/link";
import React, { useEffect, useState } from "react";

import { Box, List, ListItemButton, Stack } from "@mui/material";
import { styled } from "@mui/system";

import WalletToolkit from "@/components/WalletToolkit";
import useShowWalletConnector from "@/hooks/useShowWalletToolkit";

import Logo from "../ScrollLogo";
import { navigations } from "./constants";
import useCheckCustomNavBarBg from "./useCheckCustomNavBarBg";
import useCheckTheme from "./useCheckTheme";

const NavStack = styled(Stack)(() => ({
  height: "3rem",
  lineHeight: "3rem",
  margin: "1.6rem",
}));

const Menu = styled("div")(() => ({
  display: "inline-block",
  [`&.active ${Bar}:nth-of-type(1)`]: {
    transform: "rotate(45deg) translate(5px, 5px)",
  },
  [`&.active ${Bar}:nth-of-type(2)`]: {
    opacity: 0,
  },
  [`&.active ${Bar}:nth-of-type(3)`]: {
    transform: "rotate(-45deg) translate(5px, -5px)",
  },
}));

const Bar = styled<any>("div", {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  width: "2rem",
  height: ".2rem",
  backgroundColor: dark
    ? (theme as any).vars.palette.primary.contrastText
    : (theme as any).vars.palette.text.primary,
  margin: " 5px 0",
  transition: "0.4s",
}));

const MenuContent = styled<any>(Box, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  margin: "0.5rem 1.6rem 0",
  background: dark
    ? (theme as any).vars.palette.themeBackground.dark
    : (theme as any).vars.palette.themeBackground.light,
}));

const ListItem = styled<any>(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  height: "5.5rem",
  lineHeight: "5.5rem",
  color: dark
    ? (theme as any).vars.palette.primary.contrastText
    : (theme as any).vars.palette.text.primary,
  margin: "0",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 !important",
  "&.active": {},
  "&:hover": {
    background: "transparent",
  },
  "&:not(:first-of-type)": {
    borderTop: `1px solid ${dark ? (theme as any).vars.palette.primary.contrastText : (theme as any).vars.palette.text.primary}`,
  },
}));

const MenuLinkStyledButton = styled<any>(NavLink, {
  shouldForwardProp: (prop) => prop !== "dark",
})(({ theme, dark }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  height: "5.5rem",
  lineHeight: "5.5rem",
  color: dark
    ? (theme as any).vars.palette.primary.contrastText
    : (theme as any).vars.palette.text.primary,
  width: "100%",
  "&.active": {
    color: dark
      ? (theme as any).vars.palette.primary.contrastText
      : (theme as any).vars.palette.text.primary,
  },
}));

const App = ({ currentMenu }) => {
  const navbarBg = useCheckCustomNavBarBg();
  const showWalletConnector = useShowWalletConnector();

  const dark = useCheckTheme();
  const [open, setOpen] = useState(false);
  const [activeCollapse, setActiveCollapse] = useState("");

  useEffect(() => {
    setActiveCollapse(currentMenu);
  }, [currentMenu]);

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
    if (isOpen) {
      window.document.body.classList.add("mobile-top-nav-open");
    } else {
      window.document.body.classList.remove("mobile-top-nav-open");
      setActiveCollapse(currentMenu);
    }
  };

  const renderList = () => (
    <List
      sx={{
        padding: "0",
        fontSize: "16px",
      }}
      component="nav"
    >
      {navigations.map((item) => (
        <React.Fragment key={item.key}>
          <ListItem
            dark={dark}
            className={activeCollapse === item.key ? "active" : ""}
            sx={{ py: "1rem" }}
            onClick={() => toggleDrawer(false)}
          >
            <MenuLinkStyledButton href={item.href} dark={dark}>
              {item.label}
            </MenuLinkStyledButton>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box
      className={open ? "active" : ""}
      // sx={{ backgroundColor: navbarBg && !open ? `themeBackground.${navbarBg}` : dark ? "themeBackground.dark" : "themeBackground.light" }}
    >
      <NavStack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <NavLink href="/" className="flex">
          <Box onClick={() => toggleDrawer(false)}>
            <Logo light={dark} />
          </Box>
        </NavLink>
        <Stack direction="row" spacing="1.6rem" alignItems="center">
          {showWalletConnector && <WalletToolkit dark={dark}></WalletToolkit>}
          <Menu
            onClick={() => toggleDrawer(!open)}
            className={open ? "active" : ""}
          >
            <Bar dark={dark}></Bar>
            <Bar dark={dark}></Bar>
            <Bar dark={dark}></Bar>
          </Menu>
        </Stack>
      </NavStack>
      {open && (
        <Box
          sx={{
            background: (theme) =>
              dark
                ? (theme as any).vars.palette.themeBackground.dark
                : (theme as any).vars.palette.themeBackground.light,
            paddingTop: "5rem",
            height: "calc(100vh - 6.2rem)",
            overflowY: "auto",
          }}
        >
          <MenuContent
            role="presentation"
            dark={dark}
            onKeyDown={() => toggleDrawer(false)}
          >
            {renderList()}
          </MenuContent>
        </Box>
      )}
    </Box>
  );
};

export default App;
