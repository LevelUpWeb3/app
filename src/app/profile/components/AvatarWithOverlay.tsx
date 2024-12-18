import { Box, IconButton, Input, SvgIcon } from "@mui/material";
import EditIcon from "@/assets/svgs/profile/upload.svg";

function AvatarWithOverlay({ avatarSrc, onPickPicture }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: 160,
        height: 160,
        borderRadius: "50%",
        overflow: "hidden",
        ".avatar-overlay": {
          opacity: 0.8,
        },
        "&:hover .avatar-overlay": {
          opacity: 1,
        },
        margin: "0 auto 3rem",
      }}
    >
      <Box
        component="img"
        src={avatarSrc}
        alt="User Avatar"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <Box
        className="avatar-overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        <IconButton
          component="label"
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            color: "#fff",
          }}
        >
          <SvgIcon
            component={EditIcon}
            inheritViewBox
            sx={{ width: "5rem", height: "5rem" }}
          />
          <Input
            id="canvas-avatar"
            name="file"
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={onPickPicture}
            sx={{
              display: "none",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default AvatarWithOverlay;
