import PureChallengeSubmit from "./PureChallengeSubmit";
import CodeChallengeSubmit from "./CodeChallengeSubmit";

const ChallengeSubmit = (props) => {
  const { type } = props;
  if (type === "normal") {
    return <PureChallengeSubmit></PureChallengeSubmit>;
  }
  return <CodeChallengeSubmit></CodeChallengeSubmit>;
};

export default ChallengeSubmit;
