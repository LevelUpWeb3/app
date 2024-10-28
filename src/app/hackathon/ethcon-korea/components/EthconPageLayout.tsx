"use client";

import { EthconSectionHeader } from "@/app/events/ethcon-korea/components";
import Wrapper from "@/components/Wrapper";

export default function EthconPageLayout({ children }) {
  return (
    <div className="mt-[-6.5rem]">
      <EthconSectionHeader />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
