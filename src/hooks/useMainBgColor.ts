import { usePathname } from "next/navigation";
import { useEffect } from "react";

const CUSTOM_BG_PAGE_MAP = {
  "/": "#FFEEDA33",
  "/solidity": "#BAF0F733",
  // "/content": "#fff",
  "/challenges": "#FFEEDA33",
  "/podcast": "#FFEEDA4D",
  "/hackathons": "#E8F62833",
};

const useMainBgColor = () => {
  const pathname = usePathname();

  useEffect(() => {
    const bgColor = CUSTOM_BG_PAGE_MAP[pathname] || "#fff";
    document.documentElement.style.setProperty("--main-bg-color", bgColor);
  }, [pathname]);
};

export default useMainBgColor;
