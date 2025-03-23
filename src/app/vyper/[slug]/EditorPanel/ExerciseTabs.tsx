import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useMemo } from "react";
import EditorTooltip from "@/components/EditorTooltip";
import { CODE_EXERCISES } from "@/constants/vyper/code-exercises";

import clsx from "clsx";
import { useParams } from "next/navigation";

const getExerciseNumber = (exerciseKey) => {
  return parseInt(exerciseKey.replace("exercise", ""));
};

const ExerciseTabs = (props) => {
  const { value, onChange, completedExerciseNumber } = props;

  const { slug } = useParams();
  const lessonId = slug as string;

  const EXERCISE_LIST = useMemo(() => {
    return Object.keys(CODE_EXERCISES[lessonId]).map((item) => ({
      key: item,
      label: `${item.slice(0, 8)} ${item.slice(8)}`,
    }));
  }, [lessonId]);

  const disabledTab = (exerciseKey) => {
    return getExerciseNumber(exerciseKey) > completedExerciseNumber + 1;
  };

  const completedTab = (exerciseKey) => {
    return getExerciseNumber(exerciseKey) <= completedExerciseNumber;
  };

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    if (disabledTab(newValue)) {
      return;
    }
    onChange(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: "10px",
        px: "20px",
        backgroundColor: "#3B3B3B",
      }}
    >
      <Tabs
        aria-label="Exercises"
        value={value}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          minHeight: "unset",
          ".MuiTabs-flexContainer": {
            gap: "10px",
          },
          ".MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {EXERCISE_LIST.map(({ key, label }, index) => (
          <Tab
            key={key}
            value={key}
            label={
              <EditorTooltip
                key={key}
                type="disabled"
                offset="24px"
                title={
                  disabledTab(key) ? `Complete Exercise ${index} to unlock` : ""
                }
                placement="top"
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "37px",
                    pointerEvents:
                      key === value || completedTab(key) ? "none" : "all",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "37px",
                      textTransform: "capitalize",
                      cursor: "inherit",
                      transform: "translateY(0.125em)",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </EditorTooltip>
            }
            className={clsx(
              completedTab(key) && "completed",
              disabledTab(key) && "disabled",
            )}
            sx={{
              p: 0,
              opacity: 1,
              border: "1.5px solid #101010",
              minHeight: "unset",
              // height: "40px",
              backgroundColor: "#5A5A5A",
              "&.completed": {
                backgroundColor: "#E8F62833",
              },
              "&.disabled": {
                cursor: "default",
              },
              "&.Mui-selected": {
                backgroundColor: "#E8F628",
              },
            }}
          ></Tab>
        ))}
      </Tabs>
    </Box>
  );
};

export default ExerciseTabs;
