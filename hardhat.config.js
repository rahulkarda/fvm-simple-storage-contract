require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hyperspace",
  networks: {
    hyperspace: {
      chainId: 3141,
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: ['e8ee35f7b93f15228bbfb1287c5171c5a505f5d78fb06aa9b53330278960a30c'],
    },
  }
};
