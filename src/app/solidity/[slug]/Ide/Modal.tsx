"use client";

import React, { ReactNode, useRef, useState, useEffect } from "react";
import { Button, Box, IconButton } from "@mui/material";
import { useParams } from "next/navigation";
import { X, Close } from "@mui/icons-material";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  isClose: () => void;
  children?: ReactNode;
  code?: string;
}

const Modal = ({ isOpen, isClose, children, code }: ModalProps) => {
  const [data, setData] = useState<any>([]);
  const [name, setName] = useState<string>("");
  const modalRef = useRef(null);
  const { slug } = useParams();
  const slugParam = slug as string;

  useEffect(() => {
    fetch("/data/challenges/solidity/markdownData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("data: ", data);
        const object = data.find((item) => item.id === slugParam);
        setName(object ? object.name : null);
        console.log("name: ", name);
      });
  }, []);

  if (!isOpen) return null;

  const handleClose = (e: any) => {
    if (e.target.id === "background") isClose();
  };

  const handleWarpcastShare = () => {
    const text = `I have successfully completed all five ${name} challenge on Level Up! Join me in my conquest to level up at levelupweb3.xyz/!`;
    const warpcastUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=levelupweb3.xyz`;
    window.open(warpcastUrl, "_blank");
  };

  const handleXShare = () => {
    const text = `I have successfully completed all five ${name} challenge on Level Up! Join me in my conquest to level up at levelupweb3.xyz/!`;
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(xUrl, "_blank");
  };

  return (
    <Box
      className="inset-0 bg-opacity-25 backdrop-blur-sm z-20 flex justify-center items-center fixed"
      id="background"
      onClick={handleClose}
    >
      <Box className="w-[600px] flex flex-col rounded-xl border-2 border-red-400 bg-orange-50">
        <Box
          className="p-8 rounded-xl"
          ref={modalRef}
          sx={{ position: "relative" }}
        >
          <IconButton
            aria-label="Close"
            onClick={isClose}
            sx={{
              position: "absolute",
              top: "0",
              right: "0",
            }}
            color="primary"
          >
            <Close />
          </IconButton>
          <Box className="flex justify-center items-center mb-5">
            <Image
              src="/images/comming_soon.png"
              alt="Avatar"
              width={250}
              height={250}
            />
          </Box>
          <div className="text-4xl text-center">
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
              className=" mt-2"
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
