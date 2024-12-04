import { Container, Box, Typography } from "@mui/material";

import { PAGE_MIN_HEIGHT } from "@/constants";

import List from "./List";
import Data from "./eventsList.json";

const EventsPage = () => {
  return (
    <Container
      sx={{
        py: ["6rem", "8.4rem"],
        minHeight: PAGE_MIN_HEIGHT,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "min-content 1fr"],
          columnGap: ["208px"],
          rowGap: ["20px", "46px"],
        }}
      >
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
          }}
        >
          Events
        </Typography>
        <List data={Data} />
      </Box>
    </Container>
  );
};

export default EventsPage;
