import {
  getCompilerVersions,
  solidityCompiler,
} from '@agnostico/browser-solidity-compiler';

// Load available WASM solc versions
const loadVersions = async () => {
  const { releases, latestRelease, builds } = await getCompilerVersions() as any;
  return { releases, latestRelease, builds };
};

export const compile = async (source: string) => {
  // Extract solidity version from source
  const versionMatch = source.match(/pragma solidity\s+([\^>=<]?\d+\.\d+\.\d+)/);
  let usingVersion = versionMatch ? versionMatch[1] : '0.8.17'; // Use a more common default version

  // Remove '^' if present
  usingVersion = usingVersion.replace('^', '');

  const availableVersions = await loadVersions();
  console.log("Using solidity version:", usingVersion);

  if (!availableVersions.releases[usingVersion]) {
    throw new Error(`Version ${usingVersion} not found. Available versions: ${Object.keys(availableVersions.releases).join(', ')}`);
  }

  const versionUrl = `https://binaries.soliditylang.org/bin/${availableVersions.releases[usingVersion]}`;

  try {
    const compiled = await solidityCompiler({
      version: versionUrl,
      contractBody: source,
      options: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    });
    return compiled as any;
  } catch (error) {
    console.error("Compilation error:", error);
    throw error;
  }
};
