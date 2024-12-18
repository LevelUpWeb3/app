"use client";
import { useMemo, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { usePathname, useRouter } from "next/navigation";
import { useProfileContext } from "@/contexts/ProfileContextProvider";

import { Fade, ListItemText, Menu, MenuItem } from "@mui/material";
import Button from "@/components/Button";

import { usePrivy } from "@privy-io/react-auth";

const useStyles = makeStyles<any>()((theme, { dark }) => ({
  button: {
    fontSize: "1.6rem",
    height: "3.6rem",
    padding: "0 1.2rem",
    borderRadius: "0.5rem",
    border: dark
      ? `1px solid ${(theme as any).vars.palette.primary.contrastText}`
      : "none",
    backgroundColor: dark
      ? "unset"
      : (theme as any).vars.palette.themeBackground.normal,
    color: dark ? (theme as any).vars.palette.primary.contrastText : "#473835",
    whiteSpace: "nowrap",
  },

  connectButton: {
    backgroundColor: "#FF684B",
    color: (theme as any).vars.palette.primary.contrastText,
    border: "none",
    fontSize: "1.8rem",
    fontWeight: 500,
  },
  endIcon: {
    fontSize: "1.6rem",
    marginLeft: "0.8rem",
    color: dark ? (theme as any).vars.palette.primary.contrastText : "#473835",
    willChange: "transform",
    transition: "transform .3s ease-in-out",
  },
  reverseEndIcon: {
    transform: "rotate(180deg)",
  },
  paper: {
    border: `1.5px solid ${(theme as any).vars.palette.text.primary}`,
    backgroundColor: (theme as any).vars.palette.background.default,
    marginTop: "0.5rem",
    borderRadius: "0",
  },
  list: {
    padding: 0,
  },
  listItem: {
    height: "4rem",
    padding: "0 1.2rem",
    gap: "0.8rem",
  },
  listItemIcon: {
    minWidth: "unset !important",
    color: dark ? (theme as any).vars.palette.primary.contrastText : "#473835",
  },

  listItemText: {
    fontSize: "1.6rem",
    cursor: "pointer",
    color: dark ? (theme as any).vars.palette.primary.contrastText : "#473835",
    fontWeight: "500",
  },
}));

const WalletDropdown = (props) => {
  const { dark } = props;
  const { classes } = useStyles({ dark });
  const pathname = usePathname();
  const router = useRouter();
  const { username } = useProfileContext();
  const { user, logout, login, authenticated, ready } = usePrivy();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCopied(false);
  };

  const operations = useMemo(
    () => [
      {
        label: "View Profile",
        action: () => {
          router.push("/profile");
        },
      },
      {
        label: "Log Out",
        action: () => {
          logout();
          handleClose();
        },
      },
    ],
    [pathname, copied],
  );

  return (
    <>
      {ready && authenticated ? (
        <Button onClick={handleClick}>{username}</Button>
      ) : (
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.paper, list: classes.list }}
      >
        {operations.map(({ label, action }) => (
          <MenuItem
            key={label}
            classes={{ root: classes.listItem }}
            onClick={action}
          >
            <ListItemText classes={{ primary: classes.listItemText }}>
              {label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default WalletDropdown;
