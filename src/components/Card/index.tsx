"use client";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Stack,
  SvgIcon,
  cardHeaderClasses,
} from "@mui/material";
import { sendGAEvent } from "@next/third-parties/google";
import LinkSvg from "@/assets/svgs/content/link.svg";
import CompletedSvg from "@/assets/svgs/challenge/completed.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

// enum CARD_COLOR {
//   PURPLE = "purple",
//   WHITE = "white",
// }

const CARD_COLOR_MAP = {
  purple: {
    bgColor: "rgba(164, 148, 255, 0.20)",
    hoverBgColor: "rgba(164, 148, 255, 0.30)",
  },
  white: {
    bgColor: "#fff",
    hoverBgColor: "#F4F4F4",
  },
};

const PreviewCard = (props) => {
  const {
    color = "white",
    baseURL,
    content,
    type,
    sx,
    className,
    isCompleted,
  } = props;
  const pathname = usePathname();

  const handleClick = () => {
    sendGAEvent("event", type + "Clicked", { value: `${content.name}` });
  };

  return (
    <Link
      href={content.url ? content.url : `${baseURL || pathname}/${content.id}`}
      target={content.url ? "_blank" : "_self"}
      className={className}
    >
      <Card
        variant="outlined"
        sx={[
          {
            border: "1.5px solid #101010",
            borderRadius: "25px",
            p: "30px",
            backgroundColor: CARD_COLOR_MAP[color].bgColor,
            height: ["auto", "248px"],
            display: "flex",
            flexDirection: "column",
            ...sx,
          },
          (theme) => ({
            [theme.breakpoints.up("sm")]: {
              "&:hover": {
                backgroundColor: CARD_COLOR_MAP[color].hoverBgColor,
              },
            },
            // [theme.breakpoints.down("sm")]: {
            //   "&:active": {
            //     backgroundColor: CARD_COLOR_MAP[color].hoverBgColor,
            //   },
            // },
          }),
        ]}
        onClick={handleClick}
      >
        <CardHeader
          sx={{
            p: 0,
            [`.${cardHeaderClasses.title}`]: {
              cursor: "inherit",
              fontSize: "20px",
              fontWeight: 500,

              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              overflow: "hidden",
            },
          }}
          title={content.name}
        ></CardHeader>
        <CardContent
          sx={{
            p: "0 !important",
            mt: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              flex: 1,
              cursor: "inherit",
              maxHeight: "88px",

              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "4",
              overflow: "hidden",
            }}
          >
            {content.summary}
          </Typography>
          <Stack
            direction="row"
            spacing="8px"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: ["10px", 0] }}
          >
            <Stack direction="row" spacing="8px">
              {content.labels?.map((label) => (
                <Box
                  component="span"
                  key={label}
                  sx={{
                    backgroundColor: "rgba(16, 16, 16, 0.10)",
                    borderRadius: "7px",
                    p: "5px 10px",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </Box>
              ))}
            </Stack>
            {content.url && (
              <SvgIcon
                sx={{ fontSize: "16px", color: "transparent" }}
                component={LinkSvg}
                inheritViewBox
              ></SvgIcon>
            )}
            {isCompleted && (
              <SvgIcon
                sx={{ fontSize: "40px", color: "transparent" }}
                component={CompletedSvg}
                inheritViewBox
              ></SvgIcon>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PreviewCard;
