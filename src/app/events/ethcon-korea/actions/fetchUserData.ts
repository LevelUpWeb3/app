import { fetchBase } from ".";

type GetUserDataReturnType = {
  oauthId: null;
  affiliation: null;
  teamId: null;
  website: null;
  name: string;
  email: `0x${string}`;
  bracketId: null;
  country: null;
  fields: [];
  language: null;
  id: number;
};

type SnakeCaseGetUserDataType = {
  oauth_id: null;
  affiliation: null;
  team_id: null;
  website: null;
  name: string;
  email: `0x${string}`;
  bracket_id: null;
  country: null;
  fields: [];
  language: null;
  id: number;
};

type GetUserDataResponseType = {
  success: boolean;
  data: SnakeCaseGetUserDataType;
};

export async function getUserData(
  session: string,
): Promise<GetUserDataReturnType> {
  const result = await fetchBase<GetUserDataResponseType>(
    session,
    undefined,
    "/api/v1/users/me",
    {
      method: "GET",
    },
  );

  if (!result.success) throw Error("failed to get username");

  return {
    oauthId: result.data.oauth_id,
    affiliation: result.data.affiliation,
    teamId: result.data.team_id,
    website: result.data.website,
    name: result.data.name,
    email: result.data.email,
    bracketId: result.data.bracket_id,
    country: result.data.country,
    fields: result.data.fields,
    language: result.data.language,
    id: result.data.id,
  };
}

export async function updateUserName(
  session: string,
  session2: string,
  username: string,
): Promise<GetUserDataReturnType> {
  const result = await fetchBase<GetUserDataResponseType>(
    session,
    session2,
    "/api/v1/users/me",
    {
      method: "PATCH",
      body: JSON.stringify({
        name: username,
        fields: [],
      }),
    },
  );

  if (!result.success) throw Error("failed to get update username");

  return {
    oauthId: result.data.oauth_id,
    affiliation: result.data.affiliation,
    teamId: result.data.team_id,
    website: result.data.website,
    name: result.data.name,
    email: result.data.email,
    bracketId: result.data.bracket_id,
    country: result.data.country,
    fields: result.data.fields,
    language: result.data.language,
    id: result.data.id,
  };
}
