require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({path:".env"});

const URL = process.env.NODE_URL;
const KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:URL,
      accounts:[KEY]
    }
  }
};
