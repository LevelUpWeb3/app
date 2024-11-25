import Navigation from "@/components/Navigation";
import data from "../markdownData.json";

const ChallengeNavigation = async (props) => {
  const { challengeId } = props;

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
