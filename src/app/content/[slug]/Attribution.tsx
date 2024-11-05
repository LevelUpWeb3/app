import { Box, Typography, Avatar } from "@mui/material";
import Link from "next/link";

const Attribution = (props) => {
  const {
    name,
    authorIcon,
    authorLink = "",
    author,
    published,
    readTime,
  } = props;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "min-content 1fr",
        width: ["100%", "50%"],
        gap: "14px",
      }}
    >
      <Typography sx={{ fontSize: ["36px", "48px"], gridColumn: "1/3" }}>
        {name}
      </Typography>
      <Avatar
        src={authorIcon}
        sx={{ width: ["40px", "54px"], height: ["40px", "54px"] }}
      />
      <Box sx={{ alignSelf: "center" }}>
        <Typography sx={{ fontSize: ["14px", "16px"] }}>
          Written by{" "}
          <Link className="underline" href={authorLink} target="_blank">
            {author}
          </Link>
        </Typography>
        <Typography sx={{ fontSize: ["12px", "13px"], mt: ["4px", "8px"] }}>
          {published} · {readTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default Attribution;
