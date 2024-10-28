"use client";

import { AuthWrapper } from "@/app/events/ethcon-korea/components";

export default function ChallengeDetailPageLayout({ children }) {
  return (
    <AuthWrapper>
      <div className="flex h-screen items-center justify-center">
        {children}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"
        />
      </div>
    </AuthWrapper>
  );
}
