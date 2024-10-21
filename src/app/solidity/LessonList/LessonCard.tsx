import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";

const SolidityCardList = ({ content }) => {
  const pathname = usePathname();

  const handleClick = () => {
    sendGAEvent("event", "challengeClicked", {
      value: `Lesson ${content.lesson}: ${content.name}`,
    });
  };

  return (
    <Link href={`${pathname}/${content.id}`}>
      <Box
        sx={{
          borderRadius: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          border: "1.5px solid #101010",
          overflow: "hidden",
          ["& *"]: {
            cursor: "pointer !important",
          },
        }}
        onClick={handleClick}
      >
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "40px",
            textAlign: "center",
            backgroundColor: "rgba(186, 240, 247, 0.80)",
            borderBottom: "1.5px solid #101010",
          }}
        >
          Lesson {content.lesson}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "84px",
            textAlign: "center",
            backgroundColor: "background.default",
          }}
        >
          {content.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default SolidityCardList;
