import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="mx-auto text-center my-[9rem] max-md:my-[4.5rem]">
      <div className="w-[32rem] h-[26rem] relative max-md:w-[24rem] max-md:h-[19.5rem]">
        <Image src="/images/comming_soon.png" className=" mx-auto" fill />
      </div>

      <h1 className="font-semibold text-[2.4rem] mt-2 max-md:text-[1.8rem]">
        Coming soon...
      </h1>
    </div>
  );
};
export default ComingSoon;
