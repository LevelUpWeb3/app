import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useMemo } from "react";
import EditorTooltip from "@/components/EditorTooltip";
import { CODE_EXERCISES } from "@/constants/solidity/code-exercises";

import clsx from "clsx";
import { useParams } from "next/navigation";

const ExerciseTabs = (props) => {
  const { value, onChange, completedExercise } = props;

  const { slug: lessonKey } = useParams();

  const EXERCISE_LIST = useMemo(() => {
    return Object.keys(CODE_EXERCISES[lessonKey]).map((item) => ({
      key: item,
      label: `${item.slice(0, 8)} ${item.slice(8)}`,
    }));
  }, [lessonKey]);

  const disabledTab = (index) => completedExercise < index;

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    const wantNextTabIndex = parseInt(newValue.replace("exercise", "")) - 1;
    console.log(wantNextTabIndex, "wantNextTabIndex");
    if (disabledTab(wantNextTabIndex)) {
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
        backgroundColor: "#3B3B3B",
      }}
    >
      <Tabs
        aria-label="Exercises"
        value={value}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
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
                  disabledTab(index)
                    ? `Complete Exercise ${index} to unlock`
                    : ""
                }
                placement="top"
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "37px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "37px",
                      textTransform: "capitalize",
                      cursor: "inherit",
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </EditorTooltip>
            }
            className={clsx(
              index < completedExercise && "completed",
              disabledTab(index) && "disabled",
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
