import { genMeta } from "@/utils/route";

export async function generateMetadata() {
  return genMeta({ titleSuffix: "Solidity", relativeURL: "/solidity" });
}

const SolidityLayout = async ({ children }) => {
  return <>{children}</>;
};

export default SolidityLayout;
