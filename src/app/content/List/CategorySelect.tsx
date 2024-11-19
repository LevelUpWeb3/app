import { Chip, chipClasses, Stack, useScrollTrigger } from "@mui/material";

import { CONTENT_CATEGORY_LIST, LAYOUT_HEADER_HEIGHT } from "@/constants";

const CategorySelect = (props) => {
  const { value, onChange } = props;

  const trigger = useScrollTrigger();

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#2626261A",
        p: ["6px", "4px 6px"],
        borderRadius: "20px",
        flexWrap: "wrap",

        position: ["static", "sticky"],
        zIndex: 1,
        top: trigger ? "20px" : LAYOUT_HEADER_HEIGHT,
      }}
    >
      {CONTENT_CATEGORY_LIST.map((item) => (
        <Chip
          key={item}
          variant="outlined"
          label={item}
          sx={{
            border: "1.5px solid #101010",
            backgroundColor:
              value === item ? "text.primary" : "background.default",
            color: value === item ? "primary.contrastText" : "text.primary",
            borderRadius: "15px",
            height: "46px",
            m: "4px",

            [`.${chipClasses.label}`]: {
              fontSize: ["14px", "16px"],
              fontWeight: 500,
              px: ["4px", "14px"],
            },
            "&:hover": {
              backgroundColor:
                value === item ? "#101010 !important" : "#F4F4F4 !important",
            },
          }}
          onClick={() => onChange(item)}
        ></Chip>
      ))}
    </Stack>
  );
};

export default CategorySelect;
