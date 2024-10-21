import LessonList from "./LessonList";
import { Container, Stack, Typography } from "@mui/material";

const SolidityPage = () => {
  return (
    <Container sx={{ py: ["8.4rem"] }}>
      <Stack direction={["column", "row"]} gap={["20px", "100px"]}>
        <Typography
          sx={{
            fontSize: ["3.6rem", "4.8rem"],
            width: "min-content",
          }}
        >
          Solidity Challenges
        </Typography>
        <LessonList />
      </Stack>
    </Container>
  );
};

export default SolidityPage;
