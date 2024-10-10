"use client";

import React from "react";

import SectionHeader from "@/components/SectionHeader";
import Wrapper from "@/components/Wrapper";

import List from "./List";
import { Box, Container, Stack, Typography } from "@mui/material";

const SolidityPage = () => {
  // return (
  //   <div className="mt-[-6.5rem] flex flex-col pb-2.5">
  //     <SectionHeader
  //       title="Solidity Challenges"
  //       url={"/images/solidity-banner.svg"}
  //       imgClass="self-end"
  //     />
  //     <Wrapper>
  //       <List />
  //     </Wrapper>
  //   </div>
  // );
  return (
    <Box sx={{ pt: ["8rem"] }}>
      <Container>
        <Stack direction={["column", "row"]}>
          <Typography
            sx={{
              fontSize: "4.8rem",
              width: ["100%", "35rem"],
            }}
          >
            Solidity Challenges
          </Typography>
          <List />
        </Stack>
      </Container>
    </Box>
  );
};

export default SolidityPage;
