import Button from "@/components/Button";
import { Box, Container, Stack, Typography } from "@mui/material";

const SubmitAction = (props) => {
  const { sx } = props;
  return (
    <Box sx={{ backgroundColor: "#E8F62833", py: ["30px", "60px"], ...sx }}>
      <Container>
        <Stack direction="column" spacing="20px" alignItems="center">
          <Typography sx={{ fontSize: ["24px", "36px"] }}>
            Submit Your Challenge
          </Typography>
          <Typography
            sx={{
              fontSize: ["14px", "16px"],
              maxWidth: "780px",
              textAlign: "center",
            }}
          >
            Click the button below to submit your challenge!
          </Typography>
          <Button
            size="large"
            sx={{ width: ["100% !important", "400px !important"] }}
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
