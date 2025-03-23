import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Vyper",
  relativeURL: "/vyper",
}));

const VyperLayout = async ({ children }) => {
  return <>{children}</>;
};

export default VyperLayout;
