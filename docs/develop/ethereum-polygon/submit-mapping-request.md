---
id: submit-mapping-request
title: Mapping Tokens
description:  "A guide on how to map tokens between Ethereum and Polygon Chains using the PoS Bridge"
keywords:
  - docs
  - matic
  - token mapping
  - PoS Bridge
image: https://matic.network/banners/matic-network-16x9.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Mapping is required in order to move assets between Ethereum and Polygon. The Polygon PoS Bridge is a near-instant, low-cost, and extremely flexible solution. You can move tokens between Ethereum and Polygon without relying on a third party or facing liquidity constraints.

:::tip

Polygon PoS Bridge is available for both Mainnet as well as Mumbai Testnet. More information about the PoS Bridge can be found [<ins>here</ins>](/docs/develop/ethereum-polygon/pos/getting-started).

:::

## **How To Submit A Mapping Request**

In order to map tokens between Ethereum and Polygon, you have to submit a mapping request. It has to be submitted on [https://mapper.polygon.technology/](https://mapper.polygon.technology/). Open the link and click on the **'Map New Token'** button on the top right corner to create a new mapping request.

<img src={useBaseUrl("img/token-mapping/mapping-tool.png")} />
<br/>
<br/>

**Step 1** &rarr; Choose the Network on which you want to Map Tokens. You can choose **Goerli-Mumbai** for the Testnet, and **Ethereum-Polygon** for the Mainnet.

**Step 2** &rarr; Select the type of Token you are mapping from **'ERC20'**, **'ERC721'**, or **'ERC1155'**. For mapping any other Token Standard, you can reach out to the Polygon team on [Discord](https://discord.com/invite/0xPolygon) or create a ticket [here](https://support.polygon.technology/support/home) and keep "Token Mapping" in the ticket title.

**Step 3** &rarr; Enter your **Ethereum / Goerli** Token address in the  **"Ethereum token address"** field. Make sure your Token contract code has been verified on the [Ethereum](https://etherscan.io/) / [Goerli](https://goerli.etherscan.io/) blockchain explorers. If your root token is verified :white_check_mark:, the **name**, **symbol**, and **decimal** fields will be automatically filled and these fields are uneditable.

**Step 4** &rarr; You can choose the mapping to be either **'Mintable'** or **'Non-Mintable'** on Polygon. More details on the Polygon Mintable Tokens can be found [here](/docs/develop/ethereum-polygon/mintable-assets).

:::info
Make sure you verify the checklist for the selected type of mapping: **Mintable** or **Non-Mintable**.

The Tokens that will be minted on Polygon first and subsequently migrated to Ethereum are called **Mintable Tokens**. Meanwhile, Tokens that already exist on Ethereum but have to be moved to Polygon are referred to as **Non-Mintable Tokens**.

:::

In case of a custom token mapping, you can visit our [Fx-Portal](/docs/develop/l1-l2-communication/fx-portal) and use the data provided to build your custom token.

## **Mapping Checklist**

### **Mintable Tokens**

:::tip

Checkout the documentation for Mintable tokens available at [<ins>https://wiki.polygon.technology/docs/develop/ethereum-polygon/mintable-assets</ins>](/docs/develop/ethereum-polygon/mintable-assets)

:::

1. The deposit and withdraw functions are present in the child token contract. (Reference Template Contract - [ERC20](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildMintableERC20.sol#L1492-#L1519), [ERC721](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildMintableERC721.sol#L2160-#L2275), [ERC1155](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildMintableERC1155.sol#L1784-#L1851))
2. Only the **ChildChainManagerProxy** address has the right to call the deposit function. (ChildChainManagerProxy - on [Mumbai](https://mumbai.polygonscan.com/address/0xb5505a6d998549090530911180f38aC5130101c6/transactions) , on [Polygon Mainnet](https://polygonscan.com/address/0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa/))
3. The root chain contract is a standard [ERC20](https://github.com/maticnetwork/pos-portal/blob/master/flat/DummyMintableERC20.sol#L1481)/[ERC721](https://github.com/maticnetwork/pos-portal/blob/master/flat/DummyMintableERC721.sol#L2169)/[ERC1155](https://github.com/maticnetwork/pos-portal/blob/master/flat/DummyMintableERC1155.sol#L1785)
4.  The mint function on the root contract can only be called by the corresponding token, **PredicateProxyAddress**. (PredicateProxyAddress for each token type can be found [here](/docs/develop/ethereum-polygon/mintable-assets#contract-to-be-deployed-on-ethereum))

### **Non-Mintable Tokens**

1. The deposit and withdraw functions are present in the child token contract. (Reference Template Contract - [ERC20](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildERC20.sol#L1492-#L1508), [ERC721](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildERC721.sol#L2157-#L2238), [ERC1155](https://github.com/maticnetwork/pos-portal/blob/master/flat/ChildERC1155.sol#L1784-#L1818))
2. Only the **ChildChainManagerProxy** address has the right to call the deposit function. (ChildChainManagerProxy - on [Mumbai](https://mumbai.polygonscan.com/address/0xb5505a6d998549090530911180f38aC5130101c6/transactions) , on [Polygon Mainnet](https://polygonscan.com/address/0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa/))
3. Mint function is an internal function. (This gets called by deposit function internally)

## **Video Guide**

Here is a quick video tutorial on how to map tokens between **Ethereum Goerli &harr; Polygon Mumbai Testnet**:

<video autoplay width="100%" height="100%" controls="true" >
  <source type="video/mp4" src="/img/token-mapping/token-mapping-tutorial.mp4"></source>
  <p>Your browser does not support the video element.</p>
</video>