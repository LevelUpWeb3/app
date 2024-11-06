import { headers } from "next/headers";
import Card from "@/components/Card";
import { Stack } from "@mui/material";
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
    <Stack
      direction={["column", "row"]}
      sx={{
        gap: ["15px", "20px"],
        overflowX: "auto",
        pb: [0, "16px"],
        "&::-webkit-scrollbar": {
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#EAEAEA",
          borderRadius: "6px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#EAEAEA",
        },
      }}
    >
      {filteredData.slice(0, 5).map((item, index) => (
        <Card
          color="purple"
          className="flex-1 sm:flex-[0_0_60%] md:flex-[30%]"
          key={index}
          content={item}
        />
      ))}
    </Stack>
  );
};

export default MoreContentSlide;
