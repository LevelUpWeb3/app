"use client";

// If you want to render the markdown in a left-right layout and include code
// blocks (markdown-code-blocks), please use this component to prevent the
// markdown code blocks from overlapping with the H2 headings.
//
// see example in src/app/content/[slug]/ContentViewer/index.tsx

import { Container } from "@mui/material";
import { useEffect, useRef } from "react";
import clsx from "clsx";

function checkIfCovered(formerEle, latterEle) {
  if (!latterEle) return;

  if (
    latterEle.tagName === "DIV" &&
    latterEle.children[0].className.includes("markdown-code-block")
  ) {
    const formerEleRect = formerEle.getBoundingClientRect();
    const formerY = formerEleRect.top + formerEle.scrollHeight;

    const latterEleRect = latterEle.getBoundingClientRect();
    const latterY = latterEleRect.top;

    // the top of markdown-code-block should not overlap with the bottom of h2
    const isOverlapping = formerY > latterY;
    if (isOverlapping) {
      // latterEle.className = "w-[50%] !pl-[0] !ml-[50%]";
      latterEle.children[0].classList.add("!w-[100%]", "!ml-0");
    }
  }
}

const CrossDetection = (props) => {
  const { children, className, sx } = props;

  const MarkdownViewerWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!MarkdownViewerWrapperRef.current) return;

    MarkdownViewerWrapperRef.current!.querySelectorAll("h2").forEach(
      (element) => {
        checkIfCovered(element, element.nextElementSibling);
        checkIfCovered(element, element.nextElementSibling?.nextElementSibling);
        checkIfCovered(
          element,
          element.nextElementSibling?.nextElementSibling?.nextElementSibling,
        );
      },
    );
  }, []);

  return (
    <Container
      className={clsx("markdown-level-up", className)}
      ref={MarkdownViewerWrapperRef}
      sx={sx}
    >
      {/* remove the warning https://github.com/mui/material-ui/issues/39928#issuecomment-1831183803 */}
      <>{children}</>
    </Container>
  );
};

export default CrossDetection;
