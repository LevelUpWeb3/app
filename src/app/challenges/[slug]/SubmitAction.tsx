import Button from "@/components/Button";
import { Box, Container, Stack, Typography } from "@mui/material";

const SubmitAction = (props) => {
  const { sx } = props;
  return (
    <Box sx={{ backgroundColor: "#E8F62833", py: "60px", ...sx }}>
      <Container>
        <Stack direction="column" spacing="20px" alignItems="center">
          <Typography sx={{ fontSize: "36px", lineHeight: "22px" }}>
            Submit Your Challenge
          </Typography>
          <Typography
            sx={{ fontSize: "16px", lineHeight: "22px", maxWidth: "780px" }}
          >
            Click the button below to submit your challenge!
          </Typography>
          <Button
            size="large"
            sx={{ width: "400px !important" }}
            href="/challenges/submission"
          >
            Submit Challenge
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubmitAction;
