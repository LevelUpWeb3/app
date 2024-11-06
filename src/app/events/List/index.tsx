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
    <>
      <Stack
        direction="row"
        sx={{
          position: ["static", "sticky"],
          top: stickyTop,
          gridColumn: ["1/2", "2/3"],
          width: "100%",
          justifyContent: "flex-end",
          "@media screen and (min-width: 1430px)": {
            justifyContent: "flex-start",
          },
        }}
        gap="8px"
      >
        <PlainSelect
          sx={{ width: ["150px", "150px"] }}
          data={EVENTS_DATE_LIST}
          value={searchParams.time}
          onChange={(e) => handleChangeSearchParams(e.target.value, "time")}
        ></PlainSelect>
        <PlainSelect
          sx={{ width: ["180px", "190px"], minWidth: "170px" }}
          data={EVENTS_REGION_LIST}
          value={searchParams.region}
          onChange={(e) => handleChangeSearchParams(e.target.value, "region")}
        ></PlainSelect>
      </Stack>
      <Box
        sx={{
          gridColumn: ["1/2", "1/3"],
          "@media screen and (min-width: 1430px)": {
            gridColumn: "2/3",
          },
        }}
      >
        {filteredData.length ? (
          <Stack
            direction="column"
            spacing="20px"
            sx={{
              width: "100%",
            }}
          >
            {filteredData.map((item) => (
              <HackathonItem content={item} key={item.name}></HackathonItem>
            ))}
          </Stack>
        ) : (
          <NoData></NoData>
        )}
      </Box>
    </>
  );
};
export default List;
