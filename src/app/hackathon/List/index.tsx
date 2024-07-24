"use client";

import { useMemo, useState } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import HackathonCard from "./HackathonCard";

import Data from "./hackathonList.json";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  boxSizing: "border-box",
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
