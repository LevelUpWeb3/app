"use client";

import { useMemo, useState } from "react";
import { withStyles } from "tss-react/mui";

import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

import HackathonCard from "./HackathonCard";
import { NORMAL_HEADER_HEIGHT, CONTENT_CATEGORY_LIST } from "@/constants";

import Data from "./hackathonList.json";

// const Grid = withStyles(Box, (theme) => ({
//   root: {
//     marginTop: "6.8rem",
//     display: "grid",
//     gridTemplateColumns: "200px 1fr max-content",
//     gridTemplateRows: "max-content 1fr",
//     rowGap: "3rem",
//     columnGap: "7.2rem",
//     [theme.breakpoints.down("md")]: {
//       gridTemplateColumns: "1fr max-content",
//       gridTemplateRows: "unset",
//       rowGap: "2rem",
//       columnGap: "0.8rem",
//       marginTop: "2rem",
//     },
//   },
// }));

const Container = styled(Box)({
  width: "full",
  ["@media (max-width: 1400px)"]: {
    padding: "0 1.6rem",
  },
});

const CardBox = styled(Box)(() => ({
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
    [trigger],
  );

  return (
    <Container>
      {/* <Grid> */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardBox>
          {filteredData.map((item, index) => (
            <HackathonCard content={item} key={index} />
          ))}
        </CardBox>
      </Box>
      {/* </Grid> */}
    </Container>
  );
};
export default List;
