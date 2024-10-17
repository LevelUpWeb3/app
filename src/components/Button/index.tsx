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

const useStyles = makeStyles<any>()((theme, { size }) => ({
  button: {
    height: size === "large" ? "82px" : "44px",
    fontSize: "16px",
    fontWeight: 500,
    width: "fit-content",
    padding: "0 20px",
    border: `1.5px solid ${theme.vars.palette.text.primary}`,
    backgroundColor: theme.vars.palette.background.default,
    color: theme.vars.palette.text.primary,
    "&:hover": {
      backgroundColor: "#F4F4F4",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      padding: "0 15px",
    },
  },
}));

const Button = (props: ScrollButtonProps) => {
  const {
    width,
    size = "default",
    isExternal,
    loading,
    disabled,
    children,
    ...restProps
  } = props;
  const { classes } = useStyles({
    size,
    width,
    disabled,
    loading,
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
