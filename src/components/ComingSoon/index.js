import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="mx-auto text-center my-[9rem] max-md:my-[4.5rem] items-center justify-center self-center">
      <div className="w-[11rem] h-[5rem] relative max-md:w-[24rem] max-md:h-[19.5rem]justify-center self-center">
        <Image
          src="/images/coming-soon.png"
          className="ml-2 mx-auto"
          fill
        />
      </div>

      <h1 className="font-semibold text-[2.4rem] mt-2 max-md:text-[1.8rem]">
        Coming soon...
      </h1>
    </div>
  );
};
export default ComingSoon;
