"use client";

// TODO: style
import React, { ReactNode } from "react";
import { Box, IconButton } from "@mui/material";
import { X, Close } from "@mui/icons-material";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  name: string;
}

const Modal = ({ isOpen, onClose, name }: ModalProps) => {
  if (!isOpen) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "background") onClose();
  };

  const handleWarpcastShare = () => {
    const text = `I have successfully completed all five ${name} challenges in Level Up! Join me in my conquest to level up at levelupweb3.xyz/!`;
    const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=levelupweb3.xyz`;
    window.open(warpcastUrl, "_blank");
  };

  const handleXShare = () => {
    const text = `I have successfully completed all five ${name} challenges in @levelupweb3! Join me in my conquest to level up at levelupweb3.xyz/!`;
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(xUrl, "_blank");
  };

  return (
    <Box
      className="fixed inset-0 z-20 flex items-center justify-center bg-opacity-25 backdrop-blur-sm"
      id="background"
      onClick={handleClose}
    >
      <Box className="flex w-[600px] flex-col rounded-xl border-2 bg-orange-50">
        <Box className="rounded-xl p-8" sx={{ position: "relative" }}>
          <IconButton
            aria-label="Close"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
              color: "#101010",
            }}
          >
            <Close />
          </IconButton>
          <Box className="mb-5 flex items-center justify-center">
            <Image
              src="/images/complete-lesson.png"
              alt="Avatar"
              width={250}
              height={250}
            />
          </Box>
          <div className="text-center text-4xl">
            <p style={{ marginBottom: "20px" }}>
              Congratulations on leveling up! You have completed the{" "}
              <strong>{name}</strong> Challenge 🔥
            </p>
            <p style={{ marginBottom: "20px" }}>
              Brag about this achievement on your socials!
            </p>
            <p style={{ marginBottom: "20px" }}>
              We pinky promise to celebrate your win.
            </p>
          </div>
          <Box className="flex justify-center">
            <Box
              sx={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={handleXShare}
                sx={{
                  width: 30,
                  height: 30,
                  color: "#f9f8f7",
                  backgroundColor: "#4e5668", // Change this to your desired color
                  borderRadius: 0.2,
                  "&:hover": {
                    backgroundColor: "#807b6f",
                  },
                }}
              >
                <X />
              </IconButton>
            </Box>
            <IconButton
              className="mt-2"
              onClick={handleWarpcastShare}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                  "& img": {
                    filter: "invert(1)", // Invert the colors of the image
                  },
                },
              }}
            >
              <Image
                src="/images/warpcast.svg"
                alt="Warpcast Logo"
                height={30}
                width={30}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
