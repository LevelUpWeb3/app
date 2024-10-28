import { Container, Stack, Typography } from "@mui/material";
import { LAYOUT_FOOTER_HEIGHT, LAYOUT_HEADER_HEIGHT } from "@/constants";
import List from "./List";
import Data from "./eventsList.json";

const EventsPage = () => {
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
          Hackathon
        </Typography>
        <List data={Data} />
      </Stack>
    </Container>
  );
};

export default EventsPage;
