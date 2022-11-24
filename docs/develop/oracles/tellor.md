---
id: tellor
title: Tellor
sidebar_label: Tellor
description: Tellor is a fully decentralized and censorship-resistant oracle for Polygon
keywords:
  - wiki
  - polygon
  - tellor
  - oracle
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## Overview

Tellor is an oracle that provides censorship resistant data that is secured by simple crypto-economic incentives. Data can be provided by anyone and checked by everyone. Tellor’s flexible structure can provide any data at any time interval to allow for easy experimentation/innovation.

It is an oracle system where parties can request the value of an off-chain data point (e.g. BTC/USD) and reporters compete to add this value to an on-chain data-bank, accessible by all Polygon smart contracts. The inputs to this data-bank are secured by a network of staked reporters.

Tellor utilizes crypto-economic incentive mechanisms. Honest data submissions by reporters are rewarded by the issuance of Tellor’s token. Any bad actors are quickly punished and removed from the network by a dispute mechanism.

In this tutorial, we will go over:

- Setting up the initial toolkit you'll need to get up and running.
- Walk through a simple example.
- List out testnet addresses of networks where you can test Tellor.

## Prerequisites

We're assuming the following about your coding skill-level to focus on the oracle aspect:

- you can navigate a terminal
- you have npm installed
- you know how to use npm to manage dependencies

Tellor is a live and open-sourced oracle ready for implementation. This beginner's guide is here to showcase the ease with which one can get up and running with Tellor, providing your project with a fully decentralized and censorship-resistentant oracle.

## UsingTellor

The first thing you'll want to do is install the basic tools necessary for using Tellor as your oracle. Use [this package](https://github.com/tellor-io/usingtellor) to install the Tellor User Contracts:

```
npm install usingtellor
```

Once installed, this will allow your contracts to inherit the functions from the contract 'UsingTellor'.

Now that you've got the tools ready, let's go through a simple exercise where we retrieve the price of Bitcoin.

### BTC/USD Example

Inherit the `UsingTellor` contract, passing the Tellor address as a constructor argument. Here's an example:

```solidity
import "usingtellor/contracts/UsingTellor.sol";

contract BtcPriceContract is UsingTellor {

  //This Contract now has access to all functions in UsingTellor

  bytes btcPrice;
  bytes32 btcQueryId = 0x0000000000000000000000000000000000000000000000000000000000000002;

  constructor(address payable _tellorAddress) UsingTellor(_tellorAddress) public {}

  function setBtcPrice() public {
    bool _didGet;
    uint256 _timestamp;

    (_didGet, btcPrice, _timestamp) = getCurrentValue(btcQueryId);
  }
}
```

**Want to try a different data feed?** Check out the list of supported data feeds here:
[Current Data Feeds](https://docs.tellor.io/tellor/integration/data-feed-ids).

## Addresses

Tellor Tributes: [`0xe3322702bedaaed36cddab233360b939775ae5f1`](https://polygonscan.com/token/0xe3322702bedaaed36cddab233360b939775ae5f1#code)

Oracle: [`0xfd45ae72e81adaaf01cc61c8bce016b7060dd537`](https://polygonscan.com/address/0xfd45ae72e81adaaf01cc61c8bce016b7060dd537#code)

## Testnet

Polygon Mumbai Testnet: [`0x3477EB82263dabb59AC0CAcE47a61292f28A2eA7 `](https://mumbai.polygonscan.com/address/0x3477EB82263dabb59AC0CAcE47a61292f28A2eA7/contracts#code)

For a more robust implementation of the Tellor oracle, check out the full list of available functions [here](https://github.com/tellor-io/usingtellor/blob/master/README.md).
