import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./global";

interface RootTemplateProps {
  children: React.ReactNode;
  offAnnouncement?: boolean;
}

export default function RootTemplate({
  children,
  offAnnouncement = true,
}: RootTemplateProps) {
  // const routeName = usePathname();
  // const isLandingPagePath = routeName === "/";

  return (
    <main className="level-up-body">
      {/* TODO: Reveal SiteTab when announcement is needed
      {isLandingPagePath && <SiteTab />} */}
      <Header offAnnouncement={offAnnouncement} />
      {children}
      <Footer></Footer>
    </main>
  );
}
