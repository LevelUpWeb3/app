"use client";

import { useMemo, useState } from "react";
import { withStyles } from "tss-react/mui";

import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import Card from "@/components/Card";
import { NORMAL_HEADER_HEIGHT, CONTENT_CATEGORY_LIST } from "@/constants";

import Data from "../content.json";
import Category from "./Category";

const Grid = withStyles(Box, (theme) => ({
  root: {
    marginTop: "6.8rem",
    display: "grid",
    gridTemplateColumns: "max-content 1fr max-content",
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
  ["@media (max-width: 1400px)"]: {
    padding: "0 1.6rem",
  },
});

const CardBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
}));

const List = () => {
  const trigger = useScrollTrigger();
  const [filteredData, setFilteredData] = useState(Data);
  const [searchParams, setSearchParams] = useState({
    category: CONTENT_CATEGORY_LIST[0],
  });
  const stickyTop = useMemo(
    () => (trigger ? "2rem" : NORMAL_HEADER_HEIGHT),
    [trigger]
  );

  const handleChangeCategory = (value) => {
    const filteredData = Data.filter((item) => {
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
            {filteredData.map((item, index) => (
              <Card content={item} key={index} />
            ))}
          </CardBox>
        </Box>
      </Grid>
    </Container>
  );
};
export default List;
