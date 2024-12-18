"use client";

import { Box, Typography } from "@mui/material";

import Button from "@/components/Button";

const POAPSList = () => {
  return (
    <Box
      sx={{
        gridColumnStart: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "4.8rem",
          marginBottom: "2rem",
        }}
      >
        POAPs
      </Typography>
      <Typography
        sx={{
          marginBottom: "2rem",
        }}
      >
        Mark your achievements with these collectible POAPs!
      </Typography>
      <Box
        sx={{
          gap: "2.4rem",
          display: "grid",
          gridTemplateColumns: ["repeat(auto-fill, minmax(32rem, 1fr))"],
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "2.5rem",
              gap: "2rem",
              padding: "3rem",
              maxWidth: "33rem",
            }}
          >
            <img
              style={{
                width: "160px",
                height: "160px",
                background: "#F4F4F4",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 500,
                maxWidth: "27rem",
                textAlign: "center",
              }}
            >
              All Solidity Lessons Completed
            </Typography>
            <Button>Collect Now</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default POAPSList;
