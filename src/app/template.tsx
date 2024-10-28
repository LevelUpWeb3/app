// "use client";

import React from "react";

// import { usePathname } from "next/navigation";

import Header from "@/components/Header";
// import SiteTab from "@/components/SiteTab";
import Footer from "@/components/Footer";

import "./global";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // const routeName = usePathname();
  // const isLandingPagePath = routeName === "/";

  return (
    <>
      {/* TODO: Reveal SiteTab when announcement is needed
      {isLandingPagePath && <SiteTab />} */}
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
