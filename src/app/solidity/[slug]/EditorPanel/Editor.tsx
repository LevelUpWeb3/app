"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import CodeEditor from "./CodeEditor";
import DiffEditorComponent from "./DiffEditor";
import SubmitButton from "./SubmitButton";
import Modal from "./Modal";
import { CODE_SOLUTIONS } from "@/constants/solidity/code-solutions";
import { CODE_EXERCISES } from "@/constants/solidity/code-exercises";

import { Box, Stack } from "@mui/material";

import Button from "@/components/Button";
import EditorTooltip from "@/components/EditorTooltip";

const Editor = ({
  data,
  exercise = "exercise1",
  completedExerciseNumber,
  onComplete,
}) => {
  const [code, setCode] = useState("");
  const [tries, setTries] = useState<number>(0);
  const [editorType, setEditorType] = useState<"code" | "solution">("code");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { slug } = useParams();

  const lessonId = slug as string;

  const allowViewSolution = useMemo(() => tries > 2, [tries]);

  const { codeSolution, codeTemplate } = useMemo(() => {
    if (CODE_SOLUTIONS[lessonId] && CODE_EXERCISES[lessonId]) {
      return {
        codeSolution: CODE_SOLUTIONS[lessonId][exercise],
        codeTemplate: CODE_EXERCISES[lessonId][exercise],
      };
    }
    return { codeSolution: "", codeTemplate: "" };
  }, [lessonId, exercise]);

  const handleSubmitCode = (isCorrect: boolean) => {
    if (isCorrect) {
      const currentExerciseNumber = parseInt(exercise.replace("exercise", ""));
      if (currentExerciseNumber > completedExerciseNumber) {
        onComplete(currentExerciseNumber);
      } else {
        onComplete(currentExerciseNumber, false);
      }

      setTries(0);
    } else {
      setTries(tries + 1);
    }
  };

  const handleToggleEditorType = (editorType) => {
    setEditorType(editorType);
    setTries(0);
  };

  useEffect(() => {
    if (completedExerciseNumber === 5) {
      setIsModalOpen(true);
    }
  }, [completedExerciseNumber]);

  return (
    <Box sx={{ position: "relative", backgroundColor: "#232323" }}>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={data.name}
      />
      {editorType === "solution" ? (
        <DiffEditorComponent code={code} codeSolution={codeSolution} />
      ) : (
        <CodeEditor
          codeTemplate={codeTemplate}
          code={code}
          codeSolution={codeSolution}
          onChange={(code) => setCode(code || "")}
          onSubmission={handleSubmitCode}
        />
      )}
      <Stack
        direction="row"
        spacing="15px"
        sx={{
          position: "absolute",
          bottom: "50px",
          width: "100%",
          px: "60px",
        }}
      >
        {editorType === "solution" ? (
          <EditorTooltip title="Back to code" placement="top">
            <Box sx={{ width: "50%" }} key="code">
              <Button
                variant="contained"
                size="large"
                onClick={() => handleToggleEditorType("code")}
                sx={{
                  width: "100% !important",
                  opacity: 0.2,
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                Code
              </Button>
            </Box>
          </EditorTooltip>
        ) : (
          <>
            <EditorTooltip
              key="answer"
              title="You can only view this solution once"
              placement="top"
            >
              <Box
                key="answer"
                sx={{
                  width: "50%",
                  pointerEvents: allowViewSolution ? "all" : "none",
                }}
              >
                <Button
                  variant="contained"
                  disabled={!allowViewSolution}
                  size="large"
                  sx={{
                    visibility: allowViewSolution ? "visible" : "hidden",
                    width: "100% !important",
                    opacity: 0.2,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                  onClick={() => handleToggleEditorType("solution")}
                >
                  Answers
                </Button>
              </Box>
            </EditorTooltip>
            <SubmitButton
              sx={{ width: "50% !important" }}
              code={code}
              codeSolution={codeSolution}
              onSubmission={handleSubmitCode}
            />
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Editor;
