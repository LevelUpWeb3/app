import { Stack, SvgIcon, Typography } from "@mui/material";
import TriangleLeftSvg from "@/assets/svgs/common/triangle-left.svg";

import Link from "next/link";

const BackLink = () => {
  return (
    <Link href="./">
      <Stack direction="row" spacing="15px" alignItems="center">
        <SvgIcon
          sx={{ width: "auto", height: "auto", color: "transparent" }}
          component={TriangleLeftSvg}
          inheritViewBox
        ></SvgIcon>
        <Typography sx={{ fontSize: "16px", cursor: "pointer" }}>
          Back
        </Typography>
      </Stack>
    </Link>
  );
};

export default BackLink;
