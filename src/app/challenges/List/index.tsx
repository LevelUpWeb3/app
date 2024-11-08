"use client";

import { useMemo, useState } from "react";

import { Box, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
  CHALLENGE_CATEGORY_LIST,
  CHALLENGE_LEVEL_LIST,
  LAYOUT_HEADER_HEIGHT,
} from "@/constants";

import Card from "@/components/Card";

import PlainSelect from "@/components/PlainSelect";
import NoData from "@/components/NoData";

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
    return data
      ?.filter((item) => {
        const categoryMatch =
          searchParams.category === CHALLENGE_CATEGORY_LIST[0] ||
          item.labels.includes(searchParams.category);
        const levelMatch =
          searchParams.level === CHALLENGE_LEVEL_LIST[0] ||
          `Level ${item.level}` === searchParams.level;
        return categoryMatch && levelMatch;
      })
      .map((item) => ({
        ...item,
        labels: [...item.labels, `Level ${item.level}`],
      }));
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
    <>
      <Stack
        direction="row"
        sx={{
          position: ["static", "sticky"],
          zIndex: 1,
          top: stickyTop,
          width: "100%",
          justifyContent: ["flex-end", "flex-end", "flex-start"],
        }}
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
      <Box sx={{ gridColumn: ["1/2", "1/3", "2/3"] }}>
        {filteredData?.length ? (
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: [
                "1fr",
                "repeat(auto-fill, minmax(282px, 1fr))",
              ],
              gap: ["15px", "15px", "20px"],
            }}
          >
            {filteredData.map((item) => (
              <Card content={item} key={item.name}></Card>
            ))}
          </Box>
        ) : (
          <NoData sx={{ mt: ["20px", "56px"] }}></NoData>
        )}
      </Box>
    </>
  );
};
export default ChallengeList;
