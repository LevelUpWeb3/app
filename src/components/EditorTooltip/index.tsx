"use client";
import { IconButton, Stack, Tooltip } from "@mui/material";

import { tooltipClasses } from "@mui/material/Tooltip";
import ErrorSvg from "@/assets/svgs/solidity/error.svg";
import SuccessSvg from "@/assets/svgs/solidity/success.svg";
import CloseSvg from "@/assets/svgs/solidity/close.svg";
import clsx from "clsx";

const EDITOR_TOOLTIP_BG = {
  disabled: "#A494FF4D",
  default: "#EBF1A2",

  error: "#FFB6A6",
  success: "#CEF6D0",
};

const EDITOR_TOOLTIP_COLOR = {
  success: "#2C6E2E",
};

const EditorTooltip = (props) => {
  const {
    type = "default",
    title,
    children,
    offset = "14px",
    onClose,
    maxWidth = "300px",
    ...restProps
  } = props;

  const withIcon = ["error", "success"].includes(type);
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
          {withIcon && (
            <span className="w-[max-content]">
              {type === "error" && <ErrorSvg className="h-auto w-[14px]" />}
              {type === "success" && <SuccessSvg className="h-auto w-[14px]" />}
            </span>
          )}
          <span className={clsx(withIcon && "pt-[2px]")}>{title}</span>
          {withIcon && (
            <IconButton
              sx={{ p: 0, color: EDITOR_TOOLTIP_COLOR[type] ?? "#101010" }}
              onClick={() => onClose("manually")}
            >
              <CloseSvg className="h-auto w-[10px]" />
            </IconButton>
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
              color: EDITOR_TOOLTIP_COLOR[type] ?? "text.primary",
              mt: "24px",
              fontSize: "13px",
              cursor: "default",
              maxWidth,
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
