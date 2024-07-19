import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="mx-auto my-[9rem] items-center justify-center self-center text-center max-md:my-[4.5rem]">
      <div className="max-md:h-[19.5rem]justify-center relative h-[5rem] w-[11rem] self-center max-md:w-[24rem]">
        <Image
          src="/images/coming-soon.png"
          className="mx-auto ml-2"
          fill
          objectFit="contain"
        />
      </div>

      <h1 className="mt-2 text-[2.4rem] font-semibold max-md:text-[1.8rem]">
        Coming soon...
      </h1>
    </div>
  );
};
export default ComingSoon;
