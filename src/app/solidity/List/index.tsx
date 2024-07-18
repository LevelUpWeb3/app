"use client";

import { useEffect, useMemo, useState } from "react";
// import { withStyles } from "tss-react/mui";

import { Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/system";

// import ComingSoon from "@/components/ComingSoon";
// import { NORMAL_HEADER_HEIGHT } from "@/constants";
// import Card from "@/components/Card";
import SolidityCardList from "./SolidityCardList";

// import Challenge from "./Challenge";

const Container = styled(Box)({
  maxWidth: "140rem",
  margin: "0 auto",
  marginTop: "6.8rem",
  width: "100%",
  ["@media (max-width: 1400px)"]: {
    padding: "0 1.6rem",
  },
});

// const Grid = withStyles(Box, (theme) => ({
//   root: {
//     marginTop: "6.8rem",
//     display: "grid",
//     gridTemplateColumns: "max-content 1fr max-content",
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

const CardBox = styled(Box)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(30rem, 1fr))",
  gap: "2.4rem",
}));

const Protocols = () => {
  const trigger = useScrollTrigger();
  const [searchParams, setSearchParams] = useState({
    category: "All challenges",
  });

  const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState([]);

  // const [isSticky] = useState(true);

  // const stickyTop = useMemo(
  //   () => (trigger ? "2rem" : NORMAL_HEADER_HEIGHT),
  //   [trigger]
  // );

  useEffect(() => {
    fetch("/data/challenges/solidity/markdownData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      return (
        item.name.includes(searchParams.category) ||
        searchParams.category === "All challenges"
      );
    });
    setFilteredData(filteredData);
  }, [searchParams, data]);

  // const handleChangeCategory = (value) => {
  //   setSearchParams((pre) => ({
  //     ...pre,
  //     category: value,
  //   }));
  // };

  return (
    <Container>
      {/* <Grid> */}
      {/* <Challenge
        top={stickyTop}
        value={searchParams.category}
        onChange={handleChangeCategory}
      ></Challenge> */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* <ComingSoon /> */}
        <CardBox>
          {filteredData.map((item, index) => (
            <SolidityCardList content={item} key={index} />
          ))}
        </CardBox>
      </Box>
      {/* </Grid> */}
    </Container>
  );
};
export default Protocols;
