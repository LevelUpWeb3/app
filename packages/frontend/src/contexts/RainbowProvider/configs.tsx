import { Chain, Wallet } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  braveWallet,
  coinbaseWallet,
  frameWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { parseUnits } from "ethers";
import { configureChains, mainnet, sepolia } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import { CHAIN_ID, ETH_SYMBOL, L2_NAME, RPC_URL } from "@/constants";
// import { networkType } from "@/utils"

interface WalletConfig {
  name: string;
  wallet: Wallet;
  visible: boolean;
  fixedWallet?: boolean;
}

const createWalletConfig = (
  name: string,
  walletFunction: () => Wallet,
  condition: boolean,
  fixedWallet?: boolean
): WalletConfig => {
  return {
    name,
    wallet: walletFunction(),
    visible: condition,
    fixedWallet,
  };
};

export const scrollChain: Chain = {
  id: CHAIN_ID.L2,
  name: L2_NAME,
  network: L2_NAME,
  iconUrl: "https://scroll.io/logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: L2_NAME,
    symbol: ETH_SYMBOL,
  },
  rpcUrls: {
    default: {
      http: [RPC_URL.L2],
    },
    public: {
      http: [RPC_URL.L2],
    },
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com",
    },
  },
};

const projectId = "14efbaafcf5232a47d93a68229b71028";

const { chains, publicClient } = configureChains(
  // ankr
  [mainnet, sepolia, scrollChain],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const walletConfigs: WalletConfig[] = [
  createWalletConfig(
    "MetaMask",
    () => metaMaskWallet({ chains, projectId }),
    globalThis.ethereum?.isMetaMask === true,
    true
  ),
  createWalletConfig(
    "Coinbase",
    () => coinbaseWallet({ appName: "Scroll", chains }),
    globalThis.ethereum?.isCoinbaseWallet === true,
    true
  ),
  createWalletConfig(
    "Brave",
    () => braveWallet({ chains }),
    globalThis.ethereum?.isBraveWallet === true
  ),
  createWalletConfig(
    "Rainbow",
    () => rainbowWallet({ chains, projectId }),
    globalThis.ethereum?.isRainbow === true
  ),
  createWalletConfig(
    "Safe",
    () => safeWallet({ chains }),
    globalThis.ethereum?.isSafeWallet === true
  ),
  createWalletConfig(
    "Frame",
    () => frameWallet({ chains }),
    globalThis.ethereum?.isFrame === true
  ),
  createWalletConfig(
    "imToken",
    () => imTokenWallet({ chains, projectId }),
    globalThis.ethereum?.isImToken === true
  ),
  createWalletConfig(
    "Okx Wallet",
    () => okxWallet({ chains, projectId }),
    globalThis.okxwallet?.isOKExWallet ||
      globalThis.okxwallet?.isOkxWallet === true
  ),
  createWalletConfig(
    "Rabby",
    () => rabbyWallet({ chains }),
    globalThis.ethereum?.isRabby && !globalThis.ethereum?.isMetaMask === true
  ),
  // Add any additional wallets here
];

const sortWallets = (a, b) => {
  if (a.visible === b.visible) return 0;
  if (a.visible || a.fixedWallet) return -1;
  return 1;
};

const activeWallets: Wallet[] = walletConfigs
  .filter((wallet) => wallet.visible || wallet.fixedWallet)
  .sort(sortWallets)
  .map((wallet) => wallet.wallet);

const Wallets = [
  // TODO: rainbowkit/injectedWallet.ts "Browser Wallet" and "injectedWallet.svg" -> need to detect automaticlly
  injectedWallet({ chains }),
  ...activeWallets,
  walletConnectWallet({
    projectId,
    chains,
    options: {
      metadata: {
        name: "Scroll",
        description: `Get started with our mainnet now.`,
        url: "https://scroll.io/",
        icons: ["https://scroll.io/logo_walletconnect.png"],
      },
      qrModalOptions: {
        explorerRecommendedWalletIds: [
          // metamask
          "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
          // trust
          "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
          // uniswap
          "c03dfee351b6fcc421b4494ea33b9d4b92a984f87aa76d1663bb28705e95034a",
        ],
      },
    },
  } as any),
];

export { Wallets, chains, publicClient };
