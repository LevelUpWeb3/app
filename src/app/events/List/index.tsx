"use client";

import { useMemo, useState } from "react";

import { Box, Stack } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PlainSelect from "@/components/PlainSelect";
import NoData from "@/components/NoData";

import {
  EVENTS_DATE_LIST,
  EVENTS_REGION_LIST,
  LAYOUT_HEADER_HEIGHT,
} from "@/constants";
import HackathonItem from "./HackathonItem";

const List = (props) => {
  const { data } = props;
  const trigger = useScrollTrigger();

  const [searchParams, setSearchParams] = useState({
    time: EVENTS_DATE_LIST[0],
    region: EVENTS_REGION_LIST[0],
  });

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

  const handleChangeSearchParams = (value, key) => {
    setSearchParams((pre) => ({
      ...pre,
      [key]: value,
    }));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        sx={{ position: ["static", "sticky"], top: stickyTop }}
        gap="8px"
      >
        <PlainSelect
          sx={{ width: ["140px", "150px"] }}
          data={EVENTS_DATE_LIST}
          value={searchParams.time}
          onChange={(e) => handleChangeSearchParams(e.target.value, "time")}
        ></PlainSelect>
        <PlainSelect
          sx={{ width: ["185px", "190px"] }}
          data={EVENTS_REGION_LIST}
          value={searchParams.region}
          onChange={(e) => handleChangeSearchParams(e.target.value, "region")}
        ></PlainSelect>
      </Stack>
      {filteredData.length ? (
        <Stack
          direction="column"
          spacing="20px"
          sx={{
            mt: ["20px", "46px"],
            width: "100%",
          }}
        >
          {filteredData.map((item) => (
            <HackathonItem content={item} key={item.name}></HackathonItem>
          ))}
        </Stack>
      ) : (
        <NoData
          title="No results match the selected criteria"
          description="Please try selecting or adjusting your filters."
        ></NoData>
      )}
    </Box>
  );
};
export default List;
