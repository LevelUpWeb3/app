"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LeftToRightButton from "./LeftToRight";
import RightToLeftButton from "./RightToLeft";

const PageButton = () => {
  const [pages, setPages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname!.split("/").pop();
    fetch(
      `https://raw.githubusercontent.com/LevelUpWeb3/app/main/public/data/challenges/solidity/${slug}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentPage(data);
      });

    fetch(
      `https://raw.githubusercontent.com/LevelUpWeb3/app/main/public/data/challenges/solidity/markdownData.json`
    )
      .then((res) => res.json())
      .then((data) => {
        setPages(data);
      });
  }, []);

  const nextPage =
    currentPage && pages.find((page) => page.index === currentPage.index + 1);
  const prevPage =
    currentPage && pages.find((page) => page.index === currentPage.index - 1);

  let nextTitle, nextSlug, prevTitle, prevSlug;
  if (nextPage) {
    nextTitle = nextPage.name;
    nextSlug = nextPage.name.replace(/\s|\//g, "-");
  }
  if (prevPage) {
    prevTitle = prevPage.name;
    prevSlug = prevPage.name.replace(/\s|\//g, "-");
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between gap-6 mt-2 mb-6">
        {prevPage && (
          <RightToLeftButton
            variant="outlined"
            className="group"
            href={`/solidity/${prevSlug.toLowerCase()}`}
          >
            {prevTitle}
          </RightToLeftButton>
        )}
        {nextPage ? (
          <LeftToRightButton
            variant="outlined"
            className="group ml-auto"
            href={`/solidity/${nextSlug.toLowerCase()}`}
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
