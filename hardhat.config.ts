import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    // Add other networks as needed
  }
};

export default config;
