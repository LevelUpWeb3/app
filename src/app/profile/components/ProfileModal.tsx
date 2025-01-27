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
import AvatarWithOverlay from "./AvatarWithOverlay";
import Button from "@/components/Button";
import { useState } from "react";
import { useEffect } from "react";
import useProfileStore from "@/stores/profileStore";
import { useMessage } from "@/contexts/MessageProvider";

const ProfileModal = (props) => {
  const { onClose, sx, open, ...restProps } = props;
  const {
    avatar,
    setAvatar,
    username,
    setUsername,
    uploadProfileData,
    loading,
  } = useProfileStore();
  const showMessage = useMessage();
  const [avatarURL, changeAvatarURL] = useState(avatar);
  const [name, setName] = useState(username);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePickPicture = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      showMessage("Please select a valid image file.", "error");
      return;
    }

    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSizeInBytes) {
      showMessage("The file size must be less than 2MB.", "error");
      return;
    }

    setSelectedFile(file);

    const previewURL = URL.createObjectURL(file);
    changeAvatarURL(previewURL);
  };

  useEffect(() => {
    if (open) {
      setName(username);
      changeAvatarURL(avatar);
    }
  }, [open, username, avatar]);

  const handleConfirm = async () => {
    try {
      await uploadProfileData(name, selectedFile, avatar);
      setUsername(name);
      setAvatar(avatarURL);
    } catch (error) {
      showMessage(error.message, "error");
    }
  };

  const hasChanges = () => {
    return name !== username || avatarURL !== avatar;
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
                width: ["100%", "42rem"],
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
        <Button
          variant="contained"
          onClick={handleConfirm}
          loading={loading}
          disabled={!hasChanges()}
          sx={{
            "&.Mui-disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.20) !important",
            },
          }}
        >
          Confirm
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
