import type { Metadata } from "next";
import { headers } from "next/headers";
import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// import ScrollToTop from "@/components/ScrollToTop"
import { DEFAULT_METADATA } from "@/constants/route";
import RainbowProvider from "@/contexts/RainbowProvider";
import ScrollThemeProvider from "@/theme";
import { findCurrentRoute } from "@/utils/route";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
// import ScrollToTop from "@/components/ScrollToTop";

export async function generateMetadata(): Promise<Metadata> {
  const { pathname, origin } = new URL(headers().get("x-url")!);
  const route = findCurrentRoute(pathname);
  const title = `Level Up${route ? " – " + route.name : null}`;
  const description = route.description || DEFAULT_METADATA.description;
  const ogImg = route.ogImg || DEFAULT_METADATA.ogImg;
  const twitterImg =
    route.twitterImg || route.ogImg || DEFAULT_METADATA.twitterImg;

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "layer 2",
      "ethereum",
      "zero knowledge proof",
      "scalability",
      "ZKP",
      "l2",
      "EVM compatible",
      "zk rollup",
    ],
    openGraph: {
      title,
      description,
      siteName: title,
      url: pathname,
      images: [ogImg],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [twitterImg],
    },
    icons: {
      apple: "/logo.png",
    },
    // See https://developers.google.com/web/fundamentals/web-app-manifest/
    manifest: "/manifest.json",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* TODO: only on blog detail page */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics gaId="G-7SCKT33C0W" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ScrollThemeProvider>
            <RainbowProvider>
              {children}
              {/* <ScrollToTop></ScrollToTop> */}
              <Analytics />
            </RainbowProvider>
          </ScrollThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
