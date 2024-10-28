import { headers } from "next/headers";

import Link from "next/link";
import { Stack } from "@mui/material";
import BackLink from "@/components/Back";

import RighArrowSvg from "@/assets/svgs/solidity/right-arrow.svg";

const ChallengeNavigation = async (props) => {
  const { challengeId, ...restProps } = props;

  const { origin } = new URL(headers().get("x-url")!);
  let pagination = { prevLesson: null, nextLesson: null };
  const data = await fetch(`${origin}/data/challenges/markdownData.json`).then(
    (res) => res.json(),
  );
  const currentLessonIndex =
    data.find((lesson) => lesson.id === challengeId).index - 1;
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
      sx={{
        px: "50px",
        gridColumn: "span 2",
        backgroundColor: "#FFEEDA80",
        py: "56px",
      }}
      {...restProps}
    >
      <BackLink></BackLink>
      {pagination.nextLesson ? (
        <Link
          className="flex items-center gap-[20px] text-[32px] text-[#101010] hover:text-[#2C2C2C]"
          href={`/solidity/${pagination.nextLesson.id}`}
        >
          <span>Next challenge: {pagination.nextLesson.name}</span>
          <RighArrowSvg></RighArrowSvg>
        </Link>
      ) : (
        <p className="text-[32px]">End of Challenges</p>
      )}
    </Stack>
  );
};

export default ChallengeNavigation;
