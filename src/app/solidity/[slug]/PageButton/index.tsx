"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LeftToRightButton from "./LeftToRight";
import RightToLeftButton from "./RightToLeft";
import {
  NavigateNextRounded,
  NavigateBeforeRounded,
} from "@mui/icons-material";

const PageButton = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname!.split("/").pop();
    fetch(`/data/challenges/solidity/${slug}.json`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentPage(data);
      });

    fetch(`/data/challenges/solidity/markdownData.json`)
      .then((res) => res.json())
      .then((data) => {
        setPages(data);
      });
  }, []);

  const nextPage =
    currentPage && pages.find((page) => page.index === currentPage.index + 1);
  const nextTitle = nextPage ? nextPage.name : null;
  const nextSlug = nextPage ? nextPage.name.replace(/\s|\//g, "-") : null;

  const prevPage =
    currentPage && pages.find((page) => page.index === currentPage.index - 1);
  const prevTitle = prevPage ? prevPage.name : null;
  const prevSlug = prevPage ? prevPage.name.replace(/\s|\//g, "-") : null;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-6">
        {prevPage && (
          <RightToLeftButton
            variant="outlined"
            className="group"
            href={`/solidity/${prevSlug}`}
          >
            {prevTitle}
          </RightToLeftButton>
        )}
        {nextPage ? (
          <LeftToRightButton
            variant="outlined"
            className="group ml-auto"
            href={`/solidity/${nextSlug}`}
          >
            {nextTitle}
          </LeftToRightButton>
        ) : (
          <p className="mt-2 text-4xl italic">End of Challenges</p>
        )}
      </div>
    </div>
  );
};

export default PageButton;
