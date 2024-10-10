"use client";

import React, { useEffect, useState } from "react";

import Card from "@/components/Card";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import Data from "../../app/content/content.json";

interface DataItem {
  labels: string[];
  index: number;
  id: string;
  url: string;
}

interface ContentFooterProps {
  currentContentIndex: number;
}

const CardBox = styled(Box)(() => ({
  display: "flex",
  marginBottom: "4.8rem",
  flexDirection: "row",
  alignItems: "stretch",
  "& > *": {
    flexBasis: "calc(33.33% - 1.6rem)",
  },
  gap: "2.0rem",
}));

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const ContentFooter: React.FC<ContentFooterProps> = ({
  currentContentIndex,
}) => {
  const [combinedData, setCombinedData] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch("/data/contents/markdownData.json")
      .then((res) => res.json())
      .then((markdownData) => {
        const combined = [...Data, ...markdownData];
        const filtered = combined.filter(
          (item) => item.index !== currentContentIndex,
        );
        setCombinedData(filtered);
        setFilteredData(shuffleArray(filtered));
      });
  }, [currentContentIndex]);

  return (
    <div className="max-h-96">
      <h3>More Content:</h3>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardBox>
          {filteredData.slice(0, 3).map((item, index) =>
            item.id ? (
              <Link
                href={`/content/${item.id}`}
                style={{ textDecoration: "none" }}
                key={index}
              >
                <Card type="content" content={item} key={index} />
              </Link>
            ) : (
              <a
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card type="content" content={item} key={index} />
              </a>
            ),
          )}
        </CardBox>
      </Box>
    </div>
  );
};

export default ContentFooter;
