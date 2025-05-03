// LessonProgress.tsx
"use client";

import { useState, useEffect } from "react";
import { Typography, Box, LinearProgress } from "@mui/material";
import useProgressStore from "@/stores/processStore";
import { useParams } from "next/navigation";

export default function LessonProgress() {
  const { lessons } = useProgressStore();
  const { slug: lessonId } = useParams() as { slug: string };
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const lesson = lessons[`vyper-${lessonId}`];
    if (lesson) {
      setProgress(lesson * 20);
    }
  }, [lessons, lessonId]);

  // if (!progress) {
  //   return null;
  // }

  return (
    <Box>
      <Typography
        sx={{
          fontSize: ["16px"],
          mb: "1.4rem",
        }}
      >
        Progress:{" "}
        <Typography component="span" sx={{ fontWeight: 500 }}>
          {progress}
        </Typography>
        %
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          width: ["100%", 460],
          height: 6,
          borderRadius: 0,
          backgroundColor: "#D9D9D9",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#000",
          },
        }}
      />
    </Box>
  );
}
