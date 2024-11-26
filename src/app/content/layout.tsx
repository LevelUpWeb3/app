import { genMeta } from "@/utils/route";

export async function generateMetadata() {
  return genMeta({ titleSuffix: "Content", relativeURL: "/content" });
}

const ContentLayout = async ({ children }) => {
  return <>{children}</>;
};

export default ContentLayout;
