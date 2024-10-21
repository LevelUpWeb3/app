"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import LessonCard from "./LessonCard";

// TODO: fetch data from server
const LessonList = () => {
  // const res = await fetch(
  //   "http://localhost:3001/data/solidity/markdownData.json",
  // );
  // const data = await res.json();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/solidity/markdownData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Box
      sx={[
        {
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
          gap: "20px",
        },
        (theme) => ({
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
            gap: "15px",
          },
        }),
      ]}
    >
      {data?.map((item, index) => <LessonCard content={item} key={index} />)}
    </Box>
  );
};
export default LessonList;
