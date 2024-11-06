import { headers } from "next/headers";
import { Container, Stack, Typography } from "@mui/material";

import LessonList from "./LessonList";
import { PAGE_MIN_HEIGHT } from "@/constants";

const SolidityPage = async () => {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/solidity/markdownData.json`).then(
    (res) => res.json(),
  );

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
        <LessonList data={data} />
      </Stack>
    </Container>
  );
};

export default SolidityPage;
