"use client";

import { Box, Typography } from "@mui/material";

import Button from "@/components/Button";
import { useState } from "react";
import useProfileStore from "@/stores/profileStore";
import useProgressStore from "@/stores/processStore";

const ProfilePage = () => {
  const { username, avatar, setDialogOpen } = useProfileStore();
  const { lessons, challenges } = useProgressStore();

  const lessonsCompleted = Object.values(lessons).filter(
    (step) => step === 5,
  ).length;

  const challengesCompleted = Object.values(challenges).filter(Boolean).length;

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
        <Box
          style={{
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
            {lessonsCompleted} Lessons Completed
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
            {challengesCompleted} Challenges Completed
          </Typography>
        </Box>
        <Button onClick={() => setDialogOpen(true)}>Edit profile info</Button>
      </Box>
    </>
  );
};

export default ProfilePage;
