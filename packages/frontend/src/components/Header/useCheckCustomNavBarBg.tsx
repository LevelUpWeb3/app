import { usePathname } from "next/navigation";
import { useMemo } from "react";

import useScrollTrigger from "@mui/material/useScrollTrigger";

const TRANSPARENT_BG_PAGE_LIST = ["/story"];
// themeBackground
const CUSTOM_BG_PAGE_MAP = {
  "/brand-kit": "brand",
  "/join-us": "normal",
  "/sticker-vote": "brand",
  "/sticker-winners": "brand",
};

const useCheckCustomNavBarBg = () => {
  const isScrolling = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  const pathname = usePathname();
  const isNoBgPage = useMemo(
    () => TRANSPARENT_BG_PAGE_LIST.includes(pathname!),
    [pathname]
  );

  const navbarBg = useMemo(() => {
    if (isNoBgPage) {
      return isScrolling ? "" : "transparent";
    }
    return CUSTOM_BG_PAGE_MAP[pathname!] || "";
  }, [isNoBgPage, isScrolling, pathname]);

  return navbarBg;
};

export default useCheckCustomNavBarBg;
