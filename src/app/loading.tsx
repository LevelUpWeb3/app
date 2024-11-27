import { Container, Stack } from "@mui/material";

import { MOBILE_FULL_SCREEN_HEIGHT, FULL_SCREEN_HEIGHT } from "@/constants";
import ThreeDotsSvg from "@/assets/svgs/common/three-dots.svg";

const Loading = () => {
  return (
    <Container>
      <Stack
        sx={{ minHeight: [MOBILE_FULL_SCREEN_HEIGHT, FULL_SCREEN_HEIGHT] }}
        justifyContent="center"
        alignItems="center"
      >
        <ThreeDotsSvg />
      </Stack>
    </Container>
  );
};

export default Loading;
