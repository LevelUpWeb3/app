import { mergeNoNullish } from "@/utils";
import type { Metadata } from "next";
import { ROOT_METADATA } from "@/constants/route";

type RouteParams = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

type MetadataGeneratorProps = {
  paramsProps: RouteParams;
  parent: Promise<Metadata>;
};

type GenMetaParams = {
  titleSuffix?: string;
  description?: string;
  relativeURL?: string;
} & Partial<Metadata>;

type MetaGeneratorFn = (
  paramsProps: RouteParams,
  parent: Metadata,
) => GenMetaParams;

function defaultGenMetaFn(
  paramsProps: RouteParams,
  parent: Metadata,
): GenMetaParams {
  return {};
}

/**
 * Creates a metadata generator function for Next.js pages/routes.
 *
 * @param fn - Optional function to generate custom metadata parameters.
 *            Defaults to an empty object if not provided.
 *            Takes two parameters:
 *            1. paramsProps: Next.js route parameters object containing:
 *               - params: Dynamic route parameters
 *               - searchParams: URL search parameters
 *            2. parent: Sanitized parent metadata that's safe to inherit from parent routes
 * @returns An async function that generates merged metadata for the route
 *
 * @example
 * ```ts
 * // Basic usage
 * export const generateMetadata = genMeta((params) => ({
 *   titleSuffix: 'My Page',
 *   description: 'Page description',
 *   relativeURL: '/my-page'
 * }));
 *
 * // With additional metadata
 * export const generateMetadata = genMeta((params) => ({
 *   titleSuffix: 'My Page',
 *   robots: { index: false }
 * }));
 * ```
 *
 * The function:
 * - Merges parent metadata with current route metadata
 * - Appends titleSuffix to default title if provided
 * - Sets OpenGraph and Twitter card metadata
 * - Removes null/undefined values from the final metadata
 *
 * @param paramsProps - Route parameters from Next.js
 * @param parent - Parent route metadata
 * @returns Promise<Metadata> - Merged metadata object for the route
 */
export function genMeta(fn: MetaGeneratorFn = defaultGenMetaFn) {
  return async function (paramsProps, parent) {
    // eslint-disable-next-line no-unused-vars
    const { metadataBase, ...restParent } = await parent;
    let { titleSuffix, description, relativeURL, ...otherOpts } = fn(
      paramsProps,
      restParent,
    );

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
    const merged = mergeNoNullish(restParent, currentRoute, otherOpts);
    return merged;
  };
}
