import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./global";

interface RootTemplateProps {
  children: React.ReactNode;
  announcementVisible?: boolean;
}

/**
 * @notice The `announcementVisible` prop controls the visibility of the AnnouncementBar.
 * @param {boolean} [announcementVisible=false] - If false, the AnnouncementBar will be hidden.
 */
export default function RootTemplate({
  children,
  announcementVisible = false,
}: RootTemplateProps) {
  return (
    <main className="level-up-body">
      <Header announcementVisible={announcementVisible} />
      {children}
      <Footer></Footer>
    </main>
  );
}
