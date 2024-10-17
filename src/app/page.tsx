import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@/components/Button";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          background: [
            'url("/images/landing/bg-mobile.png")  right 20px bottom 30px / 155px no-repeat',
            'url("/images/landing/bg.png")  right bottom / 506px no-repeat',
          ],
        }}
      >
        <Stack gap={["14px"]} pt={["60px", "100px"]} pb={["210px", "450px"]}>
          <Typography
            sx={{
              fontSize: ["36px", "64px"],
              lineHeight: "normal",
            }}
          >
            Learn, Build, Innovate
          </Typography>

          <Typography
            sx={{
              fontSize: ["16px", "24px"],
              maxWidth: "686px",
              mb: [0, "16px"],
            }}
          >
            Level Up is your platform to learn solidity, build real projects,
            and find opportunities to build the future of Ethereum.
          </Typography>

          <Button href="/solidity">Learn Solidity</Button>
        </Stack>
      </Container>

      <Box className="bg-[#edfbfd]">
        <Container>
          <Stack
            gap={["14px"]}
            direction={["column", "row"]}
            justifyContent="space-between"
            py={["30px", "100px"]}
          >
            <Typography
              sx={{
                fontSize: ["24px", "36px"],
              }}
            >
              What is Level Up?
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: ["14px", "16px"],
                  lineHeight: ["20px", "22px"],
                  maxWidth: ["686px"],
                }}
              >
                Level Up is your one-stop shop for finding the building blocks
                you need to explore and thrive in your Web3 journey.
                <br />
                <br />
                From learning Solidity basics to developer challenges and
                grants, Level Up aims to be the foundation for every builder —
                from hobbyists to founders and everything in between.
                <br />
                <br />
                Level Up is community-first and slowly being built in public! If
                there’s anything you’d like to see or want to contribute, create
                an issue or make a PR in our Github and join our study group.
              </Typography>
              <Stack direction="row" mt="30px" gap={["16px", "20px"]}>
                <Button href="https://github.com/LevelUpWeb3/app" isExternal>
                  Find Our Github
                </Button>
                <Button href="https://t.me/+PdNbk5milo1mMTAy" isExternal>
                  Join The Study Group
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
