"use client";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DateSelect from "./DateSelect";

const AdaptableComponent = ({
  stickyTop,
  isSticky,
  dateParams,
  handleChangeDate,
}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobileView ? (
        <>
          <div className="mb-[2.4rem] mt-[4rem] flex text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
            All competitions
          </div>
          <div className="mb-[2.4rem] flex gap-4">
            <DateSelect
              top={stickyTop}
              sticky={isSticky}
              value={dateParams.level}
              onChange={handleChangeDate}
            />
          </div>
        </>
      ) : (
        <div className="mb-[2.4rem] mt-[4rem] flex text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
          All competitions
          <div className="ml-auto flex gap-4">
            <DateSelect
              top={stickyTop}
              sticky={isSticky}
              value={dateParams.level}
              onChange={handleChangeDate}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdaptableComponent;
