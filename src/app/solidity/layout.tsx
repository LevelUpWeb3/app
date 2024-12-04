import { genMeta } from "@/utils/route";

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Solidity",
  relativeURL: "/solidity",
}));

const SolidityLayout = async ({ children }) => {
  return <>{children}</>;
};

export default SolidityLayout;
