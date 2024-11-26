import { genMeta } from "@/utils/route";

export async function generateMetadata() {
  return genMeta({
    titleSuffix: "Challenges",
    relativeURL: "/challenges",
  });
}

export default function ChallengesLayout({ children }) {
  return <>{children}</>;
}
