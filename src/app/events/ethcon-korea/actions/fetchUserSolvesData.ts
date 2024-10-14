import { fetchBase } from ".";

type UserSolvesType = {
  id: number;
  user: {
    name: string;
    id: number;
  };
  team: null | string;
  challenge: {
    category: string;
    name: string;
    value: number;
    id: number;
  };
  challenge_id: number;
  date: string;
  type: "collect" | "incollect";
};

type UserScoreResponseType = {
  success: boolean;
  data: UserSolvesType[];
};

export default async function getUserScore(
  userId: number,
  session: string,
): Promise<number> {
  const result = await fetchBase<UserScoreResponseType>(
    session,
    undefined,
    `/api/v1/users/${userId}/solves`,
  );

  if (!result.success) throw Error("failed to get score");

  return result.data.reduce((acc, curr) => acc + curr.challenge.value, 0);
}
