import Navigation from "@/components/Navigation";
import data from "../../markdownData.json";

const LessonNavigation = async (props) => {
  const { lessonId } = props;

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
