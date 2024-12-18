"use client";

import { Box, Typography } from "@mui/material";

import Button from "@/components/Button";
import ProfileModal from "../ProfileModal";
import { useState } from "react";
import { useProfileContext } from "@/contexts/ProfileContextProvider";

const ProfilePage = () => {
  const { username, avatar } = useProfileContext();

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          border: "1.5px solid #000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8.4rem",
          gap: "2rem",
        }}
      >
        <img
          style={{
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
          }}
          src={avatar}
        />
        <Typography
          sx={{
            fontSize: "2.4rem",
            fontWeight: 500,
          }}
        >
          {username}
        </Typography>
        <Box>
          <Typography
            sx={{
              backgroundColor: "#FFEEDA",
              lineHeight: "2.8rem",
              textAlign: "center",
              fontWeight: 500,
              width: "18rem",
              fontSize: "1.4rem",
              borderRadius: "0.7rem",
              marginBottom: "0.8rem",
            }}
          >
            8 Lessons Completed
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#FFEEDA",
              lineHeight: "2.8rem",
              textAlign: "center",
              fontWeight: 500,
              width: "18rem",
              fontSize: "1.4rem",
              borderRadius: "0.7rem",
            }}
          >
            3 Challenges Completed
          </Typography>
        </Box>
        <Button onClick={() => setOpen(true)}>Edit profile info</Button>
      </Box>
      <ProfileModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ProfilePage;
