import { headers } from "next/headers";
import Card from "@/components/Card";
import { Stack, Container, Box } from "@mui/material";
import Data from "@/app/content/content.json";

import { shuffleArray } from "@/utils";

interface ContentItemWithId {
  id: string;
  url?: never;
}

interface ContentItemWithUrl {
  url: string;
  id?: never;
}

type ContentItem = {
  index: number;
  name: string;
  summary: string;
  labels: string[];
} & (ContentItemWithId | ContentItemWithUrl);

const MoreContentSlide = async (props) => {
  const { index } = props;

  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/contents/markdownData.json`).then(
    (res) => res.json(),
  );

  const filteredData = shuffleArray(
    [...Data, ...data].filter((item: ContentItem) => item.index !== index),
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
