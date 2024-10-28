"use client";

import { SessionContext } from "@/app/events/ethcon-korea/config";
import { useState } from "react";

export default function EthconRootLayout({ children }) {
  const [sessions, setSessions] = useState();

  return (
    <SessionContext.Provider value={{ sessions, setSessions }}>
      <div className="h-screen w-screen">{children}</div>
    </SessionContext.Provider>
  );
}
