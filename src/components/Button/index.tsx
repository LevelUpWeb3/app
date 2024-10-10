"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { makeStyles } from "tss-react/mui";

import { ButtonBase, ButtonProps, CircularProgress } from "@mui/material";

import useCheckViewport from "@/hooks/useCheckViewport";

interface ScrollButtonProps extends ButtonProps {
  width?: string | number;
  gloomy?: boolean;
  loading?: boolean;
  disabled?: boolean;
  whiteButton?: boolean;
  download?: boolean;
  variant?: "contained" | "outlined";
  // compatibility
  target?: string;
  rel?: string;
  isExternal?: boolean;
}

const useStyles = makeStyles<any>()(
  (theme, { width, variant, whiteButton }) => ({
    button: {
      height: "44px",
      fontSize: "16px",
      fontWeight: 600,
      width: "fit-content",
      paddingLeft: "20px",
      paddingRight: "20px",
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor: variant === "contained" ? "#101010" : "#ffffff",
      color: variant === "contained" ? "#ffffff" : "#101010",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  }),
);

const Button = (props: ScrollButtonProps) => {
  const {
    width,
    variant,
    loading,
    disabled,
    gloomy,
    children,
    whiteButton,
    isExternal,
    onClick,
  } = props;
  const { classes, cx } = useStyles({
    variant,
    width,
    disabled,
    loading,
    whiteButton,
  });
  const router = useRouter();

  const { isMobile } = useCheckViewport();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (isExternal) {
      window.open(props.href, "_blank");
    } else {
      router.push(props.href as string);
    }
  };

  return (
    <ButtonBase
      classes={{
        root: cx(classes.button),
      }}
      disabled={gloomy || loading}
      onClick={handleClick}
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
