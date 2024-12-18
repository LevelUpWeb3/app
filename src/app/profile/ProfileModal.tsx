import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  InputBase,
} from "@mui/material";

import CloseSvg from "@/assets/svgs/common/close-modal.svg";
import AvatarWithOverlay from "./components/AvatarWithOverlay";
import Button from "@/components/Button";
import { useState } from "react";
import { useProfileContext } from "@/contexts/ProfileContextProvider";
import { useEffect } from "react";

const ProfileModal = (props) => {
  const { onClose, sx, open, ...restProps } = props;
  const { user, avatar, setAvatar, username, setUsername } =
    useProfileContext();
  const [avatarURL, changeAvatarURL] = useState(avatar);
  const [name, setName] = useState(username);

  const handlePickPicture = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        // changePreviewAvatarURL(reader.result)
        // changeCropAvatarDialogVisible(true)
        // handleCloseEditMenu()
        console.log("reader.result", reader.result);
        changeAvatarURL(reader.result as string);
      },
      false,
    );

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (open) {
      setName(username);
      changeAvatarURL(avatar);
    }
  }, [open, username, avatar]);

  const handleConfirm = () => {
    setUsername(name);
    setAvatar(avatarURL);
    onClose();
  };

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
      open={open}
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
          gap: "30px",
          p: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            maxWidth: ["220px", "100%"],
            textAlign: "center",
          }}
        >
          Set up your profile
        </Typography>
        <Box>
          <AvatarWithOverlay
            avatarSrc={avatarURL}
            onEditClick={() => {}}
            onPickPicture={handlePickPicture}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 500,
              }}
            >
              Your name
            </Typography>
            <InputBase
              type="text"
              placeholder="Enter your name"
              sx={{
                padding: "9px",
                border: "1.5px solid #000",
                marginTop: "10px",
                width: "42rem",
                fontSize: "2.4rem",
              }}
              inputProps={{
                style: { textAlign: "center" },
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Box>
        </Box>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
