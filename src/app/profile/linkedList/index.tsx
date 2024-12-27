"use client";

import { Box, Typography } from "@mui/material";

import { usePrivy } from "@privy-io/react-auth";
import SvgIcon from "@mui/material/SvgIcon";
import walletIcon from "@/assets/svgs/profile/wallet.svg";
import emailIcon from "@/assets/svgs/profile/email.svg";
import googleIcon from "@/assets/svgs/profile/google.svg";
import twitterIcon from "@/assets/svgs/profile/twitter.svg";
import githubIcon from "@/assets/svgs/profile/github.svg";
import telegram from "@/assets/svgs/profile/telegram.svg";
import useProfileStore from "@/stores/profileStore";
import LinkedSocialItem from "./LinkedSocialItem";

const LinkedList = () => {
  const {
    linkGoogle,
    linkTwitter,
    linkGithub,
    linkTelegram,
    linkEmail,
    unlinkGoogle,
    unlinkTwitter,
    unlinkGithub,
    unlinkTelegram,
    unlinkEmail,
    user,
  } = usePrivy();
  const { username } = useProfileStore();

  const socials = [
    {
      key: "email",
      displayField: "address",
      name: "Email",
      icon: emailIcon,
      onLinkClick: linkEmail,
      onUnlinkClick: unlinkEmail,
    },
    {
      key: "google",
      displayField: "name",
      name: "Google",
      icon: googleIcon,
      onLinkClick: linkGoogle,
      onUnlinkClick: unlinkGoogle,
    },
    {
      key: "github",
      displayField: "username",
      name: "Github",
      icon: githubIcon,
      onLinkClick: linkGithub,
      onUnlinkClick: unlinkGithub,
    },
    {
      key: "twitter",
      displayField: "username",
      name: "Twitter",
      icon: twitterIcon,
      onLinkClick: linkTwitter,
      onUnlinkClick: unlinkTwitter,
    },

    {
      key: "telegram",
      name: "Telegram",
      displayField: "username",
      icon: telegram,
      onLinkClick: linkTelegram,
      onUnlinkClick: unlinkTelegram,
    },
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "3.6rem",
          marginBottom: "2rem",
        }}
      >
        Linked Wallet
      </Typography>
      <Box
        sx={{
          border: "1.5px solid #000",
          padding: "1.2rem 1.6rem",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", gap: "12px" }}>
          <SvgIcon
            sx={{ fontSize: "1.8rem", color: "inherit" }}
            component={walletIcon}
            inheritViewBox
          ></SvgIcon>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: 500 }}>
            {username}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <Typography
          sx={{
            marginTop: "3rem",
            fontSize: "3.6rem",
          }}
        >
          Linked Socials
        </Typography>
        {socials.map((social) => {
          return (
            <LinkedSocialItem
              key={social.key}
              itemKey={social.key}
              name={social.name}
              icon={social.icon}
              onLinkClick={social.onLinkClick}
              onUnlinkClick={social.onUnlinkClick}
              user={user}
              displayField={social.displayField}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default LinkedList;
