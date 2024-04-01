"use client";

import React from "react";

import Header from "@/components/Header";

import "./global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
}
