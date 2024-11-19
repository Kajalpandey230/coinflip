import { COINFLIP_ABI } from "./coinFlipAbi";

export const DEFAULT_THEME = "dark";
export const WAITFOR_CONFIRMATIONS = 2;

export const COINFLIP_ADDRESS = "0x097d039Bb7353B0bcD3d585B5a71e8B575F2f3f7";

export const COINFLIP = {
  address: COINFLIP_ADDRESS,
  abi: COINFLIP_ABI,
};

export const CHAINS = {
  1: {
    name: "MainNet",
    etherScanPrefix: "",
  },
  11155111: {
    name: "Sepolia",
    etherScanPrefix: "sepolia.",
  },
};
export const SUPPORTED_CHAINS = [11155111];
