import { Container, Stack, Typography, Box } from "@mui/material";
import CodeEditor from "./CodeEditor";

const CodeChallengeSubmit = () => {
  return (
    <Container>
      <Stack direction={["column", "column", "row"]}>
        <Box
          sx={{
            p: [
              "30px 20px !important",
              "30px 40px !important",
              "60px !important",
            ],
            width: ["calc(100% + 40px)", "calc(100% + 80px)", "50%"],
            backgroundColor: ["unset", "unset", "rgba(186, 240, 247, 0.30)"],
            borderTop: ["1.5px solid #101010", "1.5px solid #101010", "none"],
            marginLeft: ["-20px", "-40px", 0],
          }}
        >
          <Typography sx={{ fontSize: ["24px", "24px", "36px"] }}>
            Submit Challenge
          </Typography>
        </Box>

        <CodeEditor
          sx={{
            width: ["calc(100% + 40px)", "calc(100% + 80px)", "50%"],
            marginLeft: ["-20px", "-40px", 0],
          }}
        ></CodeEditor>
      </Stack>
    </Container>
  );
};

export default CodeChallengeSubmit;
