"use client";

import { makeStyles } from "tss-react/mui";
import { ButtonBase, ButtonProps, CircularProgress } from "@mui/material";
import useCheckViewport from "@/hooks/useCheckViewport";

interface ScrollButtonProps extends ButtonProps {
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
  download?: boolean;
  variant?: "contained" | "outlined";
}

const useStyles = makeStyles<any>()((theme, { size, variant }) => ({
  button: {
    height: size === "large" ? "82px" : "44px",
    fontSize: size === "large" ? "24px" : "16px",
    fontWeight: 500,
    padding: "0 20px",
    width: "fit-content",
    border:
      variant === "outlined"
        ? `1.5px solid ${theme.vars.palette.text.primary}`
        : "none",
    backgroundColor:
      variant === "outlined"
        ? theme.vars.palette.background.default
        : theme.vars.palette.text.primary,
    color:
      variant === "outlined"
        ? theme.vars.palette.text.primary
        : theme.vars.palette.primary.contrastText,
    "&:hover": {
      backgroundColor:
        variant === "outlined" ? "#F4F4F4" : theme.vars.palette.text.primary,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "0 15px",
    },
  },
}));

const Button = (props: ScrollButtonProps) => {
  const {
    // width,
    size = "default",
    variant = "outlined",
    isExternal,
    loading,
    disabled,
    children,
    ...restProps
  } = props;
  const { classes } = useStyles({
    size,
    // width,
    disabled,
    loading,
    variant,
  });

  const { isMobile } = useCheckViewport();

  return (
    <ButtonBase
      classes={{
        root: classes.button,
      }}
      disabled={loading}
      {...restProps}
      target={isExternal ? "_blank" : "_self"}
    >
      {children}
      {loading && (
        <CircularProgress
          sx={{ color: "inherit" }}
          size={isMobile ? 18 : 24}
          thickness={4}
        ></CircularProgress>
      )}
    </ButtonBase>
  );
};

export default Button;
