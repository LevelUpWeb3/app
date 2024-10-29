import Link from "next/link";
import React from "react";
import { Box, Container, Stack } from "@mui/material";

import Logo from "@/components/ScrollLogo";
// import WalletToolkit from "@/components/WalletToolkit";
import useCheckViewport from "@/hooks/useCheckViewport";

import { useStyles } from "tss-react/mui";

import { navigations } from "./constants";
import useCheckTheme from "./useCheckTheme";

const DesktopHeader = ({ currentMenu }) => {
  const { isDesktop } = useCheckViewport();
  const dark = useCheckTheme();

  const { cx } = useStyles();

  const renderNavigationList = () => {
    return (
      <Stack
        direction="row"
        spacing={isDesktop ? "4rem" : "2rem"}
        justifyContent="space-between"
        alignItems="center"
      >
        {navigations.map((item) => (
          <Link
            key={item.key}
            className={cx(
              "relative whitespace-nowrap text-[16px] leading-[75px]",
              dark
                ? "text-[var(--mui-palette-primary-contrastText)]"
                : "text-[var(--mui-palette-text-primary)]",
              currentMenu === item.key && "text-stroke",
              currentMenu !== item.key && "text-stroke-with-hover",
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </Stack>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "58px",
      }}
    >
      <Link href="/">
        <Logo light={dark} />
      </Link>
      <Stack
        direction="row"
        spacing={isDesktop ? "4.4rem" : "2rem"}
        alignItems="center"
        flex="1"
      >
        <Box>{renderNavigationList()}</Box>
      </Stack>
      {/* Temporarily disabled in MVP */}
      {/* <WalletToolkit dark={dark}></WalletToolkit> */}
    </Container>
  );
};

export default DesktopHeader;
