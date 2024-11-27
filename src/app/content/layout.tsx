import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Content",
  relativeURL: "/content",
}));

const ContentLayout = async ({ children }) => {
  return <>{children}</>;
};

export default ContentLayout;
