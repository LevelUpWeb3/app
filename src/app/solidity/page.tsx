import LessonList from "./LessonList";
import { Container, Stack, Typography } from "@mui/material";

const SolidityPage = async () => {
  const data = await fetch(
    "http://localhost:3001/data/solidity/markdownData.json",
  ).then((res) => res.json());

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
        <LessonList data={data} />
      </Stack>
    </Container>
  );
};

export default SolidityPage;
