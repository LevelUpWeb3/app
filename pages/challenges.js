// pages/index.js

import Link from 'next/link';
import { getSortedChallengesData } from '@/lib/challenges';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const allChallengesData = getSortedChallengesData();
  return {
    props: {
      allChallengesData
    }
  };
}

function ChallengesPage({ allChallengesData }) {
    return (
        <div className="flex flex-col pb-2.5 bg-orange-50">
            <header className="flex overflow-hidden relative flex-col px-4 pt-3 pb-20 w-full text-center min-h-[356px] max-md:max-w-full">
                <Link href="/">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/651bdb5346aad668426ecb6714d4a05adc01d882b6f7d8d211646feb0d383aae?apiKey=30dce9aa5b094dc98ca07a318d005dda&" alt="" className="object-cover absolute inset-0 size-full" />
                </Link>
                <div className="flex relative gap-5 justify-between text-lg font-medium leading-9 text-orange-50 max-md:flex-wrap max-md:max-w-full">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39043117b20d899878c336840ffb5f7672ae7817a1f998a0c531ef269b1e5aa8?apiKey=30dce9aa5b094dc98ca07a318d005dda&" alt="" className="shrink-0 my-auto max-w-full aspect-[4.76] w-[156px]" />
                    <div className="justify-center px-3 py-1 bg-red-400 rounded-md"> Connect Wallet </div>
                </div>
                <h1 className="relative self-center mt-24 mb-9 text-7xl font-semibold leading-[87.84px] text-stone-950 max-md:mt-10 max-md:text-4xl"> Challenges </h1>
            </header>
            <main className="self-center mt-10 w-full max-w-[1390px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <nav className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col pb-2 text-xl font-semibold tracking-wide leading-8 whitespace-nowrap max-md:mt-10">
                            <div className="justify-center items-start px-6 py-2 text-white rounded bg-stone-950 max-md:px-5"> Defi </div>
                            <div className="flex flex-col self-start mt-6 ml-6 text-stone-950 max-md:ml-2.5"> <div>NFT</div> <div className="mt-8">Gaming</div> </div>
                        </div>
                    </nav>
                    <section className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 justify-between px-6 py-4 max-w-full text-xl font-semibold tracking-wide leading-9 bg-white border border-solid border-stone-950 rounded-[100px] text-stone-950 w-[189px] max-md:px-5"> <div>All levels</div> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2658232a3816bcb89627ac68d58ad16d31760ad1a92f77efa9280d8d8669fdd1?apiKey=30dce9aa5b094dc98ca07a318d005dda&" alt="" className="shrink-0 my-auto w-3.5 aspect-[2] fill-stone-950" /> </div>
                            <div className="px-5 mt-7 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    {allChallengesData.map((challenge, index) => (
                                        <ChallengeCard key={index} challenge={challenge} />
                                    ))}
                                </div>
                            </div>
                            {/* <div className="px-5 mt-6 max-md:max-w-full">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    {allChallengesData.filter((challenge) => challenge.level === 2).map((challenge, index) => (
                                        <ChallengeCard key={index} challenge={challenge} />
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

function ChallengeCard({ challenge }) {
    const router = useRouter();
    

    return (
        <article onClick={() => router.push('/challenges/' + challenge.id)} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base leading-6 max-md:mt-6">
                <div className="flex flex-col pb-7 w-full bg-orange-100 rounded-3xl">
                    {/* <div className="items-center px-16 pt-5 pb-28 bg-white rounded-3xl text-zinc-600 max-md:px-5"> Challenge <br /> cover img{" "} </div> */}
                    <h2 className="mx-6 mt-6 text-xl font-semibold tracking-wide leading-8 text-stone-950 max-md:mx-2.5"> {challenge.name} </h2>
                    <p className="mx-6 mt-3 text-zinc-600 max-md:mx-2.5"> {challenge.summary} </p>
                    <div className="flex gap-2 mx-6 mt-3 font-medium tracking-normal text-center text-yellow-800 leading-[150%] max-md:mx-2.5">
                        {
                          challenge.labels.map((label, index) => (
                            <div key={index} className="justify-center px-7 py-1 whitespace-nowrap bg-orange-200 rounded max-md:px-5"> {label} </div>
                          ))
                        }
                        <div className="justify-center px-4 py-1 bg-orange-200 rounded"> Level {challenge.index} </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ChallengesPage;
