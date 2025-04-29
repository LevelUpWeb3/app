import Link from "next/link";
import BackLink from "@/components/Back";
import LeftArrowSvg from "@/assets/svgs/solidity/left-arrow.svg";
import RightArrowSvg from "@/assets/svgs/solidity/right-arrow.svg";

import LeftArrowMobileSvg from "@/assets/svgs/solidity/left-arrow-mobile.svg";
import RightArrowMobileSvg from "@/assets/svgs/solidity/right-arrow-mobile.svg";

import NavigationWrapper from "./NavigationWrapper";

interface NavigationProps {
  id: string;
  data: NavigationItem[];
  baseURL: string;
  label: string;
}

interface NavigationItem {
  id: string;
  name: string;
}

interface Pagination {
  prev: NavigationItem | null;
  next: NavigationItem | null;
}

const navLinkStyle =
  "flex items-center gap-[15px] text-[16px] text-[#101010] hover:text-[#2C2C2C] sm:gap-[20px] md:text-[32px]";

const Navigation = (props: NavigationProps) => {
  const { id, data, baseURL, label } = props;

  const pagination: Pagination = { prev: null, next: null };

  const currentIndex = data.findIndex((item) => item.id === id);

  if (currentIndex > 0) {
    pagination.prev = data[currentIndex - 1];
  }
  if (currentIndex < data.length - 1) {
    pagination.next = data[currentIndex + 1];
  }

  return (
    <NavigationWrapper>
      {pagination.prev ? (
        <Link
          className={navLinkStyle}
          href={`${baseURL}/${pagination.prev.id}`}
        >
          <LeftArrowSvg className="hidden md:inline-flex"></LeftArrowSvg>
          <LeftArrowMobileSvg className="md:hidden"></LeftArrowMobileSvg>
          <span>
            Back to:{<br className="sm:hidden"></br>} {pagination.prev.name}
          </span>
        </Link>
      ) : (
        <Link className={navLinkStyle} href="./">
          <LeftArrowSvg className="hidden md:inline-flex"></LeftArrowSvg>
          <LeftArrowMobileSvg className="md:hidden"></LeftArrowMobileSvg>
          <span>Back</span>
        </Link>
      )}
      {pagination.next ? (
        <Link
          className={navLinkStyle}
          href={`${baseURL}/${pagination.next.id}`}
        >
          <span>
            Next {label}:{<br className="sm:hidden"></br>}{" "}
            {pagination.next.name}
          </span>
          <RightArrowSvg className="hidden md:inline-flex"></RightArrowSvg>
          <RightArrowMobileSvg className="md:hidden"></RightArrowMobileSvg>
        </Link>
      ) : (
        <span className="text-[16px] md:text-[32px]">End of {label}s</span>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
