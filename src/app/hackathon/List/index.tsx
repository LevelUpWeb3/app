"use client";

import { useMemo, useState, useEffect } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import HackathonCard from "./HackathonCard";
import DateSelect from "./DateSelect";
import RegionSelect from "./RegionSelect";
import Data from "./../hackathonList.json";
import {
  HACKATHON_DATE_LIST,
  HACKATHON_REGION_LIST,
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
    level: HACKATHON_DATE_LIST[0],
  });
  const [regionParams, setRegionParams] = useState({
    category: "All regions",
    level: HACKATHON_REGION_LIST[0],
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
          dateParams.level === "All time") &&
        (item.region.includes(regionParams.level) ||
          regionParams.level === "All regions")
      );
    });
    setFilteredData(levelInfo);
  }, [dateParams, regionParams]);

  const handleChangeDate = (value) => {
    setDateParams((pre) => ({
      ...pre,
      level: value,
    }));
  };

  const handleChangeRegion = (value) => {
    setRegionParams((pre) => ({
      ...pre,
      level: value,
    }));
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className="mb-[2.4rem] mt-[4rem] flex text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
          All Events
          <div className="ml-auto flex gap-4">
            <DateSelect
              top={stickyTop}
              sticky={isSticky}
              value={dateParams.level}
              onChange={handleChangeDate}
            />
            <RegionSelect
              top={stickyTop}
              sticky={isSticky}
              value={regionParams.level}
              onChange={handleChangeRegion}
            />
          </div>
        </div>
        <CardBox>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <HackathonCard content={item} key={index} />
            ))
          ) : (
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <div className="mt-40 text-3xl">
                <p>No events on the horizon right now.</p>
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
