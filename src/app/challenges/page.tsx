import { Container, Stack, Typography } from "@mui/material";
import { headers } from "next/headers";
import { LAYOUT_HEADER_HEIGHT, LAYOUT_FOOTER_HEIGHT } from "@/constants";

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
        py: ["8.4rem"],
        minHeight: `calc(100vh - ${LAYOUT_HEADER_HEIGHT} - ${LAYOUT_FOOTER_HEIGHT})`,
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
