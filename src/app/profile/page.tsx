"use client";

import { Container, Box, Typography } from "@mui/material";

import { PAGE_MIN_HEIGHT } from "@/constants";
// import POAPSList from "./poapsList";
import { LAYOUT_HEADER_HEIGHT, MOBILE_LAYOUT_HEADER_HEIGHT } from "@/constants";
import LinkedList from "./linkedList";
import InfoCard from "./infoCard";
import { useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { ready, authenticated } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/");
    }
  }, [ready, authenticated, router]);

  return (
    <Box
      sx={{
        mt: [`-${MOBILE_LAYOUT_HEADER_HEIGHT}`, `-${LAYOUT_HEADER_HEIGHT}`],
        pt: ["8rem", "8rem", "8rem"],
      }}
    >
      <Container
        sx={{
          py: ["6rem", "6rem", "8.4rem"],
          minHeight: PAGE_MIN_HEIGHT,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "32rem 1fr",
            gap: "6rem 3rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "4.8rem",
              }}
            >
              My Profile
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            <InfoCard />
            <LinkedList />
          </Box>
          {/* <POAPSList /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default ProfilePage;
