---
id: intro 
title: Introduction to Venly (prev. Arkane)
sidebar_label: Introduction
description: Integrate an application with Polygon using Venly Wallet
keywords:
  - docs
  - matic
  - polygon
  - venly
  - connect
  - blockchain
  - wallet
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

**Venly (prev. Arkane Network)** allows you to easily integrate your app to the Polygon blockchain, whether you already have an app integrated with Web3 or are building a new app from scratch. Venly provides a smooth and delightful experience for you and your users on both web & mobile.

Venly will help you in interacting with the Polygon network, create blockchain wallets, create different asset types such as fungible (ERC20), and non-fungible tokens (ERC721 and ERC1155) and interact with smart contracts. Next to a superior developer experience, you can give your users a user-friendly interface.

Each application is unique and has different needs, therefore they provide different ways of interacting with Venly. Applications that have support for Web3 are recommendated to integrate the [Venly Web3 provider](https://docs.venly.io/widget/web3-provider/getting-started), others are suggested to use the [Venly Widget](https://docs.venly.io/widget/widget/introduction).


## Key Features

- Support Web and Mobile
- Offers social logins
- Offers a fiat-on-ramp
- Supports both Polygon and Ethereum
- Supports NFTs (ERC721 and ERC1155) on Polygon
- Easy to integrate using Web3 
- Built for a mainstream audience
- Offers in-app customer support 

## Getting Started

If you already support Web3 technology, you can improve the UX within your application by integrating the **Venly Web3 Provider**, a smart wrapper around the existing Web3 Ethereum JavaScript API.

By making use of our Web3 provider you are able to leverage the full potential of Venly with minimal effort and you will be able to onboard users that are less tech savvy without making them leave your application or download third party plugins. Integrating just takes 2 steps and ~5 minutes.

:::tip Don't support Web3 yet?

Don't worry! We have got you covered with our [Venly Widget](https://docs.venly.io/widget/).

:::


### Add the library to your project

Install the library by downloading it to your project via NPM

```
npm i @venly/web3-provider
```

followed by adding the script to the head of your page.

```
<script src="/node_modules/@venly/web3-provider/dist/web3-provider.js"></script>
```

After adding the javascript file to your page, a global **Venly** object is added to your window. This object is the gateway for creating the Web3 wrapper and fully integrates the widget - Venly Connect.

### Initialize the Web3 provider

Add the following lines of code to your project, it will load the Venly web3 provider.

```js
Venly.createProviderEngine({clientId: 'Testaccount'}).then(provider => {
    web3 = new Web3(provider);
});
```

The web3 instance now works as if it was injected by parity or metamask. You can fetch wallets, sign transactions, and messages.

### Congratulations! Your dApp now supports Venly

:::info
To connect with a personalised [Client ID](https://docs.venly.io/widget/deep-dive/authentication#client-id), and access our production environment, please request access one using this [<ins>form</ins>](https://forms.venly.io/clientID).

:::

To know more about the wonderful world Venly has to offer, [check out their documentation](https://docs.venly.io/widget/).

## Video Guides

### Send MATIC tokens to an Email Address on Polygon
[![Send Matic tokens to an email address on Polygon Network](https://i.snipboard.io/OzXmrN.jpg)](https://www.youtube.com/watch?v=3gehPvX4DOo&list=PLh3bJA02WlKErlpDexw_cFOlPfMQiU67U&index=1)

### Transfer of a Polygon NFT 
[![Transfer of a Polygon NFT](https://i.snipboard.io/dLkM3t.jpg)](https://www.youtube.com/watch?v=SLxAIXRv7ec&list=PLh3bJA02WlKErlpDexw_cFOlPfMQiU67U)


