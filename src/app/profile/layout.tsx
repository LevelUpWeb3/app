import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Profile",
  relativeURL: "/profile",
}));

export default function ProfileLayout({ children }) {
  return <>{children}</>;
}
