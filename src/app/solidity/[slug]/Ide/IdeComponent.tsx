"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CodeEditor from "./CodeEditor";
import DiffEditorComponent from "./DiffEditor";
import SubmitButton from "./SubmitButton";
import Modal from "./Modal";
import { CODE_SOLUTIONS } from "@/constants/solidity/code-solutions";
import { CODE_EXERCISES } from "@/constants/solidity/code-exercises";

import { Box, Button, Tooltip } from "@mui/material";

const IdeComponent = ({ exercise, setCompletedExercise }) => {
  const [code, setCode] = useState("");
  const [tries, setTries] = useState<number>(0);
  const [solutionViewer, setSolutionViewer] = useState<boolean>(false);
  const [showSolutionButton, setShowSolutionButton] = useState<boolean>(false);
  const [completedExerciseNumber, setCompletedExerciseNumber] =
    useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { slug } = useParams();
  const slugParam = slug as string;

  let codeSolution, codeTemplate;
  if (
    CODE_SOLUTIONS[slugParam.toLowerCase()] &&
    CODE_EXERCISES[slugParam.toLowerCase()]
  ) {
    codeSolution = CODE_SOLUTIONS[slugParam.toLowerCase()][exercise];
    codeTemplate = CODE_EXERCISES[slugParam.toLowerCase()][exercise];
  }

  const submissionHandler = (isCorrect: boolean) => {
    console.log("isCorrect", isCorrect);
    if (isCorrect) {
      setCompletedExercise((prevCompletedExercise) => {
        const currentExerciseNumber = parseInt(
          exercise.replace("exercise", "")
        );
        console.log("current exercise:", currentExerciseNumber);
        if (currentExerciseNumber > prevCompletedExercise) {
          setCompletedExerciseNumber(currentExerciseNumber);
          return currentExerciseNumber;
        }
        console.log("previous exercise:", prevCompletedExercise);
        return prevCompletedExercise;
      });
      setSolutionViewer(false);
      setTries(0);
    } else {
      setTries(() => {
        const newTries = tries + 1;
        if (newTries > 2) {
          setSolutionViewer(true);
        }
        return newTries;
      });
    }
  };

  const handleSolutionButtonClick = (reveal: boolean) => {
    setShowSolutionButton((prevShowed) => !prevShowed);
    setSolutionViewer(reveal);
    setTries(0);
  };

  useEffect(() => {
    if (completedExerciseNumber === 5) {
      setIsModalOpen(true);
    }
  }, [completedExerciseNumber]);

  return (
    <Box>
      <Modal
        isOpen={isModalOpen}
        isClose={() => setIsModalOpen(false)}
        code={code}
      />
      {showSolutionButton ? (
        <Box position="relative">
          <DiffEditorComponent
            code={code}
            codeSolution={codeSolution}
          />
          <Box
            position="absolute"
            left={4}
            bottom={4}
          >
            <Tooltip title="Back to code">
              <Button
                onClick={() => handleSolutionButtonClick(false)}
                variant="contained"
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  opacity: "0.3",
                }}
              >
                Code
              </Button>
            </Tooltip>
          </Box>
        </Box>
      ) : (
        <Box position="relative">
          <CodeEditor
            codeTemplate={codeTemplate}
            code={code}
            codeSolution={codeSolution}
            onChange={(code) => setCode(code || "")}
            onSubmission={(isCorrect) => {
              submissionHandler(isCorrect);
            }}
          />
          <Box
            position="absolute"
            left={4}
            bottom={4}
          >
            {solutionViewer && (
              <Tooltip title="Tip: You can only view this solution once">
                <Button
                  onClick={() => handleSolutionButtonClick(true)}
                  variant="contained"
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    opacity: "0.3",
                  }}
                >
                  Solution
                </Button>
              </Tooltip>
            )}
          </Box>
          <Box
            position="absolute"
            right={4}
            bottom={4}
          >
            <SubmitButton
              code={code}
              codeSolution={codeSolution}
              onSubmission={(isCorrect) => {
                submissionHandler(isCorrect);
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default IdeComponent;
