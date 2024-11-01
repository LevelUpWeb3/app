import { fetchBase } from ".";

type SolveType = {
  account_id: number;
  challenge_id: number;
  date: string;
  team_id: null | number;
  user_id: number;
  value: number;
};

type ScoreboardEntryType = {
  id: number;
  account_url: string;
  name: string;
  score: number;
  bracket_id: number | null;
  bracket_name: string | null;
  solves: SolveType[];
};

export type ScoreboardType = {
  [key: string]: ScoreboardEntryType;
};

type GetScoreboardResponseType = {
  success: boolean;
  data: ScoreboardType;
};

export default async function getScoreboardData(): Promise<ScoreboardType> {
  const result = await fetchBase<GetScoreboardResponseType>(
    undefined,
    undefined,
    "/api/v1/scoreboard/top/10",
  );

  if (!result.success) throw Error("failed to get scoreboard");

  return result.data;
}
