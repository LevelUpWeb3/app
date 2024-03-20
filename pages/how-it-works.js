import * as React from "react";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center pt-4 pr-20 pb-20 pl-6 bg-orange-50 max-md:px-5 h-screen">
      <Link href="/">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f15083542bf178f275a9998ecc1b5923e574645453e831349893fe691baeea?"
        className="self-start max-w-full aspect-[4.76] w-[156px]"
      />
      </Link>
      <div className="mt-24 text-7xl font-semibold text-center leading-[87.84px] text-stone-950 max-md:mt-10 max-md:text-4xl">
        How it works
      </div>
      <div className="w-full max-w-[1259px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl tracking-wide leading-9 text-red-400 underline max-md:max-w-full">
                Our challenges are hosted on <span className="font-bold text-red-400 underline">Github</span>! So you get to show off your skills and keep track of them.
                <br />
                <br />
                Each challenge is focused on a key area like defi or gaming and shows you how to get started. You will find info about each challenge. If you don’t know anything about a topic, no worries! We’ve curated the content you need to get started!
              </div>
              <div className="flex gap-5 mt-14 text-xl font-semibold leading-9 text-center items-center max-md:flex-wrap max-md:mt-10">
                <Link href="/challenges">
                  <div className="flex flex-1 gap-4 text-red-400 rounded-xl border border-red-400 border-solid px-4 py-2 justify-center items-center cursor-pointer">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a96fc038c3c873b3d9ed52bfe17428e10145cca7bd4898359ecb2de64b60f5eb?"
                      className="shrink-0 aspect-square w-[54px]"
                    />
                    Browse challenges
                  </div>
                </Link>
                <Link href="https://t.me/levelupscroll">
                  <div className="flex flex-1 gap-5 rounded-xl border border-solid border-stone-950 text-stone-950 px-4 py-2 justify-center items-center cursor-pointer">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfcc70c1fd2556ca0defb1635bf82118ee617999a596ae461cc4ae90facfd125?"
                      className="shrink-0 aspect-square w-[54px]"
                    />
                    Join study group
                  </div>
                </Link>
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
