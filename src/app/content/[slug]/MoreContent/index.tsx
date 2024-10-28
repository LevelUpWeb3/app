import { headers } from "next/headers";
import SlideSvg from "@/assets/svgs/content/slide.svg";
import Card from "@/components/Card";
import { Stack, Typography } from "@mui/material";

import Data from "../../content.json";

interface DataItem {
  labels: string[];
  index: number;
  id: string;
  url: string;
}

interface ContentFooterProps {
  currentContentIndex: number;
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const ContentFooter: React.FC<ContentFooterProps> = async ({
  currentContentIndex,
}) => {
  const { origin } = new URL(headers().get("x-url")!);
  const data = await fetch(`${origin}/data/contents/markdownData.json`).then(
    (res) => res.json(),
  );

  const filteredData = shuffleArray(
    [...Data, ...data].filter(
      (item: DataItem) => item.index !== currentContentIndex,
    ),
  );

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: ["20px", "40px"] }}
      >
        <Typography sx={{ fontSize: ["24px", "36px"] }}>
          More Content
        </Typography>
        <SlideSvg className="invisible sm:visible"></SlideSvg>
      </Stack>

      <Stack
        direction={["column", "row"]}
        sx={{
          gap: ["15px", "20px"],
          overflowX: "auto",
          pb: [0, "16px"],
        }}
      >
        {filteredData.slice(0, 5).map((item, index) => (
          <Card
            color="purple"
            className="flex-1 sm:flex-[0_0_30%]"
            key={index}
            content={item}
          />
        ))}
      </Stack>
    </>
  );
};

export default ContentFooter;
