---
id: getting-started
title: Introduction to Polygon PoS
sidebar_label: Quick Start
description: Build your next blockchain app on Polygon.
keywords:
  - docs
  - matic
  - polygon
image: https://matic.network/banners/matic-network-16x9.png
---

:::caution Updating the Develop Docs

The docs are being updated, enhanced, and improved. They are subject to change.
Please feel free to raise an issue or pull request if you have any queries or suggestions.

:::

Welcome to **Polygon**, the most innovative and interesting platform on which to develop your blockchain application. Blockchain technology is poised to revolutionise the way the digital world handles data and does business. You can be a part of this revolution and get a head start with decentralised application (dApp) development on Polygon.

This page will be your guide into the Polygon Ecosystem. You'll find links to useful resources and websites that will bring you up to speed on how to get started with building on not only on Polygon but on the Blockchain as a whole. 

## Key Features of Polygon
- **Speed**
The Matic Network employs a high throughput blockchain with consensus provided by a set of Block Producers, chosen by Staker's for each checkpoint using a Proof Of Stake layer to validate blocks and publish periodic proofs of Block Producers to the Ethereum mainnet. This allows for a high level of decentralization while maintaining a fast (approx. < 2 seconds) block confirmation times, ultimately leading to a high throughput for the Network.

- **Scalability**
The Polygon Network easily achieves a hypothetical transaction speed of fewer than 2 seconds on a single side chain. Using multiple side chains helps the network to handle millions of transactions per second. This mechanism (already demonstrated in the first Matic side-chain) permits the Polygon network to scale easily.

- **Security**
Polygon’s smart contracts rely on Ethereum’s security. It possesses three main security models it uses to secure the Network. It employs the use of staking management contracts on Ethereum as well as a set of incentivized validators running Heimdall and Bor nodes. Developers also have the option to implement both models (Hybrid) into their dApp.

## Developing with Polygon
You are already a Polygon developer if you are an Ethereum developer. All the tools you are familiar with on the Ethereum Blockchain are supported on Polygon right out of the box. Examples include Truffle, Remix, and Web3js. Switch over to Polygon RPC and get started!

You can deploy decentralized applications to either the Polygon Test Network or the Main Network. The Polygon Test Network(**Mumbai-Testnet**) connects with the Ethereum Goërli Testnet, which acts as its ParentChain. You can find all the network-related details here in the [network documentation](/docs/develop/network-details/network.md).

### Deploying to the Polygon Network
#### Wallets
To interact with the Polygon Network, you need to have an Ethereum - based wallet because Polygon runs on EVM(Ethereum Virtual Machine). You can choose to set up a [Metamask](/docs/develop/metamask/overview) Wallet or [Arkane](/docs/develop/wallets/arkane/intro) Wallet. You can find more information on wallet-related details and why you need to have one in our wallet documentation.

#### Smart Contracts
Polygon supports a good number of services you can use to test, compile, debug and deploy decentralized applications onto the Polygon Network. These include deployment using [Alchemy](/docs/develop/alchemy), [Chainstack](/docs/develop/chainstack), [QuickNode](/docs/develop/quicknode), [Remix](/docs/develop/remix), [Truffle](/docs/develop/truffle), [Hardhat](/docs/develop/hardhat) and even [Replit](/docs/develop/replit).

#### Connecting to Polygon
You can add Polygon to Metamask or directly using Arkane, which allows you to connect to Polygon using [RPC](/docs/develop/metamask/config-polygon-on-metamask).

:::note
You can use the same RPC with web3.js.
:::

```jsx
// Javascript
const Web3 = require('Web3')

// Sign up for a free dedicated RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.
const web3 = new Web3('https://rpc-mumbai.matic.today')

// Sign up for a free dedicated RPC URL at https://www.alchemy.com or other hosted node providers.
const web3 = new Web3('https://polygon-mainnet.g.alchemy.com/v2/<your-api-key>')

// web3 object is now connected with Polygon's node
```

### Building a new dApp on Polygon?
Decentralized applications (dApps) act as the bridge between users and their data privacy on the blockchain. The growing number of dApps confirms their effectiveness within the blockchain ecosystem, solving problems like completing transactions between two participants without the prerequisite of central authority through smart contracts.

If you do not have experience building Decentralized applications (dApps), below are links to resources that can bring you up to speed on the tools required to build, debug and deploy Decentralized applications (dApps) to the Polygon Network and the blockchain as a whole.
- [Full Stack dApp: Tutorial Series](https://kauri.io/full-stack-dapp-tutorial-series/5b8e401ee727370001c942e3/c)
- [Web3.js](https://www.dappuniversity.com/articles/web3-js-intro)
- [Ethers.js](https://docs.ethers.io/v5/)
- [Remix](https://docs.polygon.technology/docs/develop/remix/)
- [Truffle](https://docs.polygon.technology/docs/develop/truffle)
- [Metamask](https://docs.polygon.technology/docs/develop/metamask/overview)
- [Arkane](https://docs.polygon.technology/docs/develop/wallets/arkane/intro)
- [Develop a dApp using Fauna, Polygon and React](https://docs.polygon.technology/docs/develop/dapp-fauna-polygon-react)

### Already have a dApp?
If you already have a decentralized application (dApp) and you are looking for a platform to help you efficiently scale, then you are in the right place because Polygon allows you to:

1. **Easily migrate from Ethereum Virtual Machine (EVM) based chain**: Polygon prides itself in being the ultimate Layer-2 scaling solution for Ethereum. You don't have to worry about the underlying architecture when deploying or moving your dApps to the Polygon chain as long as it is EVM compatible.
2. **Use Polygon as a faster transactions layer**: Deploying your dApp to the Polygon Mainnet allows you to use Polygon as a faster transaction layer for your dApps, you can get your tokens mapped by us. You can join our [telegram technical group](http://bit.ly/matic-technical-group) to learn more.

## Side note
If this is overwhelming, that’s okay! You can jump right into the fire and start hacking. You’ve got this! 
Here are a few notes to take before you start diving into resources, repositories, and documentation:

1. **Beware the cost of being on the bleeding edge**: Like typical niche programming, dApps and blockchain development moves very quickly. While researching, you may find complex code repositories, 404s on a documentation site, or even no documentation. Use the opportunity and see it as an invitation to reach out to us on any of our social channels. The community is very open and welcoming.

2. **The learning curve may be daunting, but the barrier to entry is low**: The community is very open and welcoming. Projects welcome Pull Requests(PRs) from outsiders, and support will be there if you’ve exhausted every other resource. We’re working on creating a better world and can use all the help we can get. We’re just glad you’re here.

## Stay Updated
Decentralized application (dApp) development encourages network decentralization and embodies it. As developers worldwide, the best way to stay connected with the Polygon development is to follow our Social Media accounts. Links to all the Polygon community are [here](https://polygon.technology/community/).
