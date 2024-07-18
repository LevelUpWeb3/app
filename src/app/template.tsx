"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import SiteTab from "@/components/SiteTab";

import "./global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routeName = usePathname();
  const isLandingPagePath = routeName === "/";

  return (
    <>
      {isLandingPagePath && <SiteTab />}
      <Header></Header>
      {children}
    </>
  );
}
