"use client";

import { getUserData, updateUserName } from "@/app/events/ethcon-korea/actions";
import { JoinButton } from "@/app/events/ethcon-korea/components";
import { SessionContext } from "@/app/events/ethcon-korea/config";
import { useContext, useEffect, useCallback, useRef, useState } from "react";
import { useAccount } from "wagmi";
import {
  ErrorToastMsg,
  LoadingMsg,
} from "@/app/events/ethcon-korea/components";

const AuthWrapper = ({ children }) => {
  const { sessions, setSessions } = useContext(SessionContext);
  const [invalid, setInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isInProgress, setIsInProgress] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isConnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isConnected) return;

    const sessionAddress = window.sessionStorage.getItem("address");
    if (address !== sessionAddress) {
      window.sessionStorage.removeItem("session");
      window.sessionStorage.removeItem("session2");
      window.sessionStorage.removeItem("address");
      setSessions({
        address: undefined,
        session: undefined,
        session2: undefined,
      });
    }
  }, [isConnected, address, setSessions]);

  useEffect(() => {
    if (!sessions?.session) return;

    getUserData(sessions?.session)
      .then((userData) => setName(userData.name))
      .catch((e) => {
        console.error(e);
      });
  }, [sessions]);

  useEffect(() => {
    const session = window.sessionStorage.getItem("session");
    const session2 = window.sessionStorage.getItem("session2");
    const sessionAddress = window.sessionStorage.getItem("address");
    if (session && session2 && sessionAddress) {
      setSessions({
        address: sessionAddress,
        session: session,
        session2: session2,
      });
    }
  }, [setSessions]);

  const handleSubmit = useCallback(() => {
    if (!inputRef?.current || !sessions?.session || !sessions?.session2) return;

    setIsInProgress(true);
    updateUserName(
      sessions?.session,
      sessions?.session2,
      inputRef.current.value,
    )
      .then((userData) => {
        setName(userData.name);
        setIsInProgress(false);
      })
      .catch((e) => {
        console.error(e);
        setIsInProgress(false);
        setInvalid(true);
        setErrorMsg("failed to update username");
        setTimeout(() => setInvalid(false), 3000);
      });
  }, [inputRef, sessions?.session, sessions?.session2]);

  if (isLoading) return null;

  if (name?.length === 42 && name?.startsWith("0x")) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        {invalid && <ErrorToastMsg message={errorMsg} />}
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-bold">Please enter username</p>
          <input
            type="text"
            ref={inputRef}
            className="rounded-lg border border-black text-center text-lg"
          />

          <button
            onClick={handleSubmit}
            disabled={isInProgress}
            className="rounded-lg border border-black px-4 text-lg font-bold hover:bg-black hover:text-white"
          >
            <div className="flex h-14 items-center justify-center">
              {isInProgress ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="me-3 inline w-6 animate-spin text-black"
                  viewBox="0 0 100 101"
                  fill="fill"
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
      </div>
    );
  }

  return sessions?.session ? (
    <div>{children}</div>
  ) : (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-[350px] items-center justify-center">
        <JoinButton />
      </div>
    </div>
  );
};
export default AuthWrapper;
