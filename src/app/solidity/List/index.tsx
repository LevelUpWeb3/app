"use client";

import { useEffect, useMemo, useState } from "react";
// import { withStyles } from "tss-react/mui";

import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import SolidityCardList from "./SolidityCardList";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
}));

const CardBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
  paddingBottom: "8rem",
}));

const Protocols = () => {
  const trigger = useScrollTrigger();
  const [searchParams, setSearchParams] = useState({
    category: "All challenges",
  });

  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data/solidity/markdownData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return (
        item.name.includes(searchParams.category) ||
        searchParams.category === "All challenges"
      );
    });
    setFilteredData(filteredData);
  }, [searchParams, data]);

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardBox>
          {filteredData.map((item, index) => (
            <SolidityCardList content={item} key={index} />
          ))}
        </CardBox>
      </Box>
    </Container>
  );
};
export default Protocols;
