import { Container, Stack, Typography } from "@mui/material";
import List from "./List";
import markdownData from "./markdownData.json";

import Data from "./content.json";
import { PAGE_MIN_HEIGHT } from "@/constants";

const ContentPage = async () => {
  const data = [...markdownData, ...Data];

  return (
    <Container
      sx={{ py: ["6rem", "6rem", "8.4rem"], minHeight: PAGE_MIN_HEIGHT }}
    >
      <Stack
        direction={["column", "column", "row"]}
        gap={["20px", "20px", "100px"]}
      >
        <Typography
          sx={{
            fontSize: ["3.6rem", "3.6rem", "4.8rem"],
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
