import Card from "@/components/Card";
import { Stack, Box } from "@mui/material";
import Data from "@/app/content/content.json";
import markdownData from "../../app/content/markdownData.json";

import { shuffleArray } from "@/utils";

interface ContentItemBase {
  author: string;
  index: number;
  name: string;
  summary: string;
  labels: string[];
}

type ContentItemWithId = ContentItemBase & {
  id: string;
  url?: never;
  authorIcon?: string;
  authorLink?: string;
  published?: string;
  readTime?: string;
};

type ContentItemWithUrl = ContentItemBase & {
  url: string;
  id?: never;
  authorIcon?: string;
  authorLink?: string;
  published?: string;
  readTime?: string;
};

const MoreContentSlide = async (props) => {
  const { index } = props;

  const filteredData = shuffleArray(
    [
      ...(Data as ContentItemWithUrl[]),
      ...(markdownData as ContentItemWithId[]),
    ].filter((item) => item.index !== index),
  );

  return (
    <Box sx={{ overflow: "visible" }}>
      <Stack
        direction={["column", "row"]}
        sx={{
          gap: ["15px", "20px"],
          overflowX: "auto",
          px: ["20px", "40px", "60px"],
          "@media (min-width: 1520px)": {
            px: "calc((100vw - 1400px) / 2)",
          },
          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >
        {filteredData.slice(0, 5).map((item, index) => (
          <Card
            color="purple"
            className="flex-1 sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_450px]"
            key={index}
            content={item}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MoreContentSlide;
