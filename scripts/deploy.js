const hre = require("hardhat");

async function main() {
  const coin = await hre.ethers.getContractFactory("coin");
  const contract = await coin.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});