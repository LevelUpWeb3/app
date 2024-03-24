import * as React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Navigationbar from "@/components/Navigationbar";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center pt-4 pr-20 pb-20 pl-6 bg-orange-50 max-md:px-5 h-screen">
      <Navigationbar />
      <div className="mt-24 text-7xl font-semibold text-center leading-[87.84px] text-stone-950 max-md:mt-10 max-md:text-4xl">
        How it works
      </div>
      <div className="w-full max-w-[1259px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl tracking-wide leading-9 text-red-400 underline max-md:max-w-full">
                Our challenges are hosted on{" "}
                <span className="font-bold text-red-400 underline">Github</span>
                ! So you get to show off your skills and keep track of them.
                <br />
                <br />
                Each challenge is focused on a key area like defi or gaming and
                shows you how to get started. You will find info about each
                challenge. If you don’t know anything about a topic, no worries!
                We’ve curated the content you need to get started!
              </div>
              <div className="flex gap-5 mt-14 text-xl font-semibold leading-9 text-center items-center max-md:flex-wrap max-md:mt-10">
                <Button href="/challenges">Browse Challenges</Button>
                <Button color="secondary" href="https://t.me/levelupscroll">
                  Join the study group
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="/cozy.png"
              className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
