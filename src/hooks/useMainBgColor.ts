import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CUSTOM_BG_PAGE_MAP = {
  // "/": "#FFEEDA",
  "/solidity": "#BAF0F733",
  // "/content": "#fff",
  "/challenges": "#FFEEDA33",
  "/podcast": "#FFEEDA4D",
  "/events": "#E8F62833",
  "/profile": "#FFEEDA",
  "/vyper": "#FB57321A",
};

const useMainBgColor = () => {
  const pathname = usePathname();

  useEffect(() => {
    const matchingPath = Object.keys(CUSTOM_BG_PAGE_MAP).find((path) =>
      pathname?.startsWith(path),
    );

    const bgColor = matchingPath ? CUSTOM_BG_PAGE_MAP[matchingPath] : "#fff";
    document.documentElement.style.setProperty("--main-bg-color", bgColor);
  }, [pathname]);
};

export default useMainBgColor;
