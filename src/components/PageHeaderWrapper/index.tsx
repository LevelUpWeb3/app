import { Container, Box } from "@mui/material";

import { LAYOUT_HEADER_HEIGHT, MOBILE_LAYOUT_HEADER_HEIGHT } from "@/constants";

const PageHeaderWrapper = (props) => {
  const { bgColor, sx, children } = props;
  return (
    <Box
      sx={{
        pt: [MOBILE_LAYOUT_HEADER_HEIGHT, LAYOUT_HEADER_HEIGHT],
        mt: [`-${MOBILE_LAYOUT_HEADER_HEIGHT}`, `-${LAYOUT_HEADER_HEIGHT}`],
        backgroundColor: bgColor,
      }}
    >
      <Container sx={sx}>{children}</Container>
    </Box>
  );
};

export default PageHeaderWrapper;
