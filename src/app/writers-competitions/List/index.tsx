"use client";

import { useMemo, useState, useEffect } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ChallengeCard from "./ChallengeCard";
import AdaptableComponent from "./AdaptableSelect";
import Data from "./../writersCompetitionsList.json";
import {
  CHALLENGES_DATE_LIST,
  NORMAL_HEADER_HEIGHT,
} from "@/constants";

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
  const trigger = useScrollTrigger();
  const [filteredData, setFilteredData] = useState(Data);
  const [dateParams, setDateParams] = useState({
    category: "All time",
    level: CHALLENGES_DATE_LIST[0],
  });
  const [isSticky] = useState(true);
  const stickyTop = useMemo(
    () => (trigger ? "2rem" : NORMAL_HEADER_HEIGHT),
    [trigger],
  );

  useEffect(() => {
    const levelInfo = Data.filter((item) => {
      return (
        (item.status.includes(dateParams.level) ||
          dateParams.level === "All time")
      );
    });
    setFilteredData(levelInfo);
  }, [dateParams]);

  const handleChangeDate = (value) => {
    setDateParams((pre) => ({
      ...pre,
      level: value,
    }));
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AdaptableComponent
          stickyTop={stickyTop}
          isSticky={isSticky}
          dateParams={dateParams}
          handleChangeDate={handleChangeDate}
        />
        <CardBox>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <ChallengeCard content={item} key={index} />
            ))
          ) : (
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <div className="mt-40 text-3xl">
                <p>No competitions on the horizon right now.</p>
                <p>Stay tuned for future updates!</p>
              </div>
            </Box>
          )}
        </CardBox>
      </Box>
    </Container>
  );
};
export default List;
