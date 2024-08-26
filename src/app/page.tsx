"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Button from "@/components/Button";
import useCheckViewport from "@/hooks/useCheckViewport";

const Container = styled(Box)({
  height: "calc(100vh - 65px)",
  minHeight: "64rem",
  position: "relative",
});

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  ["@media (max-width: 768px)"]: {
    padding: "0 2rem",
  },
});

const LandingPage = () => {
  const { isMobile } = useCheckViewport();

  return (
    <Container>
      <StyledBox
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <div className="pt-32 text-center text-[7.2rem] font-semibold leading-[88px] text-stone-950 max-md:w-[30rem] max-md:max-w-full max-md:pt-[6rem] max-md:text-[3.6rem] max-md:leading-[48px]">
          Level Up your Web3 Skills
        </div>

        <div className="mt-4 w-[771px] text-center text-[2.6rem] tracking-wide text-stone-950 max-md:max-w-full max-md:text-[1.6rem] max-md:leading-[24px]">
          Level Up is your platform to learn Solidity, build real projects, and
          apply for grants to build the future of Ethereum.
        </div>

        {/* TODO: Consider reviving this section when challenges are revisited */}
        {/* <div className="mt-7 flex justify-center">
          <div className="flex h-[11.6rem] w-[24rem] flex-col items-center justify-center rounded-2xl bg-orange-100 font-semibold text-stone-950 max-md:h-[6.8rem] max-md:w-[12.4rem]">
            <div className="text-center text-[1.8rem] leading-[2.8rem] tracking-normal max-md:text-[1.4rem] max-md:leading-[2rem]">
              Total challenges
            </div>
            <div className="text-center font-develop text-[4rem] leading-[56px] tracking-wide max-md:text-[2rem] max-md:leading-[2.8rem]">
              20
            </div>
          </div>
        </div> */}

        <div className="mb-[2.6rem] mt-[3.6rem] flex w-full justify-center gap-[3rem] max-md:flex-col max-md:items-center max-md:gap-[2rem]">
          <Button href="/solidity" color="primary" width="25rem">
            Learn Solidity
          </Button>
          <Button href="/learn-more" width="25rem">
            Learn More
          </Button>
        </div>
      </StyledBox>
      <img
        loading="lazy"
        className="mt-[6.8rem] w-full max-md:absolute max-md:bottom-0"
        src="/images/landing.png"
      />
    </Container>
  );
};

export default LandingPage;
