import React from "react";

import Header from "@/components/Header";
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
    <main className="level-up-body">
      {/* TODO: Reveal SiteTab when announcement is needed
      {isLandingPagePath && <SiteTab />} */}
      <Header></Header>
      {children}
      <Footer></Footer>
    </main>
  );
}
