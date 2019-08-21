const fs = require('fs');
var defaultnode = "https://codefundo-zyr64m.azurewebsites.net/applications";
var Web3 = require("web3");
var HDWalletProvider = require("truffle-hdwallet-provider");

var defaultnode = "https://codefundo-zyr64m.azurewebsites.net/applications";
var Web3 = require("web3");
module.exports = {
  networks: {
    defaultnode: {
      provider: new Web3.providers.HttpProvider(defaultnode),
      network_id: "*"
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    votingsystem: {
      network_id: "*",
      gas: 5000000,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\user\\Desktop\\Mnemonic1.env', 'utf-8'), "https://codefundo-zyr64m.azurewebsites.net/applications"),
      consortium_id: 1566214976150
    }
  },
  mocha: {},
  compilers: {
    solc: {}
  }
};
