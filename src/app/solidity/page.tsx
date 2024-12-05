import { Container, Stack, Typography } from "@mui/material";

import { PAGE_MIN_HEIGHT } from "@/constants";

import LessonList from "./LessonList";
import markdownData from "./markdownData.json";

const SolidityPage = async () => {
  return (
    <Container
      sx={{ py: ["6rem", "6rem", "8.4rem"], minHeight: PAGE_MIN_HEIGHT }}
    >
      <Stack
        direction={["column", "column", "row"]}
        gap={["20px", "24px", "100px"]}
      >
        <Typography
          sx={{
            fontSize: ["3.6rem", "3.6rem", "4.8rem"],
            width: ["min-content", "max-content", "min-content"],
          }}
        >
          Solidity Challenges
        </Typography>
        <LessonList data={markdownData} />
      </Stack>
    </Container>
  );
};

export default SolidityPage;
