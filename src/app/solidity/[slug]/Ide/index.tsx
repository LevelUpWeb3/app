"use client";

import React, { useState, SyntheticEvent } from "react";
import { usePathname } from "next/navigation";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, Box, useTheme, lighten, Tooltip } from "@mui/material";
import IdeComponent from "./IdeComponent";

const IdePage = () => {
  const [exercise, setExercise] = useState<string>("exercise1");
  const [completedExercise, setCompletedExercise] = useState<number>(0);

  const query = usePathname().split("/")[2].toLowerCase();
  console.log("query: ", query);

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setExercise(newValue);
  };

  const theme = useTheme();

  const tabListStyles = {
    borderColor: "primary.main",
    position: "center",
    borderRadius: "5px",
  };

  const highlightedStyles = {
    backgroundColor: "#101010",
    borderRadius: "5px",
    color: "white",
    fontSize: "12px",
    textAlign: "left",
  };

  const tooltipAndTabStyles = {
    backgroundColor: "",
    borderRadius: "5px",
    color: "#A9A9A9",
    fontSize: "12px",
    textAlign: "left",
  };

  return (
    <Box>
      <TabContext value={exercise}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            aria-label="Exercises"
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={tabListStyles}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <div>
              <Tab
                value="exercise1"
                label="Exercise 1"
                onClick={() => {
                  setExercise("exercise1");
                }}
                sx={
                  exercise === "exercise1"
                    ? highlightedStyles
                    : tooltipAndTabStyles
                }
              />
            </div>
            <Tooltip
              title={
                completedExercise < 1 ? "Complete Exercise 1 to unlock" : ""
              }
              placement="top"
            >
              <span>
                <Tab
                  value="exercise2"
                  label="Exercise 2"
                  disabled={completedExercise < 1}
                  sx={
                    exercise === "exercise2"
                      ? highlightedStyles
                      : tooltipAndTabStyles
                  }
                  onClick={() => {
                    setExercise("exercise2");
                  }}
                />
              </span>
            </Tooltip>

            <Tooltip
              title={
                completedExercise < 2 ? "Complete Exercise 2 to unlock" : ""
              }
              placement="top"
            >
              <span>
                <Tab
                  value="exercise3"
                  label="Exercise 3"
                  disabled={completedExercise < 2}
                  title={
                    completedExercise < 2 ? "Complete Exercise 2 to unlock" : ""
                  }
                  sx={
                    exercise === "exercise3"
                      ? highlightedStyles
                      : tooltipAndTabStyles
                  }
                  onClick={() => {
                    setExercise("exercise3");
                  }}
                />
              </span>
            </Tooltip>

            <Tooltip
              title={
                completedExercise < 3 ? "Complete Exercise 3 to unlock" : ""
              }
              placement="top"
            >
              <span>
                <Tab
                  value="exercise4"
                  label="Exercise 4"
                  disabled={completedExercise < 3}
                  title={
                    completedExercise < 3 ? "Complete Exercise 3 to unlock" : ""
                  }
                  sx={
                    exercise === "exercise4"
                      ? highlightedStyles
                      : tooltipAndTabStyles
                  }
                  onClick={() => {
                    setExercise("exercise4");
                  }}
                />
              </span>
            </Tooltip>

            <Tooltip
              title={
                completedExercise < 4 ? "Complete Exercise 4 to unlock" : ""
              }
              placement="top"
            >
              <span>
                <Tab
                  value="exercise5"
                  label="Exercise 5"
                  disabled={completedExercise < 4}
                  title={
                    completedExercise < 4 ? "Complete Exercise 4 to unlock" : ""
                  }
                  sx={
                    exercise === "exercise5"
                      ? highlightedStyles
                      : tooltipAndTabStyles
                  }
                  onClick={() => {
                    setExercise("exercise5");
                  }}
                />
              </span>
            </Tooltip>
          </TabList>
        </Box>
        <TabPanel value="exercise1">
          <IdeComponent
            exercise={exercise}
            setCompletedExercise={setCompletedExercise}
          />
        </TabPanel>
        <TabPanel value="exercise2">
          <IdeComponent
            exercise={exercise}
            setCompletedExercise={setCompletedExercise}
          />
        </TabPanel>
        <TabPanel value="exercise3">
          <IdeComponent
            exercise={exercise}
            setCompletedExercise={setCompletedExercise}
          />
        </TabPanel>
        <TabPanel value="exercise4">
          <IdeComponent
            exercise={exercise}
            setCompletedExercise={setCompletedExercise}
          />
        </TabPanel>
        <TabPanel value="exercise5">
          <IdeComponent
            exercise={exercise}
            setCompletedExercise={setCompletedExercise}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default IdePage;
