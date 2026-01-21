import { fetchBase } from ".";

type SubmitFlagResultType = {
  status: "correct" | "Incorrect";
  message: "Correct" | "Incorrect";
};

type SubmitFlagResponseType = {
  success: boolean;
  data: SubmitFlagResultType;
};

type SubmitFlagReturnType = boolean;

export default async function submitFlag(
  session: string,
  session2: string,
  id: number,
  flag: string,
): Promise<SubmitFlagReturnType> {
  const result = await fetchBase<SubmitFlagResponseType>(
    session,
    session2,
    "/api/v1/challenges/attempt",
    {
      method: "POST",
      body: JSON.stringify({
        challenge_id: id,
        submission: flag,
      }),
    },
  );

  if (!result.success) throw Error("failed to submit flag");

  return result.data.status === "correct";
}
