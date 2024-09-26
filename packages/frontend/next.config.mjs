/** @type {import('next').NextConfig} */

import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import mdxMermaid from "mdx-mermaid";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import "./scripts/processChallengeMarkdown.js";
import "./scripts/processSolidityMarkdown.js";
import "./scripts/processContentMarkdown.js";
import "./scripts/processHackathonMarkdown.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    deviceSizes: [600, 900, 1200, 1536],
  },
  // trailingSlash: true,
  // eslint-disable-next-line
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    config.ignoreWarnings = [
      function ignoreSourcemapsloaderWarnings(warning) {
        return (
          warning.module &&
          warning.module.resource.includes("node_modules") &&
          warning.details &&
          warning.details.includes("source-map-loader")
        );
      },
    ];
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );
    config.module.rules.push(
      ...[
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        // .md
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ],
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [mdxMermaid.default, { output: "svg" }]],
    rehypePlugins: [],
    components: { mermaid: Mermaid, Mermaid },
  },
});

export default withMDX(nextConfig);
