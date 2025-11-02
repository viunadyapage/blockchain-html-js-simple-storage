require("@nomiclabs/hardhat-ethers");

module.exports = {
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["0x43d3f880dbb540283d13f536592c7d49ea7db14e498c7163858b2ea2157f65a5"],
      chainId: 1337,
    },
  },
  solidity: "0.8.19",
};