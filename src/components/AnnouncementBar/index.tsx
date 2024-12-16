import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";

const AnnouncementBar = (props) => {
  const { children, offAnnouncement, ...restProps } = props;

  if (offAnnouncement) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderBottom: "1.5px solid #101010",
        py: "18px",
        color: "text.primary",
        fontSize: "16px",
        zIndex: "var(--mui-zIndex-appBar)",
      }}
    >
      <Marquee {...restProps}>{children}</Marquee>
    </Box>
  );
};

export default AnnouncementBar;
