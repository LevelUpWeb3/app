import { Stack, Typography } from "@mui/material";
import NoDataSvg from "@/assets/svgs/common/no-data.svg";

const NoData = (props) => {
  const {
    title = "Oops, nothing here yet!",
    description = "Try adjusting your filters to find what you’re looking for.",
    sx,
    ...restProps
  } = props;

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        p: ["20px", "30px 40px"],
        backgroundColor: "background.default",
        borderRadius: "25px",
        ...sx,
      }}
      {...restProps}
    >
      <NoDataSvg className="h-auto w-[40px] sm:w-[56px]"></NoDataSvg>
      <Typography
        sx={{
          fontSize: ["16px", "20px"],
          fontWeight: 500,
          mt: ["16px", "20px"],
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: ["14px", "16px"],
          textAlign: "center",
          mt: ["8px", "10px"],
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default NoData;
