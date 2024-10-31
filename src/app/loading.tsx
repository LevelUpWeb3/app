import { CircularProgress, Container, Stack } from "@mui/material";
import { FULL_SCREEN_HEIGHT } from "@/constants";

const Loading = () => {
  return (
    <Container>
      <Stack
        sx={{ minHeight: FULL_SCREEN_HEIGHT }}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="primary" />
      </Stack>
    </Container>
  );
};

export default Loading;
