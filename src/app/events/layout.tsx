import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Events",
  relativeURL: "/events",
}));

export default function EventsLayout({ children }) {
  return <>{children}</>;
}
