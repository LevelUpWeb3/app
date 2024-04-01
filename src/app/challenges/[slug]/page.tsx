"use client";
import { useEffect, useState } from "react";

import { MDXRemote } from "next-mdx-remote";
import * as React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const ChallengeDetails = ({ challengeData }) => (
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
      <h1 className="text-4xl tracking-wide leading-[56px] text-stone-950 max-md:max-w-full">
        {challengeData.name}
      </h1>
      <div className="flex gap-2 self-start mt-6 text-base tracking-normal leading-6 text-center text-yellow-800">
        {challengeData.labels?.map((label) => (
          <div
            key={label}
            className="justify-center px-3 py-1 whitespace-nowrap bg-orange-200 rounded max-md:px-5"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="flex gap-5 justify-between mt-6 mr-5 text-xl font-semibold leading-9 text-center items-center max-md:flex-wrap max-md:mr-2.5">
        <Button href="">Go to Github</Button>
        <Button href="" color="secondary">
          Share
        </Button>
      </div>
    </div>
  </div>
);

const ChallengeSection = ({ title, content }) => (
  <section>
    <h2 className="mt-12 text-2xl font-semibold text-stone-950 max-md:mt-10 max-md:max-w-full">
      {title}
    </h2>
    <p className="mt-2 text-xl tracking-wide text-stone-950 max-md:max-w-full">
      {content}
    </p>
  </section>
);

export default function ChallengeDetailsPage() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/markdownData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[3]);
        setData(data[3]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex gap-5 px-6 pt-3 pb-16 bg-orange-50 max-md:flex-wrap max-md:pl-5">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        {/* <div className="justify-center self-end px-3 py-1 text-lg font-medium leading-9 text-center text-orange-50 bg-red-400 rounded-md">
          Connect Wallet
        </div> */}
        <div className="flex gap-3 self-start mt-20 text-lg font-semibold leading-8 whitespace-nowrap text-stone-950 max-md:mt-10">
          <Link href="/challenges">
            <div>Back</div>
          </Link>
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {/* <ChallengeCard challenge={challenge} /> */}
            {data?.content && <ChallengeDetails challengeData={data} />}
          </div>
        </div>
        <div className="flex gap-5 justify-between self-start mt-14 text-xl font-semibold leading-9 text-center max-md:mt-10">
          <div className="text-red-400">About</div>
          <div className="text-stone-950">Tab Name</div>
        </div>
        <div className="z-10 shrink-0 mt-5 h-1 bg-red-400 border-4 border-red-400 border-solid max-md:max-w-full" />
        <div className="shrink-0 h-px border border-solid bg-stone-950 border-stone-950 max-md:max-w-full" />
        {/* <MdxLayout> */}
        {data?.content && <MDXRemote {...data.content} />}
        {/* </MdxLayout> */}
        {/* {sections.map((section, index) => (
          <ChallengeSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))} */}
      </div>
    </div>
  );
}
