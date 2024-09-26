import { useRef } from "react";
import { makeStyles } from "tss-react/mui";

import { MenuItem, MenuList, Typography } from "@mui/material";

import { SOLIDITY_CHALLENGE_LIST } from "@/constants";

const useStyles = makeStyles<any>()((theme, { top }) => ({
  menuListRoot: {
    [theme.breakpoints.up("md")]: {
      position: "sticky",
      top,
    },

    padding: 0,
    gridRow: "span 2",
    height: "max-content",

    [theme.breakpoints.down("md")]: {
      gridRow: "span 1",
      gridColumn: "1 / 3",
      paddingBottom: "0.4rem",
      display: "flex",
      width: "100%",
      overflowX: "auto",
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(209, 205, 204, 0.30)",
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
      },
      // Firefox
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(209, 205, 204, 0.30) transparent",
    },
  },
  menuItemRoot: {
    padding: "0.8rem 2.4rem",
    minHeight: "unset",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      padding: "0.8rem",
    },
    "&.Mui-selected": {
      backgroundColor: (theme as any).vars.palette.text.primary,
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: (theme as any).vars.palette.text.primary,
      },
      ".MuiTypography-root": {
        color: (theme as any).vars.palette.primary.contrastText,
      },
    },
    "&:nth-of-type(n + 2)": {
      marginTop: "1.6rem",
      [theme.breakpoints.down("md")]: {
        marginTop: 0,
        marginLeft: "0.8rem",
      },
    },
  },
}));

const Challenge = (props) => {
  const { top, value, onChange } = props;
  const { classes, cx } = useStyles({ top });
  const allChallenges = useRef(SOLIDITY_CHALLENGE_LIST);

  return (
    <MenuList
      classes={{
        root: cx(classes.menuListRoot, "ecosystem-protocols-category"),
      }}
    >
      {allChallenges.current.map((item, index) => (
        <MenuItem
          classes={{ root: classes.menuItemRoot }}
          key={item}
          selected={value === item}
          onClick={() => onChange(item)}
        >
          {index !== 0 && (
            <div>
              <Typography
                sx={{
                  fontSize: ["1.2rem", "1.4rem"],
                  lineHeight: ["1.8rem", "2.2rem"],
                  fontWeight: 400,
                  cursor: "inherit",
                }}
              >
                {`Lesson ${index}`}
              </Typography>
            </div>
          )}
          <div>
            <Typography
              sx={{
                fontSize: ["1.6rem", "2rem"],
                lineHeight: ["2.4rem", "3.2rem"],
                fontWeight: 600,
                cursor: "inherit",
              }}
            >
              {item}
            </Typography>
          </div>
        </MenuItem>
      ))}
    </MenuList>
  );
};
export default Challenge;
