"use client";

import { useMemo, useState } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import HackathonCard from "./HackathonCard";

import Data from "./hackathonList.json";

const Container = styled(Box)(({ theme }) => ({
  width: "full",
  maxWidth: "1536px",
  paddingLeft: "104px",
  paddingRight: "104px",
  boxSizing: "border-box",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "none",
    padding: "0 58px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 16px",
  },
}));

const CardBox = styled(Box)(() => ({
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
}));

const List = () => {
  const [filteredData, setFilteredData] = useState(Data);

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardBox>
          {filteredData.map((item, index) => (
            <HackathonCard content={item} key={index} />
          ))}
        </CardBox>
      </Box>
    </Container>
  );
};
export default List;
