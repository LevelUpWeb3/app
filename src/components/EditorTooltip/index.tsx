import { Stack, SvgIcon, Tooltip } from "@mui/material";

import { tooltipClasses } from "@mui/material/Tooltip";
import ErrorSvg from "@/assets/svgs/solidity/error.svg";
import SuccessSvg from "@/assets/svgs/solidity/success.svg";
import CloseSvg from "@/assets/svgs/solidity/close.svg";

const EDITOR_TOOLTIP_BG = {
  disabled: "#A494FF4D",
  default: "#EBF1A2",

  error: "#FFB6A6",
  success: "#2C6E2E",
};

const EditorTooltip = (props) => {
  const {
    type = "default",
    title,
    children,
    offset = "14px",
    onClose,
    ...restProps
  } = props;
  return (
    <Tooltip
      {...restProps}
      // PopperProps={{
      //   popperOptions: {
      //     modifiers: [
      //       {
      //         name: "offset",
      //         options: {
      //           offset,
      //         },
      //       },
      //     ],
      //   },
      // }}
      title={
        <Stack direction="row" alignItems="center" spacing="8px">
          {["error", "success"].includes(type) && (
            <SvgIcon
              sx={{ fontSize: "14px", color: "transparent" }}
              component={type === "error" ? ErrorSvg : SuccessSvg}
              inheritViewBox
            ></SvgIcon>
          )}
          <span>{title}</span>
          {["error", "success"].includes(type) && (
            <SvgIcon
              role="button"
              sx={{ fontSize: "10px", color: "transparent" }}
              component={CloseSvg}
              inheritViewBox
              onClick={() => onClose("manually")}
            ></SvgIcon>
          )}
        </Stack>
      }
      slotProps={{
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: offset,
              },
          },
        },
        tooltip: {
          sx: {
            [`&.${tooltipClasses.tooltip}`]: {
              backgroundColor: EDITOR_TOOLTIP_BG[type],
              p: "8px 15px",
              color: "text.primary",
              mt: "24px",
              fontSize: "13px",
              cursor: "default",
            },
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default EditorTooltip;
