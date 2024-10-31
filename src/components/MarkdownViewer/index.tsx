"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import MarkdownLoading from "./MarkdownLoading";

const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  {
    ssr: false,
    loading: () => (
      <MarkdownLoading backgroundColor="rgba(135, 135, 135, 0.28)"></MarkdownLoading>
    ),
  },
);
const MarkdownViewer = (props) => {
  const { data, components, theme = "light" } = props;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <MarkdownLoading theme={theme}></MarkdownLoading>}
      {!isLoading && <MDXRemote {...data.content} components={components} />}
    </>
  );
};

export default MarkdownViewer;
