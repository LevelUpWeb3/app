"use client";

import { useMemo, useState, useEffect } from "react";
import { withStyles } from "tss-react/mui";

import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import Card from "@/components/Card";
import { NORMAL_HEADER_HEIGHT, CONTENT_CATEGORY_LIST } from "@/constants";

import Data from "../content.json";
import Category from "./Category";

interface DataItem {
  labels: string[];
  index: number;
}

const Grid = withStyles(Box, (theme) => ({
  root: {
    marginTop: "6.8rem",
    display: "grid",
    gridTemplateColumns: "200px 1fr max-content",
    gridTemplateRows: "max-content 1fr",
    rowGap: "3rem",
    columnGap: "7.2rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr max-content",
      gridTemplateRows: "unset",
      rowGap: "2rem",
      columnGap: "0.8rem",
      marginTop: "2rem",
    },
  },
}));

const Container = styled(Box)({
  maxWidth: "140rem",
  margin: "0 auto",
  width: "100%",
});

const CardBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
}));

const List = () => {
  const trigger = useScrollTrigger();
  const [combinedData, setCombinedData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [searchParams, setSearchParams] = useState({
    category: CONTENT_CATEGORY_LIST[0],
  });
  const stickyTop = useMemo(
    () => (trigger ? "2rem" : NORMAL_HEADER_HEIGHT),
    [trigger],
  );

  useEffect(() => {
    fetch("/data/contents/markdownData.json")
      .then((res) => res.json())
      .then((markdownData) => {
        const combined = [...markdownData, ...Data];
        setCombinedData(combined);
        setFilteredData(combined);
      });
  }, []);

  const handleChangeCategory = (value) => {
    const filteredData = combinedData.filter((item) => {
      if (value === CONTENT_CATEGORY_LIST[0]) {
        return true;
      }
      return item.labels[0] === value;
    });
    setFilteredData(filteredData);
    setSearchParams((pre) => ({
      ...pre,
      category: value,
    }));
  };

  return (
    <Container>
      <Grid>
        <Category
          top={stickyTop}
          value={searchParams.category}
          onChange={handleChangeCategory}
        ></Category>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardBox>
            {filteredData
              .sort((a, b) => b.index - a.index)
              .map((item, index) => (
                <Card content={item} key={index} />
              ))}
          </CardBox>
        </Box>
      </Grid>
    </Container>
  );
};
export default List;
