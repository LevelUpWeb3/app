"use client";
import { Box, Container, Stack } from "@mui/material";

import Button from "@/components/Button";

// background: 'url("/images/landing/bg.png")  center center / 155px no-repeat',

const LandingPage = () => {
  return (
    <Box>
      <Box
        sx={{
          background: [
            'url("/images/landing/bg-mobile.png")  right 20px bottom 30px / 155px no-repeat',
            'url("/images/landing/bg.png")  right bottom / 500px no-repeat',
          ],
        }}
      >
        <Container>
          <Stack gap={["14px"]} pt={["60px", "100px"]} pb={["210px", "450px"]}>
            <Box
              sx={{
                fontSize: ["32px", "64px"],
              }}
            >
              Learn, Build, Innovate
            </Box>
            <Box
              sx={{
                fontSize: ["16px", "24px"],
                maxWidth: ["686px"],
              }}
            >
              Level Up is your platform to learn solidity, build real projects,
              and find opportunities to build the future of Ethereum.
            </Box>
            <Button href="/learn-more" width="25rem">
              Learn Solidity
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box className="bg-[#edfbfd]">
        <Container>
          <Stack
            gap={["14px"]}
            direction={["column", "row"]}
            justifyContent="space-between"
            py={["30px", "100px"]}
          >
            <Box
              sx={{
                fontSize: ["32px", "36px"],
              }}
            >
              What is Level Up?
            </Box>
            <Box
              sx={{
                fontSize: ["16px"],
                maxWidth: ["686px"],
              }}
            >
              Level Up is your one-stop shop for finding the building blocks you
              need to explore and thrive in your Web3 journey.
              <br />
              <br />
              From learning Solidity basics to developer challenges and grants,
              Level Up aims to be the foundation for every builder — from
              hobbyists to founders and everything in between.
              <br />
              <br />
              Level Up is community-first and slowly being built in public! If
              there’s anything you’d like to see or want to contribute, create
              an issue or make a PR in our Github and join our study group.
              <br />
              <Stack direction="row" mt="16px" gap={["16px"]}>
                <Button href="/learn-more" width="25rem">
                  Find Our Github
                </Button>
                <Button href="/learn-more" width="25rem">
                  Join The Study Group
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
