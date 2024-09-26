import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://scroll.io", changeFrequency: "daily", priority: 0.8 },
    {
      url: "https://scroll.io/bridge",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://scroll.io/ecosystem",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://scroll.io/brand-kit",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://scroll.io/story",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://scroll.io/portal",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    { url: "https://scroll.io/blog", changeFrequency: "weekly", priority: 0.7 },
    {
      url: "https://scroll.io/join-us",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://scroll.io/rollupscan",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://scroll.io/developer-nft",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://scroll.io/developer-nft/mint",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://scroll.io/sticker-vote",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // { url: "https://scroll.io/sticker-winners", changeFrequency: "monthly", priority: 0.6 },
    {
      url: "https://scroll.io/bridge/faq",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/terms-of-service",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/scaling-security",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/designing-scroll-origins",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/community-update-november",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/data-availability-4844",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/community-update-october",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/scroll-origins-nft",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/scrolls-security-measures",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/founder-letter",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/scrolls-fresh-coat",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/scroll-sepolia",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/contribute-to-scroll",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/alpha-testnet",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/release-note-0109",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/proof-generation",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/kzg",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/upgrading-pre-alpha-testnet",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/architecture",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/technical-principles",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/pre-alpha-testnet",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/vision-and-values",
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://scroll.io/blog/zkevm",
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
