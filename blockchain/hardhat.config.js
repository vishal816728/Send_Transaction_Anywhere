require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/Nqtor9dR6hf_iPJDrw_995GixLp-ftus",
      accounts:['82f88e523497e0bae7866d16bd6a258538e33dd0bd24318d49f9b4ee558ada7b']
    }
  }
};


// https://eth-rinkeby.alchemyapi.io/v2/Nqtor9dR6hf_iPJDrw_995GixLp-ftus
