import * as React from "react";
import Link from "next/link";
import Navigationbar from "../components/Navigationbar"; // Import the NavigationBar component
// const ChallengeCard = ({ challenge }) => (
//   <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//     <div className="flex flex-col grow justify-center text-base leading-6 text-zinc-600 max-md:mt-10 max-md:max-w-full">
//       <div className="justify-center items-center px-16 pt-32 pb-24 bg-white rounded-3xl max-md:px-5 max-md:pt-10 max-md:max-w-full">
//         <img src={challenge.coverImage} alt={challenge.name} />
//       </div>
//     </div>
//   </div>
// );

const ChallengeDetails = ({ challenge }) => (
  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
     <Navigationbar />
    <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
      <h1 className="text-4xl tracking-wide leading-[56px] text-stone-950 max-md:max-w-full">
        {challenge.name}
      </h1>
      <div className="flex gap-2 self-start mt-6 text-base tracking-normal leading-6 text-center text-yellow-800">
        {challenge.tags.map((tag) => (
          <div
            key={tag}
            className="justify-center px-3 py-1 whitespace-nowrap bg-orange-200 rounded max-md:px-5"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="flex gap-5 justify-between mt-6 mr-5 text-xl font-semibold leading-9 text-center items-center max-md:flex-wrap max-md:mr-2.5">
        <a
          href={challenge.githubLink}
          className="flex flex-1 gap-5 items-center justify-center py-2 text-red-400 rounded-xl border border-red-400 border-solid"
        >
          <img
            src="./orangearrow.png"
            alt="Github icon"
            className="shrink-0 aspect-square w-[54px]"
          />
          <span className="flex-auto">Go to Github</span>
        </a>
        <button className="flex flex-1 gap-5 items-center justify-center py-2 whitespace-nowrap rounded-xl border border-solid border-stone-950 text-stone-950">
          <img
            src="./blackarrow.png"
            alt="Share icon"
            className="shrink-0 aspect-square w-[54px]"
          />
          <span className="flex-auto">Share</span>
        </button>
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

function ChallengeDetailsPage() {
  const challenge = {
    name: "This is a challenge Name",
    tags: ["Defi", "Level 1"],
    githubLink: "https://github.com/challenge",
  };

  const sections = [
    {
      title: "This is a title",
      content:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      title: "This is a title",
      content:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
  ];

  return (
    <div className="flex gap-5 px-6 pt-3 pb-16 bg-orange-50 max-md:flex-wrap max-md:pl-5">
      <Link href="/">
      <img
        loading="lazy"
        src="./Option4.png"
        alt="Logo"
        className="shrink-0 self-start max-w-full aspect-[4.76] w-[156px]"
      />
      </Link>
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="justify-center self-end px-3 py-1 text-lg font-medium leading-9 text-center text-orange-50 bg-red-400 rounded-md">
          Connect Wallet
        </div>
        <div className="flex gap-3 self-start mt-20 text-lg font-semibold leading-8 whitespace-nowrap text-stone-950 max-md:mt-10">
          {/* <img
            loading="lazy"
            src="back-icon.png"
            alt="Back icon"
            className="shrink-0 my-auto w-6 aspect-square"
          /> */}
          <Link href="/challenges">
            <div>Back</div>
          </Link>
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {/* <ChallengeCard challenge={challenge} /> */}
            <ChallengeDetails challenge={challenge} />
          </div>
        </div>
        <div className="flex gap-5 justify-between self-start mt-14 text-xl font-semibold leading-9 text-center max-md:mt-10">
          <div className="text-red-400">About</div>
          <div className="text-stone-950">Tab Name</div>
        </div>
        <div className="z-10 shrink-0 mt-5 h-1 bg-red-400 border-4 border-red-400 border-solid max-md:max-w-full" />
        <div className="shrink-0 h-px border border-solid bg-stone-950 border-stone-950 max-md:max-w-full" />
        {sections.map((section, index) => (
          <ChallengeSection
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}

export default ChallengeDetailsPage;
