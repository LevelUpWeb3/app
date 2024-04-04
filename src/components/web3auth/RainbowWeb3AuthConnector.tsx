"use client";

import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { UX_MODE, WEB3AUTH_NETWORK } from "@web3auth/base";
import { Wallet, WalletDetailsParams } from "@rainbow-me/rainbowkit";
import { createConnector as createWagmiConnector } from "wagmi";
import { ETHCHAIN_CONFIG } from "@/constants/chainconfig";

const clientId = process.env.NEXT_PUBLIC_W3A_CLIENT_ID || "";

const chainConfig = ETHCHAIN_CONFIG;

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig }
});

const web3AuthInstance = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
  uiConfig: {
    mode: "dark",
    useLogoLoader: true,
    modalZIndex: "9999999999",
    logoLight: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    logoDark: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    defaultLanguage: "en",
    theme: {
      primary: "#768729"
    },
    uxMode: UX_MODE.REDIRECT
  }
});

export const rainbowWeb3AuthConnector = (): Wallet => ({
  id: "web3auth",
  name: "Social Login (web3auth)",
  rdns: "web3auth",
  iconUrl: "https://web3auth.io/images/web3authlog.png",
  iconBackground: "#fff",
  installed: true,
  downloadUrls: {},
  createConnector: (walletDetails: WalletDetailsParams) =>
    createWagmiConnector((config) => ({
      ...Web3AuthConnector({
        web3AuthInstance
      })(config),
      ...walletDetails
    }))
});
