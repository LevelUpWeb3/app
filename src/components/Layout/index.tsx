"use client";

import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Header from "@/components/Header";
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
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ScrollThemeProvider>
        <RainbowProvider>
          <Header></Header>
          {children}
        </RainbowProvider>
      </ScrollThemeProvider>
    </CacheProvider>
  );
}
