import { genMeta } from "@/utils/route";

export async function generateMetadata() {
  return genMeta({ titleSuffix: "Events", relativeURL: "/events" });
}

export default function EventsLayout({ children }) {
  return <>{children}</>;
}
