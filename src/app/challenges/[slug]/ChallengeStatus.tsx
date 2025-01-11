"use client";

import { SvgIcon, Stack } from "@mui/material";
import CompletedSvg from "@/assets/svgs/challenge/completed.svg";
import useProgressStore from "@/stores/processStore";
import { useMemo } from "react";
import { useParams } from "next/navigation";

const ChallengeStatus = (props) => {
  const { slug } = useParams() as { slug: string };

  const { challenges } = useProgressStore();

  const isCompleted = useMemo(() => {
    return !!challenges[slug];
  }, [challenges, slug]);

  return (
    <Stack flex="1" alignItems="flex-end">
      {isCompleted && (
        <SvgIcon
          sx={{ fontSize: "134px", color: "transparent" }}
          component={CompletedSvg}
          inheritViewBox
        ></SvgIcon>
      )}
    </Stack>
  );
};

export default ChallengeStatus;
