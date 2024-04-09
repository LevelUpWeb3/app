"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import useCheckViewport from "@/hooks/useCheckViewport";

const Container = styled(Box)({
  height: "calc(100vh - 65px)",
  minHeight: "64rem",
  position: 'relative'
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
        <div className="pt-32 text-[7.2rem] font-semibold text-center leading-[88px] text-stone-950 w-[720px]  max-md:pt-[6rem] max-md:max-w-full max-md:text-[3.6rem] max-md:leading-[48px]">
          Welcome to Scroll Level up Challenges!
        </div>

        <div className="mt-4 text-[2.6rem] tracking-wide text-center text-stone-950 w-[771px] max-md:max-w-full max-md:text-[1.6rem] max-md:leading-[24px]">
          With our curated challenges we guide you hands-on how to get building
          on Scroll with your favourite protocols and dev tools
        </div>

        <div className="flex justify-center mt-7">
          <div className=" w-[24rem] h-[11.6rem] flex-col font-semibold flex justify-center items-center bg-orange-100 rounded-2xl text-stone-950 max-md:w-[12.4rem] max-md:h-[6.8rem]">
            <div className="text-[1.8rem] tracking-normal leading-[2.8rem] text-center max-md:text-[1.4rem] max-md:leading-[2rem]">
              Total challenges
            </div>
            <div className="text-[4rem] tracking-wide leading-[56px] text-center font-develop max-md:text-[2rem] max-md:leading-[2.8rem]">
              20
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center gap-[3rem] mt-[3.6rem] mb-[2.6rem] max-md:gap-[2rem] max-md:flex-col max-md:items-center ">
          <Button
            href="/challenges"
            color="primary"
            width="25rem"
          >
            Browse challenges
          </Button>
          <Button href="/how-it-works" width="25rem">
            How it works
          </Button>
        </div>
      </StyledBox>
      <img
        loading="lazy"
        className="w-full max-md:bottom-0 max-md:absolute"
        src="/images/landing.png"
      />
    </Container>
  );
};

export default LandingPage;
