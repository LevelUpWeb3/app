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
  // nextjs has title.template for this nested title
  // but it won't work for titles in og and twitter
  const title = titleSuffix
    ? `${ROOT_METADATA.title} - ${titleSuffix}`
    : undefined;
  description = description || ROOT_METADATA.description;

  const currentRoute: Metadata = {
    title,
    openGraph: { title, description, url: relativeURL },
    twitter: { title, description },
  };

  // nextjs complains about null deprecated value (colorScheme, ...)
  // when merge with parent route metadata
  const merged = mergeNoNullish({}, currentRoute, otherOpts);
  return merged;
}
