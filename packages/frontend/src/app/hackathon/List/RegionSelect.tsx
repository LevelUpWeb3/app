import { MenuItem, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Select from "@/components/Select";
import { HACKATHON_REGION_LIST } from "@/constants";

const RegionSelect = (props) => {
  const { sticky, top, value, onChange } = props;
  const theme = useTheme();

  const handleChangeNetwork = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select
      sx={{
        [theme.breakpoints.up("md")]: {
          position: sticky ? "sticky" : "static",
          top,
          zIndex: 1,
          width: "250px",
        },

        [theme.breakpoints.down("md")]: {
          gridRow: "2 / 3",
        },
      }}
      value={value}
      onChange={handleChangeNetwork}
      showScrollbar
      renderValue={(selected) => (
        <Box display="flex" alignItems="center">
          <Image
            src="/images/hackathon/icon/location.svg"
            width="24"
            height="24"
            className="mr-2"
            alt="Location Icon"
          />
          <Typography
            sx={{
              fontSize: ["1.6rem", "2rem"],
              lineHeight: ["2.4rem", "3.6rem"],
              fontWeight: 600,
              cursor: "inherit",
            }}
          >
            {selected}
          </Typography>
        </Box>
      )}
    >
      {HACKATHON_REGION_LIST.map((item) => (
        <MenuItem key={item} value={item} sx={{ px: ["1.6rem", "2.4rem"] }}>
          <Box display="flex" alignItems="center">
            <Box width="24px" height="24px" className="mr-2" />
            <Typography
              sx={{
                fontSize: ["1.6rem", "2rem"],
                lineHeight: ["2.4rem", "3.6rem"],
                fontWeight: 600,
                cursor: "inherit",
              }}
            >
              {item}
            </Typography>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
};
export default RegionSelect;
