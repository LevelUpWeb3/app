import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import CloseSvg from "@/assets/svgs/common/close-modal.svg";
import UpSvg from "@/assets/svgs/solidity/up.svg";
import TwitterSvg from "@/assets/svgs/solidity/twitter.svg";
import WarpcastSvg from "@/assets/svgs/solidity/warpcast.svg";
import Link from "next/link";

const CongratulationModal = (props) => {
  const { onClose, name, sx, ...restProps } = props;

  const warpcastText = `I have successfully completed all five ${name} Solidity challenges in Level Up! Join me in my conquest to level up at levelupweb3.xyz/!`;
  const twitterText = `I have successfully completed all five ${name} Solidity challenges in @levelupweb3! Join me in my conquest to level up at levelupweb3.xyz/!`;

  const MEDIA_LIST = [
    {
      key: "Twitter",
      icon: TwitterSvg,
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`,
    },
    {
      key: "Warpcast",
      icon: WarpcastSvg,
      link: `https://warpcast.com/~/compose?text=${encodeURIComponent(warpcastText)}&embeds[]=levelupweb3.xyz`,
    },
  ];

  return (
    <Dialog
      maxWidth={false}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(16, 16, 16, 0.80)",
        },
        "& .MuiDialog-paper": {
          position: "relative",
          maxWidth: "480px",
          padding: "40px 30px",
          borderRadius: "25px",
        },
        ...sx,
      }}
      onClose={onClose}
      {...restProps}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "22px",
          right: "22px",
          color: "text.primary",
          "&:hover": { backgroundColor: "unset" },
        }}
        onClick={onClose}
      >
        <CloseSvg></CloseSvg>
      </IconButton>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          p: 0,
        }}
      >
        <UpSvg></UpSvg>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            maxWidth: ["220px", "100%"],
            textAlign: "center",
          }}
        >
          Congratualtions on leveling up!
        </Typography>
        <Typography sx={{ fontSize: "16px", textAlign: "center", mt: "-10px" }}>
          You have completed <span className="font-medium">{name}</span>{" "}
          Challenge. Brag about this achievement on your socials. We pinky
          promise to celebrate your win.
        </Typography>
        <Stack direction="row" gap="12px">
          {MEDIA_LIST.map(({ icon: Icon, link, key }) => (
            <Link key={key} href={link} target="_blank" title={key}>
              <Icon></Icon>
            </Link>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default CongratulationModal;
