import { Container, Stack, Typography } from "@mui/material";
import List from "./List";

import Data from "./content.json";

const ContentPage = async () => {
  const markdownData = await fetch(
    "http://localhost:3001/data/contents/markdownData.json",
  ).then((res) => res.json());
  const data = [...markdownData, ...Data];

  return (
    <Container sx={{ py: ["8.4rem"] }}>
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Content
        </Typography>
        <List data={data} />
      </Stack>
    </Container>
  );
};

export default ContentPage;
