"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Editor from "./Editor";
import { useParams } from "next/navigation";
import ExerciseTabs from "./ExerciseTabs";

import { CODE_EXERCISES } from "@/constants/vyper/code-exercises";

const EditorPanel = (props) => {
  const { data } = props;
  const { slug: lessonId } = useParams();

  const [exercise, setExercise] = useState<string>(
    Object.keys(CODE_EXERCISES[lessonId as string])[0],
  );

  const [completedExerciseNumber, setCompletedExerciseNumber] =
    useState<number>(0);

  const handleChangeExercise = (value) => {
    setExercise(value);
  };

  const handleCompleteExercise = (
    value: number,
    resetCompletedNumber: boolean = true,
  ) => {
    if (resetCompletedNumber) {
      setCompletedExerciseNumber(value);
    }
    setExercise(`exercise${value + 1}`);
  };

  return (
    <Box sx={{ width: ["100vw", "100vw", "auto"] }}>
      <ExerciseTabs
        value={exercise}
        onChange={handleChangeExercise}
        completedExerciseNumber={completedExerciseNumber}
      ></ExerciseTabs>
      <Editor
        exercise={exercise}
        completedExerciseNumber={completedExerciseNumber}
        onComplete={handleCompleteExercise}
        data={data}
      />
    </Box>
  );
};

export default EditorPanel;
