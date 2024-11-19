<div>
<h1><strong>CoinFlip</strong></h1>
</div>

## Description

The app is a simple coin flip game where you can double up your ETH or lose your bet. The game is based on a smart contract that uses Chainlink VRF to generate a random number.

Smart contracts deployed on Sepolia testnet: [0x097d039Bb7353B0bcD3d585B5a71e8B575F2f3f7](https://sepolia.etherscan.io/address/0x097d039Bb7353B0bcD3d585B5a71e8B575F2f3f7#code)

### Smart-Contracts Deployment

#### Install the dependencies

In your terminal, make sure you are in the `coinflip` repo, then move to the blockchain folder :

```bash
cd blockchain
```

Then run the following command to install the dependencies:

```bash
yarn install
```

#### Deployement

```bash
yarn deploy
```

#### Coverage

To check the coverage of the tests, run the following command:

```bash
yarn cover
```

### Config & Client

Before each deployment, make sure to:

- Replace the contract address in `src/data/constants.js`
- Replace the abi file in `src/data/coinFlipAbi.js`
- Make sure to fund the contract with some ETH ( [Faucet for the Sepolia network](https://goerlifaucet.org/) )

---

- Change the `COINFLIP_ADDRESS` in `/src/constants.js` to your deployed contracts address;
- Copy the new abi file into the `src/abis` folder if you've made any changes to the contracts;
- Enable/disable, and update the suitable networks in `truffle-config.js`;
- In the `blockchain/` repo, create a file called `.secret` and paste your mnemonic seed phrase inside; (<b>Make sure you add this file in your `.gitignore`!!!</b>)
