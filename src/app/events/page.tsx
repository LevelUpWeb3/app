import { Container, Stack, Typography } from "@mui/material";
import { FULL_SCREEN_HEIGHT } from "@/constants";
import List from "./List";
import Data from "./eventsList.json";

const EventsPage = () => {
  return (
    <Container
      sx={{
        py: ["6rem", "8.4rem"],
        minHeight: [["auto", FULL_SCREEN_HEIGHT]],
      }}
    >
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Hackathon
        </Typography>
        <List data={Data} />
      </Stack>
    </Container>
  );
};

export default EventsPage;
