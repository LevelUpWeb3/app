import { useState } from "react";
import { makeStyles } from "tss-react/mui";

import { Select as MuiSelect, Typography } from "@mui/material";

import TriangleDownIcon from "@/assets/svgs/common/triangle-down.svg";

const useStyles = makeStyles()((theme) => ({
  root: {
    // width: "19rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  // TODO: why first insert
  select: {
    padding: "11.5px 44px 11.5px 30px !important",
    [theme.breakpoints.down("sm")]: {
      padding: "12px 44px 12px 30px !important",
    },
    backgroundColor: `${(theme as any).vars.palette.background.default} !important`,
    "&[aria-expanded='true']": {
      borderRadius: "15px 15px 0 0",
      border: `1.5px solid ${(theme as any).vars.palette.text.primary}`,
      borderBottomColor: "transparent",
    },
    "&[aria-expanded='false']": {
      borderRadius: "15px",
      border: `1.5px solid ${(theme as any).vars.palette.text.primary}`,
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
    border: `1.5px solid ${(theme as any).vars.palette.text.primary}`,
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
    padding: "0 5px",
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
  // const [popoverWidth, setPopoverWidth] = useState("auto");

  // const selectRef = useRef(null);

  // useEffect(() => {
  //   console.log(selectRef.current.clientWidth);
  //   console.log(getComputedStyle(selectRef.current).width);
  // }, []);

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
      // ref={selectRef}
      IconComponent={TriangleDownIcon}
      className={cx(classes.root, className)}
      // sx={{ width: popoverWidth }}
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
          <Typography
            sx={{
              fontSize: ["1.4rem", "1.6rem"],
              lineHeight: ["2.4rem", "2.6rem"],
              fontWeight: 500,
              cursor: "inherit",
            }}
          >
            {selected as string}
          </Typography>
        );
      }}
      {...restProps}
    ></MuiSelect>
  );
};

export default Select;
