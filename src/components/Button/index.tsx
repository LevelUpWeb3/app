"use client";

import { makeStyles } from "tss-react/mui";
import { ButtonBase, ButtonProps, CircularProgress } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";

interface ScrollButtonProps extends ButtonProps {
  // size?:  "large";
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  download?: boolean;
  // variant?: "contained" | "outlined";
  isExternal?: boolean;

  // compatibility
  target?: string;
  rel?: string;
  href?: string;
}

const useStyles = makeStyles<any>()((theme, { size, variant }) => ({
  button: {
    height: size === "large" ? "82px" : "44px",
    fontSize: size === "large" ? "20px" : "16px",
    fontWeight: 500,
    padding: "0 20px",
    width: "fit-content",
    border:
      variant === "outlined"
        ? `1.5px solid ${(theme as any).vars.palette.text.primary}`
        : "none",
    backgroundColor:
      variant === "outlined"
        ? (theme as any).vars.palette.background.default
        : (theme as any).vars.palette.text.primary,
    color:
      variant === "outlined"
        ? (theme as any).vars.palette.text.primary
        : (theme as any).vars.palette.primary.contrastText,
    "&:hover": {
      backgroundColor:
        variant === "outlined"
          ? "#F4F4F4"
          : (theme as any).vars.palette.text.primary,
    },
    "&.Mui-disabled": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "0 15px",
    },
  },
}));

const Button = (props) => {
  const { isMobile } = useCheckViewport();

  const {
    // width,
    size = "medium",
    variant = "outlined",
    isExternal,
    loading,
    disabled,
    children,
    ...restProps
  } = props;
  const { classes } = useStyles({
    size: isMobile ? "medium" : size,
    // width,
    // disabled,
    loading,
    variant,
  });

  return (
    <ButtonBase
      classes={{
        root: classes.button,
      }}
      disabled={loading || disabled}
      {...restProps}
      target={isExternal ? "_blank" : "_self"}
    >
      <span className="translate-y-[0.125em]">{children}</span>
      {loading && (
        <CircularProgress
          sx={{ color: "inherit", ml: "8px" }}
          size={isMobile ? 18 : 24}
          thickness={4}
        ></CircularProgress>
      )}
    </ButtonBase>
  );
};

export default Button;
