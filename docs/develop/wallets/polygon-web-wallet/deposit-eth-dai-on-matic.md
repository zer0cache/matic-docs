---
id: deposit-eth-dai-on-polygon
title: Deposit ETH/DAI on Polygon
sidebar_label: Deposit ETH/DAI
description: How to get funds in OpenSea for NFTs on Polygon chain
keywords:
  - docs
  - matic
  - polygon
  - opensea
  - buy nft
  - deposit eth
  - dai
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This tutorial explains the easiest way to get funds on [**OpenSea**](https://matic.opensea.io) and start buying NFTs on Polygon network without any hassle. Funds are also needed to participate in trading activities on [**OpenSea**](http://matic.opensea.io).

Sell orders can be placed if you have NFT token balance in the supported categories on the platform. For buying the NFTs, you need to have sufficient DAI/WETH balance on Polygon network.

**Polygon is a scaling solution for Ethereum blockchain**. Transaction confirmation times and gas fees on Polygon is much lesser than main chain Ethereum. Henceforth, if your funds pre-exist on Ethereum blockchain, you will need to bring them over to Polygon network using the [**Polygon Bridge**](https://wallet.polygon.technology/bridge).

Getting these tokens on the Polygon chain can be done in different ways.

<img src={useBaseUrl("img/nft-marketplace/get-funds.png")} />

## Using the [Polygon Bridge](https://wallet.polygon.technology/bridge)

You can log in to [https://wallet.polygon.technology/](https://wallet.polygon.technology/) using the account in which you have sufficient balance of ETH/DAI. If you deposit ETH, you will receive WETH on the Polygon chain. It's called PoS-WETH on the Polygon chain and it has the contract address - `0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619`. Similarly for PoS-DAI, the contract address is `0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063`.

<img src={useBaseUrl("img/nft-marketplace/wallet-dashboard.png")} />

This is how the Polygon Wallet dashboard looks when you visit [**https://wallet.polygon.technology/**](https://wallet.polygon.technology/).

Clicking on the deposit button besides the token you want to deposit. It will take you to the following page.

### Depositing ETH

<img src={useBaseUrl("img/nft-marketplace/deposit-eth.png")} />

### Depositing DAI

<img src={useBaseUrl("img/nft-marketplace/deposit-dai.png")} />

If you have a sufficient balance of ETH/DAI on Ethereum, then you should be able to deposit. It is recommended to follow this guide to understand more on [buying Polygon NFTs on OpenSea](https://polygon.technology/blog/how-to-buy-polygon-nfts-on-opensea).

:::warning USE THE Polygon PoS BRIDGE WHEN YOU DEPOSIT ETH/DAI

Its very important to follow this because [OpenSea](http://matic.opensea.io) only supports the PoS version of DAI/ETH. Depositing ETH/DAI using the Plasma bridge will result in plasma-WETH and plasma-DAI getting deposited in to your account and you will not be able to use it for trading on OpenSea.

:::

Once you complete the deposit process, it will take about 22-30 minutes for your deposit to be completed. You should be able to track the real time status of your deposit from the activity header component that you can see on the right hand side of the navigation bar. Once the deposit is completed, you can see the balance updated on the wallet dashboard as well as under the **My Account** section of OpenSea as shown below.

<img src={useBaseUrl("img/nft-marketplace/balance.png")} />

## Get funds on Polygon from Transak

You can visit [https://global.transak.com/](https://global.transak.com/) for purchasing tokens on **Transak**. Choose the network as Polygon and then choose DAI/WETH from the token list and then go ahead with the steps in the Transak application.

## Get funds from another Account

If you have sufficient balance of these tokens on another address on Polygon, you can transfer these tokens from that address to the address with which you are currently logged in to OpenSea.
