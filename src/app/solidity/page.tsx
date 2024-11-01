import { headers } from "next/headers";
import { Container, Stack, Typography } from "@mui/material";

import LessonList from "./LessonList";

const SolidityPage = async () => {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/solidity/markdownData.json`).then(
    (res) => res.json(),
  );

  return (
    <Container sx={{ py: ["6rem", "8.4rem"] }}>
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
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
