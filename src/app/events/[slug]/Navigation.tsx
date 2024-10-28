import BackLink from "@/components/Back";

import { Stack } from "@mui/material";

const Navigation = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      width="100%"
      px="50px"
      sx={{
        px: "50px",
        gridColumn: "span 2",
        backgroundColor: "#FFEEDA80",
        py: "56px",
      }}
    >
      <BackLink></BackLink>
    </Stack>
  );
};

export default Navigation;
