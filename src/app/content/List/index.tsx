"use client";

import { useMemo, useState } from "react";

import { Box } from "@mui/material";

import Card from "@/components/Card";
import { CONTENT_CATEGORY_LIST } from "@/constants";

import CategorySelect from "./CategorySelect";
import NoData from "@/components/NoData";

interface DataItem {
  labels: string[];
  published: string;
}

const List = (props) => {
  const { data } = props;

  const [category, setCategory] = useState(CONTENT_CATEGORY_LIST[0]);

  const filteredData = useMemo(() => {
    if (category === CONTENT_CATEGORY_LIST[0]) {
      return data;
    }
    return data.filter((item: DataItem) => item.labels.includes(category));
  }, [category]);

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  return (
    <Box sx={{ flex: 1 }}>
      <CategorySelect
        value={category}
        onChange={handleChangeCategory}
      ></CategorySelect>
      {filteredData?.length ? (
        <Box
          sx={{
            mt: ["20px", "24px", "40px"],
            width: "100%",
            display: "grid",
            gridTemplateColumns: [
              "1fr",
              "repeat(auto-fill, minmax(300px, 1fr))",
            ],
            gap: ["15px", "15px", "20px"],
          }}
        >
          {filteredData
            .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
            .map((item) => (
              <Card
                color="purple"
                type="content"
                content={item}
                key={item.name}
              />
            ))}
        </Box>
      ) : (
        <NoData sx={{ mt: ["20px", "56px"] }}></NoData>
      )}
    </Box>
  );
};
export default List;
