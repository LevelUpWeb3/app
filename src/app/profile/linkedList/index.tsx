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
import { truncateAddress } from "@/utils";

const LinkedList = () => {
  const {
    linkGoogle,
    linkTwitter,
    linkGithub,
    linkTelegram,
    linkEmail,
    linkWallet,
    unlinkGoogle,
    unlinkTwitter,
    unlinkGithub,
    unlinkTelegram,
    unlinkEmail,
    unlinkWallet,
    user,
  } = usePrivy();

  const connectedAccountsCount = user?.linkedAccounts?.length || 0;

  const wallets = [
    {
      key: "wallet",
      name: "Wallet",
      displayField: "address",
      icon: walletIcon,
      onLinkClick: linkWallet,
      onUnlinkClick: unlinkWallet,
    },
  ];

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
          fontSize: ["2.4rem", "3.6rem"],
          marginBottom: "2rem",
        }}
      >
        Linked Wallet
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        {wallets.map((wallet) => (
          <LinkedSocialItem
            key={wallet.key}
            itemKey={wallet.key}
            name={wallet.name}
            icon={wallet.icon}
            onLinkClick={wallet.onLinkClick}
            onUnlinkClick={wallet.onUnlinkClick}
            user={user}
            displayField={wallet.displayField}
            showUnlink={connectedAccountsCount > 1}
          />
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <Typography
          sx={{
            marginTop: "3rem",
            fontSize: ["2.4rem", "3.6rem"],
          }}
        >
          Linked Socials
        </Typography>
        {socials.map((social) => (
          <LinkedSocialItem
            key={social.key}
            itemKey={social.key}
            name={social.name}
            icon={social.icon}
            onLinkClick={social.onLinkClick}
            onUnlinkClick={social.onUnlinkClick}
            user={user}
            displayField={social.displayField}
            showUnlink={connectedAccountsCount > 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LinkedList;
