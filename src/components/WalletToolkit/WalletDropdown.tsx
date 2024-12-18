"use client";
import { useMemo, useState, useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { usePathname, useRouter } from "next/navigation";

import { Fade, ListItemText, Menu, MenuItem } from "@mui/material";
import Button from "@/components/Button";
import ProfileModal from "@/app/profile/components/ProfileModal";
import { truncateAddress } from "@/utils";

import { usePrivy } from "@privy-io/react-auth";
import useProfileStore from "@/stores/profileStore";
import useProgressStore from "@/stores/processStore";
import { LESSON_KEY_MAP } from "@/constants/solidity/code-solutions";

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
  const {
    username,
    avatar,
    dialogOpen,
    setDialogOpen,
    setUsername,
    setAvatar,
  } = useProfileStore();
  const { setChallenges, setLessons } = useProgressStore();
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

  useEffect(() => {
    if (user) {
      console.log("Setting default profile data:", user);
      if (user.customMetadata) {
        setUsername(user.customMetadata.username as string);
        setAvatar(user.customMetadata.avatar as string);

        const lessons = JSON.parse(
          (user.customMetadata.lessons as string) || "{}",
        );
        const reverseMap = {};
        for (const [key, value] of Object.entries(LESSON_KEY_MAP)) {
          if (lessons[value] !== undefined) {
            reverseMap[key] = lessons[value];
          }
        }

        setLessons(reverseMap);
        setChallenges(
          JSON.parse((user.customMetadata.challenges as string) || "{}"),
        );
      } else {
        const name = truncateAddress(user.wallet?.address as string);
        const avatarUrl = `https://gravatar.com/avatar/${user.wallet?.address}?s=200&d=identicon`;
        console.log("Setting default profile data:", name, avatarUrl, user);
        setUsername(name);
        setAvatar(avatarUrl);
      }

      const createdAt = new Date(user.createdAt).getTime();
      const now = Date.now();
      if (now - createdAt <= 3000) {
        // Check if the difference is less than or equal to 3 seconds
        console.log("First login detected, opening dialog");
        setDialogOpen(true);
      }
    }
  }, [user]);

  const operations = useMemo(
    () => [
      {
        label: "View Profile",
        action: () => {
          router.push("/profile");
          handleClose();
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
        <Button onClick={handleClick}>
          <img
            src={avatar}
            alt="User"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          {username}
        </Button>
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
      <ProfileModal open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
};

export default WalletDropdown;
