import useCheckViewport from "@/hooks/useCheckViewport";
import { Stack, Typography } from "@mui/material";

const NoData = (props) => {
  const { isMobile } = useCheckViewport();
  const { title, description, ...restProps } = props;

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={isMobile ? "0.4rem" : "0.8rem"}
      sx={{ py: ["6rem", "12rem"] }}
      {...restProps}
    >
      <Typography
        sx={{
          fontSize: "1.6rem",
          fontWeight: 600,
          lineHeight: "2.4rem",
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "1.6rem",
          lineHeight: "2.4rem",
          color: "text.primary",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default NoData;
