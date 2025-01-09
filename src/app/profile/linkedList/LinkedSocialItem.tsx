import { Box, SvgIcon, Typography } from "@mui/material";
import { truncateAddress } from "@/utils";

const LinkedSocialItem = ({
  name,
  icon,
  onLinkClick,
  onUnlinkClick,
  user,
  itemKey,
  displayField,
  showUnlink,
}) => {
  return (
    <Box
      sx={{
        border: "1.5px solid #000",
        padding: "1.2rem 1.6rem",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
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
      <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {user?.[itemKey] ? (
          <>
            <Typography
              sx={{
                color: "rgba(16, 16, 16, 0.6)",
                marginBottom: "-4px",
              }}
            >
              {itemKey === "wallet"
                ? truncateAddress(user[itemKey][displayField])
                : user[itemKey][displayField]}
            </Typography>
            {showUnlink && (
              <>
                <SvgIcon
                  sx={{ fontSize: "1.4rem", color: "inherit" }}
                  inheritViewBox
                  component={
                    require("@/assets/svgs/profile/unlink.svg").default
                  }
                  onClick={() =>
                    onUnlinkClick(
                      user?.[itemKey].address ||
                        user?.[itemKey].telegramUserId ||
                        user?.[itemKey].subject,
                    )
                  }
                />
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    marginBottom: "-4px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    onUnlinkClick(
                      user?.[itemKey].address ||
                        user?.[itemKey].telegramUserId ||
                        user?.[itemKey].subject,
                    )
                  }
                >
                  Unlink
                </Typography>
              </>
            )}
          </>
        ) : (
          <>
            <SvgIcon
              sx={{ fontSize: "1.4rem", color: "inherit" }}
              inheritViewBox
              component={require("@/assets/svgs/profile/link.svg").default}
              onClick={onLinkClick}
            />
            <Typography
              sx={{
                fontSize: "1.6rem",
                fontWeight: 500,
                marginBottom: "-4px",
                cursor: "pointer",
              }}
              onClick={onLinkClick}
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
