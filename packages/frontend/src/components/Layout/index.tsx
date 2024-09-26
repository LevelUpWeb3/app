"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Header from "@/components/Header";
import SiteTab from "@/components/SiteTab";
import RainbowProvider from "@/contexts/RainbowProvider";
import ScrollThemeProvider from "@/theme";

import "./globals.css";
import createEmotionCache from "@emotion/cache";
const clientSideEmotionCache = createEmotionCache({
  key: "css",
});
import { CacheProvider } from "@emotion/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeName = usePathname();
  const isLandingPagePath = routeName === "/";

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ScrollThemeProvider>
        <RainbowProvider>
          {/* TODO: Reveal SiteTab when announcement is needed
          {isLandingPagePath && <SiteTab />} */}
          <Header></Header>
          {children}
        </RainbowProvider>
      </ScrollThemeProvider>
    </CacheProvider>
  );
}
