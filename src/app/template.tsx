import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./global";

interface RootTemplateProps {
  children: React.ReactNode;
  offAnnouncement?: boolean;
}

/**
 * @notice The `offAnnouncement` prop controls the visibility of the AnnouncementBar.
 * @param {boolean} [offAnnouncement=true] - If true, the AnnouncementBar will be hidden.
 */
export default function RootTemplate({
  children,
  offAnnouncement = true,
}: RootTemplateProps) {
  return (
    <main className="level-up-body">
      <Header offAnnouncement={offAnnouncement} />
      {children}
      <Footer></Footer>
    </main>
  );
}
