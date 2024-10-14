"use client";

import {
  getChallengeList,
  type GetChallengeListReturnType,
} from "@/app/events/ethcon-korea/actions";
import {
  ErrorMsg,
  EthconPageLayout,
  LoadingMsg,
} from "@/app/events/ethcon-korea/components";
import { SessionContext } from "@/app/events/ethcon-korea/config";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  memo,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CHALLENGE_LEVEL_LIST = [
  "All levels",
  "Beginner",
  "Intermediate",
  "Investigation",
];

const ChallengeList_ = ({ category }: { category: string }) => {
  const { sessions } = useContext(SessionContext);
  const [isError, setIsError] = useState(false);
  const [challengeList, setChallengeList] =
    useState<GetChallengeListReturnType>([]);

  useEffect(() => {
    getChallengeList(sessions?.session)
      .then(setChallengeList)
      .catch((e) => {
        console.error(e);
        setIsError(true);
      });
  }, [sessions?.session]);

  const filteredData = useMemo(
    () =>
      challengeList.filter(
        (item) => category === "All levels" || `${item.category}` === category,
      ),
    [category, challengeList],
  );

  if (isError || !challengeList)
    return <ErrorMsg message="Failed to get challenge list" />;

  return filteredData?.map((item, index) => (
    <Link key={index} href={`/events/ethcon-korea/${item.id}`}>
      <div className="relative h-full rounded-2xl bg-[#FFF0DD] font-semibold hover:cursor-pointer">
        {item.solved_by_me && (
          <CheckIcon className="absolute right-2 top-2 rounded-full bg-green-200 text-green-700 opacity-70" />
        )}

        <div
          className={`flex h-full flex-col items-start justify-between gap-6 px-4 py-6 text-4xl ${item.solved_by_me ? "opacity-40" : ""}`}
        >
          <p>{item.name}</p>

          <div className="flex flex-col gap-4 text-center">
            <p className="text-md font-normal text-gray-600">
              {item.value} points
            </p>
            <p className="rounded-md bg-[#FFDEB5] px-2 py-1 text-md font-semibold text-[#84623A]">
              {item.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};
const ChallengeList = memo(ChallengeList_);

const BlockUntilStart = ({ children }) => {
  const [debug, setDebug] = useState(false);
  const [remain, setRemain] = useState(0);
  const searchParams = useSearchParams();
  const isDebug = searchParams.get("debug");
  const start = useMemo(() => {
    return new Date(1729328400000);
  }, []);

  useEffect(() => {
    setRemain((start.getTime() - new Date().getTime()) / 1000);
    const interval = setInterval(() => {
      setRemain((start.getTime() - new Date().getTime()) / 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  useEffect(() => {
    if (!isDebug) return;
    window.sessionStorage.setItem("debug", "true");
    setDebug(true);
  }, [isDebug]);

  useEffect(() => {
    if (window.sessionStorage.getItem("debug") === "true") setDebug(true);
  }, []);

  if (!debug && new Date() < start) {
    if (remain === 0) return null;

    if (remain < 86400) {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <p className="text-6xl font-bold">Coming Soon ...</p>
          <p className="text-6xl font-bold">{`${Math.floor(remain / 3600)} hrs ${Math.floor((remain % 3600) / 60)} min ${Math.floor(remain % 60)} secs letf...`}</p>
        </div>
      );
    } else {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <p className="text-6xl font-bold">Coming Soon ...</p>
          <p className="text-6xl font-bold">{`${start.toISOString().replace("T", " ").split(".")[0]} KST`}</p>
        </div>
      );
    }
  }

  return children;
};

export default function EthconMainPage() {
  const [selectedCateogry, setSelectedCategory] = useState(
    CHALLENGE_LEVEL_LIST[0],
  );

  return (
    <Suspense fallback={<LoadingMsg />}>
      <BlockUntilStart>
        <EthconPageLayout>
          <div className="flex justify-between gap-14 px-10 py-20">
            <div className="flex w-1/5 flex-col text-4xl font-semibold">
              {CHALLENGE_LEVEL_LIST.map((level, index) =>
                level === selectedCateogry ? (
                  <p
                    className="rounded-lg bg-black px-10 py-2 text-white hover:cursor-pointer"
                    key={index}
                  >
                    {level}
                  </p>
                ) : (
                  <p
                    className="rounded-lg px-10 py-2 hover:cursor-pointer"
                    key={index}
                    onClick={() => setSelectedCategory(level)}
                  >
                    {level}
                  </p>
                ),
              )}
            </div>
            <div className="grid w-4/5 grid-cols-4 gap-10">
              <ChallengeList category={selectedCateogry} />
            </div>
          </div>
        </EthconPageLayout>
      </BlockUntilStart>
    </Suspense>
  );
}
