import { Box, Container, Stack } from "@mui/material";

const NavigationWrapper = ({ children, sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFEEDA80",
      }}
    >
      <Container>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            py: ["30px", "56px"],
            justifyContent: "space-between",
            alignItems: "center",
            ...sx,
          }}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default NavigationWrapper;
