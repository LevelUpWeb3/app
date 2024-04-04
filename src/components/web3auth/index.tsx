"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { CustomRainbowKitButton } from "./CustomRainbowKitButton";
import { WagmiProvider, http } from "wagmi";
import { rainbowWeb3AuthConnector } from "./RainbowWeb3AuthConnector";
import { rainbowWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sepolia, mainnet } from "wagmi/chains";
import {
  SCROLLCHAIN_CONFIG,
  SCROLLSEPOLIACHAIN_CONFIG
} from "@/constants/chainconfig";

const config = getDefaultConfig({
  appName: "Level Up App",
  projectId: "0c87f5be846db6a45572b5860480e5a5",
  chains: [mainnet, sepolia, SCROLLCHAIN_CONFIG, SCROLLSEPOLIACHAIN_CONFIG],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [SCROLLCHAIN_CONFIG.id]: http(),
    [SCROLLSEPOLIACHAIN_CONFIG.id]: http()
  },
  wallets: [
    {
      groupName: "Recommended",
      wallets: [rainbowWallet, rainbowWeb3AuthConnector, metaMaskWallet]
    }
  ]
});

const queryClient = new QueryClient();

export default function Web3AuthWrapper() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <CustomRainbowKitButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
