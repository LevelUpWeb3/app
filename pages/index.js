import Link from "next/link";
import Button from "@/components/Button";
import Navigationbar from "../components/Navigationbar"; // Import the NavigationBar component


export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen pt-3 bg-orange-50">
      <Navigationbar />

      <div className="mt-24 text-7xl font-semibold text-center leading-[88px] text-stone-950 w-[720px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        Welcome to Level up Challenges!
      </div>

      <div className="mt-8 text-2xl tracking-wide text-center text-stone-950 w-[771px] max-md:max-w-full">
        With our curated challenges we guide you hands-on how to get building on
        Scroll with your favourite protocols and dev tools
      </div>

      <div className="flex justify-center mt-7">
        <div className="w-[250px]">
          <div className="px-5 py-4 font-semibold bg-orange-100 rounded-2xl text-stone-950">
            <div className="text-lg tracking-normal leading-7 text-center">
              Total challenges
            </div>
            <div className="text-4xl tracking-wide leading-[56px] text-center">
              20
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-9 text-xl font-semibold leading-9 text-center max-md:flex-wrap">
        {/* Browse Challenges Button */}
        {/* <Link href="/challenges">
          <div className="cursor-pointer flex flex-1 flex-auto gap-4 px-5 text-red-400 rounded-xl border border-red-400 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a96fc038c3c873b3d9ed52bfe17428e10145cca7bd4898359ecb2de64b60f5eb?"
              className="shrink-0 aspect-square w-[54px]"
            />
            <div className="flex-auto my-auto">Browse challenges</div>
          </div>
        </Link> */}
        <Button href="/challenges" >Get Started</Button>
        <Button color="secondary" href="/how-it-works">How it works</Button>

        {/* How It Works Button */}
        {/* <Link href="/how-it-works">
          <div className="cursor-pointer flex flex-1 flex-auto gap-5 pr-5 rounded-xl border border-solid border-stone-950 text-stone-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfcc70c1fd2556ca0defb1635bf82118ee617999a596ae461cc4ae90facfd125?"
              className="shrink-0 aspect-square w-[54px]"
            />
            <div className="flex-auto my-auto">How it works</div>
          </div>
        </Link> */}
      </div>

      <img
        loading="lazy"
        src="/landing.png"
        className="self-stretch mt-7 w-full aspect-[2.94] max-md:max-w-full bottom-0"
      />
    </div>
  );
}
