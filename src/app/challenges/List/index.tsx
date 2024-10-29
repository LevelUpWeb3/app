"use client";

import { useMemo, useState } from "react";

import { Box, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";
import {
  CHALLENGE_CATEGORY_LIST,
  CHALLENGE_LEVEL_LIST,
  LAYOUT_HEADER_HEIGHT,
} from "@/constants";

import Card from "@/components/Card";

import PlainSelect from "@/components/PlainSelect";
import NoData from "@/components/NoData";

const Container = styled(Box)({
  maxWidth: "140rem",
  margin: "0 auto",
  width: "100%",
  ["@media (max-width: 1400px)"]: {
    padding: "0 1.6rem",
  },
});

const ChallengeList = (props) => {
  const { data } = props;
  const trigger = useScrollTrigger();
  const [searchParams, setSearchParams] = useState({
    category: CHALLENGE_CATEGORY_LIST[0],
    level: CHALLENGE_LEVEL_LIST[0],
  });

  const stickyTop = useMemo(
    () => (trigger ? "2rem" : LAYOUT_HEADER_HEIGHT),
    [trigger],
  );

  const filteredData = useMemo(() => {
    return data?.filter((item) => {
      const categoryMatch =
        searchParams.category === CHALLENGE_CATEGORY_LIST[0] ||
        item.labels.includes(searchParams.category);
      const levelMatch =
        searchParams.level === CHALLENGE_LEVEL_LIST[0] ||
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
          sx={{ width: "146px" }}
          data={CHALLENGE_LEVEL_LIST}
          value={searchParams.level}
          onChange={handleChangeLevel}
        ></PlainSelect>
      </Stack>
      {filteredData?.length ? (
        <Box
          sx={{
            mt: ["20px", "46px"],
            width: "100%",
            display: "grid",
            gridTemplateColumns: [
              "1fr",
              "repeat(auto-fill, minmax(300px, 1fr))",
            ],
            gap: ["15px", "20px"],
          }}
        >
          {filteredData.map((item) => (
            <Card content={item} key={item.name}></Card>
          ))}
        </Box>
      ) : (
        <NoData title="No results" description="reselect"></NoData>
      )}
    </Container>
  );
};
export default ChallengeList;
