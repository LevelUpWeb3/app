"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet, scroll } from "viem/chains";

import type { PrivyClientConfig } from "@privy-io/react-auth";
import { PrivyProvider } from "@privy-io/react-auth";
import { WagmiProvider, createConfig } from "@privy-io/wagmi";
import { MessageProvider } from "./MessageProvider";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [scroll],
  transports: {
    [scroll.id]: http(),
  },
});

const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "off",
    noPromptOnSignature: false,
  },
  loginMethodsAndOrder: {
    primary: ["google", "github", "email", "detected_ethereum_wallets"],
    overflow: ["coinbase_wallet", "wallet_connect"],
  },
  appearance: {
    showWalletLoginFirst: false,
    landingHeader: "Log in to Level Up",
    loginMessage: "Track your progress and develop your Level Up profile.",
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      apiUrl={process.env.NEXT_PUBLIC_PRIVY_AUTH_URL as string}
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={privyConfig}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig} reconnectOnMount={false}>
          <MessageProvider>{children}</MessageProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
