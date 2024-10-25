"use client";

import { useEffect, useMemo, useState } from "react";
import { withStyles } from "tss-react/mui";

import { Box, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled, width } from "@mui/system";
import {
  CHALLENGE_CATEGORY_LIST,
  CHALLENGE_LEVEL_LIST,
  NORMAL_HEADER_HEIGHT,
} from "@/constants";

import ComingSoon from "@/components/ComingSoon";
import Card from "@/components/Card";

import CategorySelect from "./CategorySelect";
import LevelSelect from "./LevelSelect";
import PlainSelect from "@/components/PlainSelect";

const Container = styled(Box)({
  maxWidth: "140rem",
  margin: "0 auto",
  width: "100%",
  ["@media (max-width: 1400px)"]: {
    padding: "0 1.6rem",
  },
});

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

const CardBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
  marginTop: "2.4rem",
}));

const ChallengeList = (props) => {
  const { data } = props;
  const trigger = useScrollTrigger();
  const [searchParams, setSearchParams] = useState({
    category: "All categories",
    level: CHALLENGE_LEVEL_LIST[0],
  });

  const [isSticky] = useState(true);

  const stickyTop = useMemo(
    () => (trigger ? "2rem" : NORMAL_HEADER_HEIGHT),
    [trigger],
  );

  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      const categoryMatch =
        searchParams.category === "All categories" ||
        item.labels.includes(searchParams.category);
      const levelMatch =
        searchParams.level === "All levels" ||
        `Level ${item.level}` === searchParams.level;
      return categoryMatch && levelMatch;
    });
  }, [searchParams, data]);

  const handleChangeCategory = (e) => {
    setSearchParams((pre) => ({
      ...pre,
      category: e.target.value,
    }));
  };

  const handleChangeLevel = (e) => {
    setSearchParams((pre) => ({
      ...pre,
      level: e.target.value,
    }));
  };

  return (
    <Container>
      <Stack
        direction="row"
        sx={{ position: ["static", "sticky"], top: stickyTop }}
        spacing="0.8rem"
      >
        <PlainSelect
          sx={{ width: "178px" }}
          data={CHALLENGE_CATEGORY_LIST}
          value={searchParams.category}
          onChange={handleChangeCategory}
        ></PlainSelect>
        <PlainSelect
          data={CHALLENGE_LEVEL_LIST}
          value={searchParams.level}
          onChange={handleChangeLevel}
        ></PlainSelect>
      </Stack>

      <Box
        sx={{
          mt: ["20px", "40px"],
          width: "100%",
          display: "grid",
          gridTemplateColumns: ["1fr", "repeat(auto-fill, minmax(300px, 1fr))"],
          gap: ["15px", "20px"],
        }}
      >
        {filteredData?.map((item, index) => (
          <Card content={item} key={index}></Card>
        ))}
      </Box>
    </Container>
  );
};
export default ChallengeList;
