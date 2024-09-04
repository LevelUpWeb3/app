import { MenuItem, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Select from "@/components/Select";
import { CHALLENGE_LEVEL_LIST } from "@/constants";

const LevelSelect = (props) => {
  const { sticky, top, value, onChange } = props;
  const theme = useTheme();

  const handleChangeLevel = (e) => {
    onChange(e.target.value);
  };

  return (
    <Select
      sx={{
        [theme.breakpoints.up("md")]: {
          position: sticky ? "sticky" : "static",
          top,
          zIndex: 1,
          width: "150px",
        },

        [theme.breakpoints.down("md")]: {
          gridRow: "2 / 3",
        },
      }}
      value={value}
      onChange={handleChangeLevel}
    >
      {CHALLENGE_LEVEL_LIST.map((item) => (
        <MenuItem key={item} value={item} sx={{ paddingLeft: ["0rem"] }}>
          <Box display="flex" alignItems="center">
            <Box width="24px" height="24px" />
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
export default LevelSelect;
