import List from "./List";

function ChallengesPage() {
  return (
    <div className="flex flex-col pb-2.5 mt-[-6.5rem]">
      <header className="overflow-hidden relative flex items-center justify-center  w-full text-center h-[356px] max-md:max-w-full max-md:h-[18rem]">
        <img
          loading="lazy"
          src="/images/landing/banner.svg"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <h1 className="relative self-center text-7xl font-semibold leading-[356px]  text-stone-950 max-md:text-[3.6rem]">
          Challenges
        </h1>
      </header>
      <List />
    </div>
  );
}

export default ChallengesPage;
