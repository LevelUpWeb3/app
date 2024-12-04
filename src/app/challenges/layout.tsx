import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Challenges",
  relativeURL: "/challenges",
}));

export default function ChallengesLayout({ children }) {
  return <>{children}</>;
}
