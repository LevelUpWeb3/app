import { isHexString } from "ethers";
import find from "lodash/find";
import { DependencyList } from "react";
import { mergeWith, isNil, isPlainObject } from "lodash";
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
  isMilliseconds: boolean = true,
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

export function generateShareTwitterURL(text, referer, via = "levelupweb3") {
  return `https://twitter.com/intent/tweet?original_referer=${encodeURIComponent(referer)}&text=${encodeURIComponent(text)}`;
}

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Deep merges objects while removing nullish (null/undefined) values
 * @param target The target object
 * @param sources The source objects to merge
 * @returns Merged object without nullish values
 */
export function mergeNoNullish<T extends object>(
  target: T,
  ...sources: Partial<T>[]
): T {
  if (sources.length < 2) {
    throw new Error("At least 3 objects (1 target and 2 sources) are required");
  }

  const customizer = (value: any, srcValue: any): any => {
    // Handle arrays specially
    if (Array.isArray(value) && Array.isArray(srcValue)) {
      return srcValue.filter((item) => !isNil(item));
    }

    // Skip nullish values from source
    if (isNil(srcValue)) {
      return value;
    }
  };

  // First, merge all objects
  const merged = mergeWith({}, target, ...sources, customizer);

  // Then recursively remove nullish values
  const removeNullish = (obj: any): any => {
    if (!isPlainObject(obj)) {
      return isNil(obj) ? undefined : obj;
    }

    if (Array.isArray(obj)) {
      return obj
        .filter((item) => !isNil(item))
        .map((item) => removeNullish(item));
    }

    return Object.entries(obj).reduce((acc, [key, value]) => {
      const cleanValue = removeNullish(value);
      if (!isNil(cleanValue)) {
        acc[key] = cleanValue;
      }
      return acc;
    }, {} as any);
  };

  return removeNullish(merged) as T;
}
