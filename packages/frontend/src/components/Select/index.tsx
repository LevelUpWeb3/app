import { useState } from "react";
import { makeStyles } from "tss-react/mui";

import { Select as MuiSelect, Stack, Typography } from "@mui/material";

import TriangleDownIcon from "@/assets/svgs/common/triangle-down.svg";

const useStyles = makeStyles()((theme) => ({
  root: {
    width: "19rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  // TODO: why first insert
  select: {
    padding: "0.6rem 2.4rem 0.6rem 2.4rem !important",
    [theme.breakpoints.down("sm")]: {
      padding: "1.1rem 3.6rem 1.1rem 1.6rem !important",
    },
    backgroundColor: `${(theme as any).vars.palette.background.default} !important`,
    "&[aria-expanded='true']": {
      borderRadius: "2.4rem 2.4rem 0 0",
      border: `1px solid ${(theme as any).vars.palette.text.primary}`,
      borderBottomColor: "transparent",
    },
    "&[aria-expanded='false']": {
      borderRadius: "2.4rem",
      border: `1px solid ${(theme as any).vars.palette.text.primary}`,
    },
    "&:focus": {
      backgroundColor: "unset",
    },
  },
  icon: {
    top: "50%",
    transform: "translateY(-50%)",
    right: "2.4rem",
    willChange: "transform",
    transition: "transform .3s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      right: "2rem",
    },
  },
  iconOpen: {
    transform: "translateY(-50%) rotate(180deg)",
  },
  popover: {
    boxShadow: "none",
    borderRadius: "0 0 2.4rem 2.4rem",
    border: `1px solid ${(theme as any).vars.palette.text.primary}`,
    borderTop: "none",
    marginTop: "-6px",
    transform: "translateX(0) !important",
    transition: "transform 227ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important",
  },
  suspend: {
    borderRadius: "2.6rem",
    borderTop: `1px solid ${(theme as any).vars.palette.text.primary}`,
  },
  menuList: {
    padding: 0,
    maxHeight: "300px",
    overflowY: "auto",
  },
  menuListWithScrollbar: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  },
}));

const Select = (props) => {
  const { className, showScrollbar, ...restProps } = props;
  const { classes, cx } = useStyles();

  const [isUnderneath, setIsUnderneath] = useState(true);

  const onOpen = () => {
    setTimeout(() => {
      const popoverEl = document.querySelector(
        ".select-popover-paper-under",
      ) as HTMLElement;

      if (popoverEl) {
        const { left } = popoverEl.getBoundingClientRect();
        if (left > 1200 && left % 2) {
          popoverEl.style.left = `${left - 0.5}px`;
        }
        const isUnderneath =
          window
            .getComputedStyle(popoverEl)
            ["transform-origin"].split(" ")[1] === "0px";
        setIsUnderneath(isUnderneath);
      }
    });
  };
  return (
    <MuiSelect
      variant="standard"
      disableUnderline
      displayEmpty
      IconComponent={TriangleDownIcon}
      className={cx(classes.root, className)}
      classes={{
        select: classes.select,
        icon: classes.icon,
        iconOpen: classes.iconOpen,
      }}
      onOpen={onOpen}
      MenuProps={{
        PopoverClasses: {
          paper: cx(
            classes.popover,
            "select-popover-paper-under",
            !isUnderneath && classes.suspend,
          ),
        },
        MenuListProps: {
          classes: {
            root: cx(
              classes.menuList,
              showScrollbar && classes.menuListWithScrollbar,
            ),
          },
        },
        disableAutoFocusItem: true,
      }}
      renderValue={(selected) => {
        return (
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Typography
              sx={{
                fontSize: ["1.6rem", "2rem"],
                lineHeight: ["2.4rem", "3.6rem"],
                fontWeight: 600,
                cursor: "inherit",
              }}
            >
              {selected as string}
            </Typography>
          </Stack>
        );
      }}
      {...restProps}
    ></MuiSelect>
  );
};

export default Select;
