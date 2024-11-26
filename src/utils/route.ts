import { mergeNoNullish } from "@/utils";
import type { Metadata } from "next";
import { ROOT_METADATA } from "@/constants/route";

type GenMetaParams = {
  titleSuffix?: string;
  description?: string;
  relativeURL?: string;
} & Partial<Metadata>;

export function genMeta({
  titleSuffix,
  description,
  relativeURL,
  ...otherOpts
}: GenMetaParams = {}) {
  const title = titleSuffix
    ? `${ROOT_METADATA.title} - ${titleSuffix}`
    : undefined;
  description = description || ROOT_METADATA.description;

  const currentRoute: Metadata = {
    title,
    openGraph: { title, description, url: relativeURL },
    twitter: { title, description },
  };

  const merged = mergeNoNullish({}, currentRoute, otherOpts);
  return merged;
}
