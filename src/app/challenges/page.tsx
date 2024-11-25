import { Container, Box, Typography } from "@mui/material";
import { PAGE_MIN_HEIGHT } from "@/constants";
import markdownData from "./markdownData.json";

import List from "./List";

// TODO: pick PageWrapper
const ChallengesPage = async () => {
  return (
    <Container
      sx={{
        py: ["6rem", "6rem", "8.4rem"],
        minHeight: PAGE_MIN_HEIGHT,
      }}
    >
      <Box
        // direction={["column", "column", "row"]}
        // gap={["20px", "36px", "100px"]}
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "min-content 1fr"],
          columnGap: [0, 0, "114px"],
          rowGap: ["20px", "36px", "46px"],
        }}
      >
        <Typography
          sx={{
            fontSize: ["3.6rem", "3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Challenges
        </Typography>
        <List data={markdownData} />
      </Box>
    </Container>
  );
};

export default ChallengesPage;
