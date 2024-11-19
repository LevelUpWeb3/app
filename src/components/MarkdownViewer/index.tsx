"use client";

import { useEffect, useState } from "react";

import MarkdownLoading from "./MarkdownLoading";
import { MDXRemote } from "next-mdx-remote";

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
