import { Box, SvgIcon, Typography } from "@mui/material";

const LinkedSocialItem = ({
  name,
  icon,
  onLinkClick,
  onUnlinkClick,
  user,
  itemKey,
  displayField,
}) => {
  return (
    <Box
      sx={{
        border: "1.5px solid #000",
        padding: "1.2rem 1.6rem",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <SvgIcon
          sx={{ fontSize: "1.8rem", color: "inherit" }}
          component={icon}
          inheritViewBox
        />
        <Typography
          sx={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "-4px" }}
        >
          {name}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", gap: "12px", alignItems: "center" }}
        onClick={
          user?.[itemKey]
            ? () =>
                onUnlinkClick(
                  user?.[itemKey].address ||
                    user?.[itemKey].telegramUserId ||
                    user?.[itemKey].subject,
                )
            : onLinkClick
        }
      >
        {user?.[itemKey] ? (
          <>
            <Typography
              sx={{
                color: "rgba(16, 16, 16, 0.6)",
              }}
            >
              {user[itemKey][displayField]}
            </Typography>
            <SvgIcon
              sx={{ fontSize: "1.4rem", color: "inherit" }}
              inheritViewBox
              component={require("@/assets/svgs/profile/unlink.svg").default}
            />
            <Typography
              sx={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "-4px" }}
            >
              Unlink
            </Typography>
          </>
        ) : (
          <>
            <SvgIcon
              sx={{ fontSize: "1.4rem", color: "inherit" }}
              inheritViewBox
              component={require("@/assets/svgs/profile/link.svg").default}
            />
            <Typography
              sx={{ fontSize: "1.6rem", fontWeight: 500, marginBottom: "-4px" }}
            >
              Link
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default LinkedSocialItem;
