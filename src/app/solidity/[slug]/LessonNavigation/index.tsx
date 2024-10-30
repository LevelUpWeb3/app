import { headers } from "next/headers";
import Navigation from "@/components/Navigation";

const LessonNavigation = async (props) => {
  const { lessonId } = props;

  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/solidity/markdownData.json`).then(
    (res) => res.json(),
  );
  return (
    <Navigation
      id={lessonId}
      data={data}
      baseURL="/solidity"
      label="lesson"
    ></Navigation>
  );
};

export default LessonNavigation;
