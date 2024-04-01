import * as React from "react";

import Button from "@/components/Button";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center pt-4 pr-20 pb-20 pl-6  max-lg:px-5 h-screen">
      <div className="mt-24 text-[7.2rem] font-semibold text-center leading-[88px] text-stone-950 max-lg:mt-[4.5rem] max-lg:text-[3.6rem] max-md:leading-[4.8rem]">
        How it works
      </div>
      <div className="w-full max-w-[1259px] max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col self-stretch my-auto max-lg:mt-10 max-lg:max-w-full">
              <div className="text-[2.4rem] tracking-wide leading-[3.4rem]  max-lg:max-w-full max-lg:text-[2rem] max-lg:leading-[3rem]">
                Our challenges are hosted on{" "}
                <a
                  className="font-bold text-red-400 underline"
                  href="https://github.com/LevelUpWeb3/app"
                >
                  Github
                </a>
                ! So you get to show off your skills and keep track of them.
                <br />
                <br />
                Each challenge is focused on a key area like defi or gaming and
                shows you how to get started. You will find info about each
                challenge. If you don’t know anything about a topic, no worries!
                We’ve curated the content you need to get started!
              </div>
              <div className="flex gap-5 mt-14 text-xl font-semibold leading-9 text-center items-center max-lg:flex-wrap max-lg:mt-10 max-md:justify-center ">
                <Button width="25rem" color="primary" href="/challenges">
                  Browse Challenges
                </Button>
                <Button
                  width="25rem"
                  isExternal
                  href="https://t.me/levelupscroll"
                >
                  Join the study group
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full p-20">
            <img
              loading="lazy"
              srcSet="/images/how-it-works/cozy.png"
              className="grow w-full aspect-[0.96] max-lg:mt-10 max-lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
