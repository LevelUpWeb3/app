"use client";

import {
  getChallengeDetail,
  submitFlag,
  type ChallengeDetailType,
} from "@/app/events/ethcon-korea/actions";
import { ErrorMsg, ErrorToastMsg } from "@/app/events/ethcon-korea/components";
import { SessionContext } from "@/app/events/ethcon-korea/config";
import Button from "@/components/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ethconBannerBase64 from "./ethcon-banner-base64";

const ChallengeDetail_ = ({ data }: { data: ChallengeDetailType }) => {
  const text = `I am excited to take on the ${data.name} challenge in Level Up! Join me and let's level up together at levelup.xyz/! @ethconkr`;

  return (
    <div className="flex flex-row justify-between">
      <div className="relative w-[50%]">
        <Link href="https://2024.ethcon.kr/">
          <Image alt="ethcon-banner" layout="fill" src={ethconBannerBase64} />
        </Link>
      </div>

      <div className="flex min-w-[35%] flex-col justify-between gap-4">
        <h1 className="text-center text-[4rem] leading-[56px] tracking-wide text-stone-950">
          {data.name}
        </h1>
        <span className="rounded-lg bg-[#FFDEB5] text-center text-lg font-semibold text-[#84623A]">
          {data.category}
        </span>
        <Button
          width="100%"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
        >
          Share
        </Button>
      </div>
    </div>
  );
};
const ChallengeDetail = memo(ChallengeDetail_);

export default function ChallengeDetailsPage({
  params,
}: {
  params: { challengeId: number };
}) {
  const { sessions } = useContext(SessionContext);
  const [isError, setIsError] = useState(false);
  const [challengeDetail, setChallengeDetail] = useState<ChallengeDetailType>();
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [solved, setSolved] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const highlightJsScript = document.createElement("script");
    highlightJsScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js";
    highlightJsScript.async = false;
    document.body.appendChild(highlightJsScript);

    const solidityLanguageScript = document.createElement("script");
    solidityLanguageScript.src =
      "https://cdn.jsdelivr.net/npm/highlightjs-solidity@2.0.6/dist/solidity.min.js";
    solidityLanguageScript.async = false;
    document.body.appendChild(solidityLanguageScript);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!sessions?.session || !sessions?.session2 || !inputRef?.current) return;

    setIsLoading(true);
    submitFlag(
      sessions?.session,
      sessions?.session2,
      params.challengeId,
      inputRef.current.value,
    )
      .then((result) => {
        if (!result) {
          throw Error("flag is invalid");
        }
        setIsLoading(false);
        setSolved(true);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
        setInvalid(true);
        setTimeout(() => {
          setInvalid(false);
        }, 2000);
      });
  }, [sessions?.session, sessions?.session2, inputRef, params.challengeId]);

  useEffect(() => {
    if (!sessions?.session) return;

    getChallengeDetail(sessions?.session, params.challengeId)
      .then((data) => {
        setChallengeDetail(data);
      })
      .catch((e) => {
        console.error(e);
        setIsError(true);
      });
  }, [sessions?.session, params.challengeId]);

  useEffect(() => {
    if (!challengeDetail) return;
    setSolved(challengeDetail.solved_by_me);
  }, [challengeDetail]);

  useEffect(() => {
    const dom = document.getElementsByClassName("language-solidity");
    if (!dom || !window.hljs) return;

    window.hljs.highlightAll();
  });

  if (isError) return <ErrorMsg message="Failed to get challenge detail" />;
  if (!challengeDetail) return null;

  return (
    <div className="relative flex h-[80vh] w-3/5 flex-col">
      {invalid && <ErrorToastMsg message="The flag is invalid!" />}

      <div className="flex gap-3">
        <Link href="/events/ethcon-korea" className="flex items-center text-md">
          <ArrowBackIosIcon
            className="text-sm"
            sx={{
              fontSize: "small",
            }}
          />
          <p>Back to Challenges</p>
        </Link>
      </div>

      <div className="mt-12">
        {challengeDetail && <ChallengeDetail data={challengeDetail} />}
      </div>

      <div className="my-5 border border-black" />

      <div className="markdown-body">
        {challengeDetail.view && (
          <div
            dangerouslySetInnerHTML={{
              __html: challengeDetail.view,
            }}
          />
        )}
      </div>

      <div className="mt-4 flex flex-row justify-center gap-4 gap-x-2">
        {solved ? (
          <p className="text-6xl font-bold text-green-700">
            ** YOU HAVE ALREADY SOLVED THIS CHALLENGE **
          </p>
        ) : (
          <div className="flex w-screen items-center justify-center gap-4">
            <input
              className="w-full rounded-lg border border-black text-center text-lg"
              placeholder="Please enter FLAG"
              ref={inputRef}
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-[10%] rounded-lg border border-black px-4 text-lg font-bold hover:bg-black hover:text-white"
            >
              <div className="flex items-center justify-center">
                {isLoading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="me-3 inline w-6 animate-spin text-black"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <p>Submit</p>
                )}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
