"use client";
import BackLink from "@/components/Back";

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Button, Stack, SvgIcon, Typography } from "@mui/material";
import RighArrowSvg from "@/assets/svgs/solidity/right-arrow.svg";
import TriangleLeftSvg from "@/assets/svgs/common/triangle-left.svg";

const PageButton = (props) => {
  const { slug: lessonId } = useParams();

  const [pagination, setPagination] = useState({
    prevLesson: null,
    nextLesson: null,
  });

  useEffect(() => {
    fetch(`/data/solidity/markdownData.json`)
      .then((res) => res.json())
      .then((data) => {
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
        setPagination({ prevLesson, nextLesson });
      });
  }, [lessonId]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      px="50px"
      {...props}
    >
      {pagination.prevLesson ? (
        <Link
          className="flex items-center gap-[20px] text-[32px]"
          href={`/solidity/${pagination.prevLesson.id}`}
        >
          <SvgIcon
            sx={{ fontSize: "32px", color: "transparent" }}
            component={TriangleLeftSvg}
            inheritViewBox
          ></SvgIcon>
          <span>{pagination.prevLesson.name}</span>
        </Link>
      ) : (
        <BackLink></BackLink>
      )}
      {pagination.nextLesson ? (
        <Link
          className="flex items-center gap-[20px] text-[32px]"
          href={`/solidity/${pagination.nextLesson.id}`}
        >
          <span>Next lesson: {pagination.nextLesson.name}</span>
          <SvgIcon
            sx={{ fontSize: "32px", color: "transparent" }}
            component={RighArrowSvg}
            inheritViewBox
          ></SvgIcon>
        </Link>
      ) : (
        <p className="text-[32px]">End of Challenges</p>
      )}
    </Stack>
  );
};

export default PageButton;
