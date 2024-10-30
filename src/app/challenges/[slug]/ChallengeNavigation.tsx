import { headers } from "next/headers";

import Navigation from "@/components/Navigation";

const ChallengeNavigation = async (props) => {
  const { challengeId } = props;

  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/challenges/markdownData.json`).then(
    (res) => res.json(),
  );

  return (
    <Navigation
      id={challengeId}
      data={data}
      baseURL="/challenges"
      label="challenge"
    ></Navigation>
  );
};

export default ChallengeNavigation;
