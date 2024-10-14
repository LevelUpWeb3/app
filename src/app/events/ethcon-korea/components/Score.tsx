import { getUserData, getUserScore } from "@/app/events/ethcon-korea/actions";
import { useEffect, useState } from "react";

export default function Score({ session }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    getUserData(session)
      .then((userData) => getUserScore(userData.id, session))
      .then(setScore);
  }, [session]);

  return (
    <p className="flex w-1/2 items-center justify-center rounded-lg bg-[#FFDEB5] text-center text-lg font-semibold">
      {score} Points
    </p>
  );
}
