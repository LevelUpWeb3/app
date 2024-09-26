import { SvgIcon } from "@mui/material";

import ScrollLogoIcon from "@/assets/svgs/common/scroll-logo.svg";

const ScrollLogo = (props) => {
  const { light, ...restProps } = props;
  return (
    <SvgIcon
      sx={{ fontSize: "12rem", height: "auto", verticalAlign: "middle" }}
      component={ScrollLogoIcon}
      inheritViewBox
      {...restProps}
    ></SvgIcon>
  );
};

export default ScrollLogo;
