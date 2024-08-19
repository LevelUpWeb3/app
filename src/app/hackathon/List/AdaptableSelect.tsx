"use client";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DateSelect from "./DateSelect";
import RegionSelect from "./RegionSelect";

const AdaptableComponent = ({
  stickyTop,
  isSticky,
  dateParams,
  regionParams,
  handleChangeDate,
  handleChangeRegion,
}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobileView ? (
        <>
          <div className="mb-[2.4rem] mt-[4rem] flex text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
            All Events
          </div>
          <div className="mb-[2.4rem] flex gap-4">
            <DateSelect
              top={stickyTop}
              sticky={isSticky}
              value={dateParams.level}
              onChange={handleChangeDate}
            />
            <RegionSelect
              top={stickyTop}
              sticky={isSticky}
              value={regionParams.level}
              onChange={handleChangeRegion}
            />
          </div>
        </>
      ) : (
        <div className="mb-[2.4rem] mt-[4rem] flex text-[4rem] font-medium max-md:my-[2.4rem] max-md:text-[2.4rem]">
          All Events
          <div className="ml-auto flex gap-4">
            <DateSelect
              top={stickyTop}
              sticky={isSticky}
              value={dateParams.level}
              onChange={handleChangeDate}
            />
            <RegionSelect
              top={stickyTop}
              sticky={isSticky}
              value={regionParams.level}
              onChange={handleChangeRegion}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdaptableComponent;
