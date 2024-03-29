export interface PageMetadata {
  name: string;
  path: string;
  description?: string;
  ogImg?: string;
  twitterImg?: string;
}

export const DEFAULT_METADATA = {
  name: "",
  description: "Native zkEVM Layer 2 for Ethereum",
  ogImg: "/og_scroll.png",
};

const routes: PageMetadata[] = [
  {
    name: "Native zkEVM Layer 2 for Ethereum",
    path: "/",
  },
  {
    name: "Challenges",
    path: "/challenges",
  },
  {
    name: "Challenge Detail",
    path: "/challenges/:Id",
  },
  {
    name: "Content",
    path: "/content",
  },
  {
    name: "Podcast",
    path: "/podcast",
  },
  {
    name: "How it works",
    path: "/how-it-works",
  },
];

export default routes;
