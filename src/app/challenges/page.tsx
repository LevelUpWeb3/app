import List from "./List";

function ChallengesPage() {
  return (
    <div className="flex flex-col pb-2.5 mt-[-6.5rem]">
      <header className="overflow-hidden relative flex items-center justify-center  w-full text-center h-[356px] max-md:max-w-full max-md:h-[18rem]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/651bdb5346aad668426ecb6714d4a05adc01d882b6f7d8d211646feb0d383aae?apiKey=30dce9aa5b094dc98ca07a318d005dda&"
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
