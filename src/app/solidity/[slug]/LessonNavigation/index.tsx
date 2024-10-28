import Link from "next/link";
import { headers } from "next/headers";
import { Stack } from "@mui/material";

import BackLink from "@/components/Back";

import RighArrowSvg from "@/assets/svgs/solidity/right-arrow.svg";
import TriangleLeftSvg from "@/assets/svgs/common/triangle-left.svg";

const LessonNavigation = async (props) => {
  const { lessonId } = props;
  const { origin } = new URL(headers().get("x-url")!);
  let pagination = { prevLesson: null, nextLesson: null };
  const data = await fetch(`${origin}/data/solidity/markdownData.json`).then(
    (res) => res.json(),
  );
  const currentLessonIndex =
    data.find((lesson) => lesson.id === lessonId).index - 1;
  let prevLesson = null;
  let nextLesson = null;
  if (currentLessonIndex > 0) {
    prevLesson = data[currentLessonIndex - 1];
  }
  if (currentLessonIndex < data.length - 1) {
    nextLesson = data[currentLessonIndex + 1];
  }
  pagination = { prevLesson, nextLesson };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      px="50px"
      {...props}
    >
      {/* {pagination.prevLesson ? (
        <Link
          className="flex items-center gap-[20px] text-[32px] text-[#101010] hover:text-[#2C2C2C]"
          href={`/solidity/${pagination.prevLesson.id}`}
        >
          <TriangleLeftSvg></TriangleLeftSvg>
          <span>Prev lesson: {pagination.prevLesson.name}</span>
        </Link>
      ) : (
       
      )} */}
      <BackLink></BackLink>
      {pagination.nextLesson ? (
        <Link
          className="flex items-center gap-[20px] text-[32px] text-[#101010] hover:text-[#2C2C2C]"
          href={`/solidity/${(pagination.nextLesson as any).id}`}
        >
          <span>Next lesson: {(pagination.nextLesson as any).name}</span>
          <RighArrowSvg></RighArrowSvg>
        </Link>
      ) : (
        <p className="text-[32px]">End of Challenges</p>
      )}
    </Stack>
  );
};

export default LessonNavigation;
