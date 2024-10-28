"use client";

import { useMemo, useState } from "react";

import { Box, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PlainSelect from "@/components/PlainSelect";

import {
  EVENTS_DATE_LIST,
  EVENTS_REGION_LIST,
  LAYOUT_HEADER_HEIGHT,
} from "@/constants";
import HackathonItem from "./HackathonItem";

const List = (props) => {
  const { data } = props;
  console.log(data, "data");
  const trigger = useScrollTrigger();

  const [searchParams, setSearchParams] = useState({
    time: EVENTS_DATE_LIST[0],
    region: EVENTS_REGION_LIST[0],
  });

  console.log(searchParams, "searchParams");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return (
        (item.status.includes(searchParams.time) ||
          searchParams.time === EVENTS_DATE_LIST[0]) &&
        (item.region.includes(searchParams.region) ||
          searchParams.region === EVENTS_REGION_LIST[0])
      );
    });
  }, [data, searchParams]);

  const stickyTop = useMemo(
    () => (trigger ? "2rem" : LAYOUT_HEADER_HEIGHT),
    [trigger],
  );

  const handleChangeSearchParams = (e, key) => {
    setSearchParams((pre) => ({
      ...pre,
      [key]: e.target.value,
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        sx={{ position: ["static", "sticky"], top: stickyTop }}
        spacing="0.8rem"
      >
        <PlainSelect
          // sx={{ width: "178px" }}
          data={EVENTS_DATE_LIST}
          value={searchParams.time}
          onChange={(e) => handleChangeSearchParams(e.target.value, "time")}
        ></PlainSelect>
        <PlainSelect
          // sx={{ width: "178px" }}
          data={EVENTS_REGION_LIST}
          value={searchParams.region}
          onChange={(e) => handleChangeSearchParams(e.target.value, "region")}
        ></PlainSelect>
      </Stack>
      <Stack
        direction="column"
        spacing="20px"
        sx={{
          mt: ["20px", "46px"],
          width: "100%",

          // display: "grid",
          // gridTemplateColumns: ["1fr", "repeat(auto-fill, minmax(300px, 1fr))"],
          // gap: ["15px", "20px"],
        }}
      >
        {filteredData?.map((item) => (
          <HackathonItem content={item} key={item.name}></HackathonItem>
        ))}
      </Stack>
    </Box>
  );
};
export default List;
