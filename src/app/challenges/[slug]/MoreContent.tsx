import SlideSvg from "@/assets/svgs/content/slide.svg";
import { Box, Container, Stack, Typography } from "@mui/material";

import MoreContentSlide from "@/components/MoreContentSlide";

const MoreContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAFAFA",
        py: ["30p", "60px"],
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: ["20px", "40px"] }}
        >
          <Typography sx={{ fontSize: ["24px", "36px"] }}>
            Further Reading
          </Typography>
          <SlideSvg className="invisible sm:visible" />
        </Stack>
        <MoreContentSlide index={-1}></MoreContentSlide>
      </Container>
    </Box>
  );
};

export default MoreContent;
