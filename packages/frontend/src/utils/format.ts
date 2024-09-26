import dayjs from "dayjs";
import { formatUnits, parseUnits } from "ethers";
import _ from "lodash";

export const truncateAddress = (address: string): string => {
  return address ? `${address.slice(0, 6)}…${address.slice(38, 42)}` : "-";
};

export const truncateHash = (hash: string) => {
  return hash ? `${hash.slice(0, 6)}…${hash.slice(-4)}` : "-";
};

export const convertHexadecimal = (value: string): number => {
  return parseInt(value, 16);
};

export const toHexadecimal = (value: number): string => {
  return `0x${value.toString(16)}`;
};

export function sanitizeNumericalString(numStr: string) {
  return numStr.replace(/[^0-9.,]|[.,](?=.*[.,])/g, "").replace(/,/g, ".");
}

export function maxDecimals(amount: string, decimals: bigint = BigInt(18)) {
  const sanitizedAmount = sanitizeNumericalString(amount);
  const indexOfDecimal = sanitizedAmount.indexOf(".");
  if (indexOfDecimal === -1) {
    return sanitizedAmount;
  }

  const wholeAmountStr = sanitizedAmount.slice(0, indexOfDecimal) || "0";
  const wholeAmount = BigInt(wholeAmountStr).toString();

  const fractionalAmount = sanitizedAmount.slice(indexOfDecimal + 1);
  const decimalAmount =
    decimals !== BigInt(0)
      ? `.${fractionalAmount.slice(0, Number(decimals))}`
      : "";

  return `${wholeAmount}${decimalAmount}`;
}

export function fixedDecimals(amount: string, decimals: bigint = BigInt(18)) {
  if (amount === "") {
    return amount;
  }
  const mdAmount = maxDecimals(amount, decimals);
  return mdAmount;
}

export function amountToBN(
  amount: string | number | undefined,
  decimals: bigint = BigInt(18)
): bigint {
  try {
    const fixedAmount = fixedDecimals(
      amount ? amount.toString() : "",
      decimals
    );
    return parseUnits(fixedAmount || "0", decimals);
  } catch (e) {
    return BigInt(0);
  }
}

export function BNToAmount(
  value: bigint,
  decimals: bigint = BigInt(18)
): string {
  try {
    return formatUnits(value.toString(), decimals);
  } catch (e) {
    return "0";
  }
}

export const checkAmountOverflow = (
  inputAmount,
  decimals: bigint = BigInt(18)
) => {
  try {
    if (!inputAmount) {
      return true;
    }
    const clipDecimals = maxDecimals(inputAmount, decimals);
    parseUnits(clipDecimals, decimals);
    return true;
  } catch (e) {
    return false;
  }
};

export const formatUTCDate = (date, needSub?: boolean) => {
  let finalDate = date;
  if (needSub) {
    finalDate = date.subtract(1, "ms");
  }
  return `${finalDate.utc().format("MMM D,YYYY h:mmA")} GMT`;
};

export const formatDate = (
  date,
  options: { needSub?: boolean; withTime?: boolean; isUnix?: boolean } = {}
) => {
  const { needSub, withTime, isUnix } = options;
  let finalDate = dayjs.isDayjs(date)
    ? date
    : isUnix
      ? dayjs.unix(date)
      : dayjs(date);
  if (needSub) {
    finalDate = date.subtract(1, "ms");
  }
  if (withTime) {
    return finalDate.format("MMM D, YYYY h:mmA");
  }
  return finalDate.format("MMM D, YYYY");
};

export const trimErrorMessage = (message) => {
  return message.split("(")[0].trim();
};
