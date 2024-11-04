import { Stack, Typography } from "@mui/material";
import TriangleLeftSvg from "@/assets/svgs/common/triangle-left.svg";

import Link from "next/link";

const BackLink = (props) => {
  const { sx } = props;
  return (
    <Link href="./">
      <Stack
        direction="row"
        spacing="15px"
        alignItems="center"
        className="text-[#101010] hover:text-[#2C2C2C]"
        sx={sx}
      >
        <TriangleLeftSvg className="text-inherit"></TriangleLeftSvg>
        <Typography
          sx={{
            fontSize: "16px",
            cursor: "pointer",
            color: "inherit",
            transform: "translateY(1px)",
          }}
        >
          Back
        </Typography>
      </Stack>
    </Link>
  );
};

export default BackLink;
