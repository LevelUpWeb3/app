import { SvgIcon } from "@mui/material";

import ScrollLogoIcon from "@/assets/svgs/common/scroll-logo.svg";
import ScrollLogoMobileIcon from "@/assets/svgs/common/scroll-logo-m.svg";
import useCheckViewport from "@/hooks/useCheckViewport";

const ScrollLogo = (props) => {
  const { light, ...restProps } = props;
  const { isMobile } = useCheckViewport();

  return (
    <SvgIcon
      sx={{
        fontSize: ["26px", "102px"],
        height: "auto",
      }}
      component={isMobile ? ScrollLogoMobileIcon : ScrollLogoIcon}
      inheritViewBox
      {...restProps}
    ></SvgIcon>
  );
};

export default ScrollLogo;
