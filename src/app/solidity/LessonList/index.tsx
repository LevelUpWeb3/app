// "use client";

import { Box } from "@mui/material";

import LessonCard from "./LessonCard";

const LessonList = (props) => {
  const { data } = props;

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: ["1fr", "repeat(auto-fill, minmax(30rem, 1fr))"],
        gap: ["15px", "20px"],
      }}
    >
      {data?.map((item, index) => <LessonCard content={item} key={index} />)}
    </Box>
  );
};
export default LessonList;
