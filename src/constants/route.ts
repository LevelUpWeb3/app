const DEFAULT_METADATA = {
  name: "",
  title: "Level Up",
  description:
    "The best platform for Web3 builders to skill up, find jobs and launch ideas",
  ogImg: "/images/level-up-preview.png",
  twitterImg: "/images/level-up-preview.png",
};

export const ROOT_METADATA = {
  metadataBase: new URL("https://www.levelup.xyz"),
  title: DEFAULT_METADATA.title,
  applicationName: DEFAULT_METADATA.title,
  description: DEFAULT_METADATA.description,
  keywords: [
    "layer 2",
    "ethereum",
    "zero knowledge proof",
    "scalability",
    "ZKP",
    "l2",
    "EVM compatible",
    "zk rollup",
  ],
  openGraph: {
    title: DEFAULT_METADATA.title,
    description: DEFAULT_METADATA.description,
    siteName: DEFAULT_METADATA.title,
    url: "/",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: DEFAULT_METADATA.title,
    description: DEFAULT_METADATA.description,
  },
  icons: {
    apple: "/logo.png",
  },
  // See https://developers.google.com/web/fundamentals/web-app-manifest/
  manifest: "/manifest.json",
};
