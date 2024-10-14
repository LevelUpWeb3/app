"use client";

import { EthconSectionHeader } from "@/app/events/ethcon-korea/components";

export default function EthconPageLayout({ children }) {
  return (
    <div className="mt-[-6.5rem]">
      <EthconSectionHeader />
      {children}
    </div>
  );
}
