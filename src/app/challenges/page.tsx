import { Container, Stack, Typography } from "@mui/material";
import { headers } from "next/headers";
import { PAGE_MIN_HEIGHT } from "@/constants";

import List from "./List";

// TODO: pick PageWrapper
const ChallengesPage = async () => {
  const { origin } = new URL(headers().get("x-url")!);

  const data = await fetch(`${origin}/data/challenges/markdownData.json`).then(
    (res) => res.json(),
  );

  return (
    <Container
      sx={{
        py: ["6rem", "8.4rem"],
        minHeight: PAGE_MIN_HEIGHT,
      }}
    >
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Challenges
        </Typography>
        <List data={data} />
      </Stack>
    </Container>
  );
};

export default ChallengesPage;
