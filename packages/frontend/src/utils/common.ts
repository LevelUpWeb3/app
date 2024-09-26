import { isHexString } from "ethers";
import find from "lodash/find";
import { DependencyList } from "react";

// import { STORAGE_AVAILABLE } from "../constants/storageKey"

export const shallowEquals = (a?: DependencyList, b?: DependencyList) => {
  if (a?.length !== b?.length) return false;
  if (a === undefined && b === undefined) return true;
  if (a === undefined || b === undefined) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

export function findNetworkBySlug(slug: string, networks: any[]) {
  return find(networks, ["slug", slug]);
}

export const generateExploreLink = (explorer, hash, type = "tx") => {
  return `${explorer}/${type}/${hash}`;
};

// TODO: should be isMainnet
export const isValidEmail = (email: string): boolean => {
  const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const convertDateToTimestamp = (
  dateString: string,
  isMilliseconds: boolean = true
): number => {
  let date = new Date(dateString);
  let timestamp = date.getTime();

  if (!isMilliseconds) {
    timestamp = timestamp / 1000;
  }
  return Math.floor(timestamp);
};

export const formatLargeNumber = (value: number): string => {
  if (value.toString().length <= 6) {
    return new Intl.NumberFormat("en-US").format(value);
  }
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
  }).format(value);
};

export const formatAmount = (value: number | string): string => {
  return new Intl.NumberFormat("en-US").format(+value);
};

export function isValidTransactionHash(txHash: string): boolean {
  // A valid transaction hash is a hex string of length 66 characters (including the '0x' prefix)
  const isValidLength = txHash.length === 66;
  return isValidLength && isHexString(txHash);
}
