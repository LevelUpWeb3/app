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
  ogImg: "/images/level-up-preview.png",
};

const routes: PageMetadata[] = [
  {
    name: "Native zkEVM Layer 2 for Ethereum",
    path: "/",
  },
  {
    name: "Solidity",
    path: "/solidity",
  },
  {
    name: "Solidity Challenges",
    path: "/solidity/:Slug",
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
    name: "Events",
    path: "/events",
  },
  {
    name: "Events",
    path: "/events/:Slug",
  },
  {
    name: "Ethcon",
    path: "/events/ethcon-korea/:Slug",
  },
  {
    name: "Event Registration",
    path: "/events/:Slug/register",
  },
  {
    name: "Event Submission",
    path: "/events/:Slug/submit",
  },
  {
    name: "Content",
    path: "/content",
  },
  {
    name: "Content",
    path: "/content/:Slug",
  },
  {
    name: "Podcast",
    path: "/podcast",
  },
  // TODO: Revive grants as needed
  // {
  //   name: "Grants",
  //   path: "/grants",
  // },
  {
    name: "Learn More",
    path: "/learn-more",
  },
];

export default routes;
