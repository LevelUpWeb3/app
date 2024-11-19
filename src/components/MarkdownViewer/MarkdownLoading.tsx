import { Skeleton, Stack } from "@mui/material";

const MarkdownLoading = (props) => {
  const { theme = "light", backgroundColor: defaultBackgroundColor } = props;

  const isLight = theme === "light";
  const backgroundColor =
    defaultBackgroundColor ??
    (isLight ? "#1010101C" : "rgba(255, 255, 255, 0.45)");

  return (
    <Stack direction="column" spacing="8px" className="markdown-skeleton">
      <Skeleton
        variant="text"
        sx={{
          fontSize: "32px",
          width: "60%",
          backgroundColor,
        }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{ fontSize: "16px", backgroundColor }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{ fontSize: "16px", backgroundColor }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{ fontSize: "16px", backgroundColor }}
      ></Skeleton>
      <Skeleton
        variant="rectangular"
        height={60}
        sx={{ borderRadius: "8px", backgroundColor }}
      />
    </Stack>
  );
};

export default MarkdownLoading;
