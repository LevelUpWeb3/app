"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import Editor from "./Editor";
import { useParams } from "next/navigation";
import ExerciseTabs from "./ExerciseTabs";

import { CODE_EXERCISES } from "@/constants/solidity/code-exercises";

const IdeEditor = () => {
  const { slug: lessonKey } = useParams();

  const [exercise, setExercise] = useState<string>(
    Object.keys(CODE_EXERCISES[lessonKey])[0],
  );

  const [completedExercise, setCompletedExercise] = useState<number>(0);

  const handleChangeExercise = () => {
    setExercise();
  };

  const handleCompleteExercise = (value: number) => {
    setCompletedExercise(value);
    setExercise(`exercise${value + 1}`);
  };

  return (
    <Box>
      <ExerciseTabs
        value={exercise}
        onChange={handleChangeExercise}
        completedExercise={completedExercise}
      ></ExerciseTabs>
      <Editor exercise={exercise} onComplete={handleCompleteExercise} />
    </Box>
  );
};

export default IdeEditor;
