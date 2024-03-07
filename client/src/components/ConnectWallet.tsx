import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { arbitrum, mainnet } from "wagmi/chains";

const projectId = "90942699b33a7c47b09a4d1dd26ea59a";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
});

export const WalletConnectionButton = () => {
  const { open } = useWeb3Modal();
  return (
    <button
      onClick={() => open()}
      className="w-[25%] md:w-[20%] lg:w-[11%] h-[2rem] lg:h-[3rem] py-0 lg:py-[10px] px-0 lg:px-4 rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733]"
    >
      <p className="text-[#FFFFFF] text-center font-semibold poppins text-[0.6rem] lg:text-[0.75rem] leading-[0.8rem] lg:leading-[1.125rem] tracking-normal">
        Connect Wallet
      </p>
    </button>
  );
};
