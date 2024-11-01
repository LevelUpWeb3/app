import { fetchBase } from ".";

type Challenge = {
  id: number;
  type: string;
  name: string;
  value: number;
  solves: number;
  solved_by_me: boolean;
  category: string;
  tags: string[];
  template: string;
  script: string;
};

type GetChallengeListResponseType = {
  success: boolean;
  data: Challenge[];
};

type ChallengeBrief = Pick<
  Challenge,
  "id" | "name" | "value" | "category" | "solved_by_me"
>;

export type GetChallengeListReturnType = ChallengeBrief[];

export async function getChallengeList(
  session: string | undefined,
): Promise<GetChallengeListReturnType> {
  const result = await fetchBase<GetChallengeListResponseType>(
    session,
    undefined,
    "/api/v1/challenges",
  );

  if (!result.success) throw Error("failed to get challenge list");
  if (result.data.length === 0) return [];

  const data = result.data.map<ChallengeBrief>((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
    solved_by_me: item.solved_by_me,
  }));

  return [
    ...data.filter((item) => item.category === "Beginner"),
    ...data.filter((item) => item.category === "Intermediate"),
    ...data.filter((item) => item.category === "Investigation"),
  ];
}

export type ChallengeDetailType = Omit<Challenge, "template, script"> & {
  attempts: number;
  connection_info: string | null;
  decay: number;
  description: string;
  files: string[];
  funcition: string;
  initial: number;
  max_attempts: number;
  minimum: number;
  next_id: number | null;
  state: string;
  view: string;
  markdown: object;
};

type GetChallengeDetailResponseType = {
  success: boolean;
  data: ChallengeDetailType;
};

export type GetChallengeDetailReturnType = ChallengeDetailType;

export async function getChallengeDetail(
  session: string,
  id: number,
): Promise<GetChallengeDetailReturnType> {
  const result = await fetchBase<GetChallengeDetailResponseType>(
    session,
    undefined,
    `/api/v1/challenges/${id}`,
  );

  if (!result.success) throw Error("failed to get challenge detail");

  let tmp = result.data.view.split("\n").slice(28, -20);
  tmp = [...tmp.slice(0, 1), ...tmp.slice(5)];
  let view = [...tmp.slice(0, -48), "\t\t</div>"].join("\n");
  for (let filename of result.data.files) {
    view = view.replace(filename, `https://test.onchain.kr${filename}`);
  }

  view = view.replace(
    "btn ",
    "btn border-2 border-black rounded-lg py-2 font-bold ",
  );

  return {
    ...result.data,
    category:
      result.data.category.charAt(0).toUpperCase() +
      result.data.category.slice(1),
    view,
  };
}
