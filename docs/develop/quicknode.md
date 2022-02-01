---
id: quicknode
title: Using QuickNode
sidebar_label: Using QuickNode
description: Build and deploy a smart contract on Polygon.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

# 🐣 Beginner Smart Contract on Polygon

_Estimated time to complete this guide: \~10 minutes_

Ethereum is a very lovely blockchain to work with, but recently, heavy traffic and many people building on it have resulted in the chain being a bit congested. Layer 2 solutions solve this issue by extending Ethereum scalability. Polygon (FKA Matic) is one such solution. It is an Ethereum Layer 2 with lower gas fees along with the security of Ethereum. Today in this guide, we'll learn how to build and deploy a smart contract using [Metamask](https://metamask.io), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Ethereum REMIX IDE](https://remix.ethereum.org/), and [QuickNode](https://www.quicknode.com/chains/matic?utm_source=polygon_docs&utm_campaign=ploygon_docs_contract_guide)

**Prerequisites**

-   A Polygon node.

-   Web browser.

-   MetaMask installed in the browser.

-   That violet love for polygon.

Why Polygon?
------------

With the rapid adoption of Ethereum, the problem of scalability arose, where gas prices started getting higher as more and more people wanted to get that precious Ethereum block space. [Polygon](https://polygon.technology/), which was launched as MATIC network, was created to provide a scalable solution to Ethereum. It is a [Proof-of-stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/#what-is-pos) blockchain, just like other PoS blockchains, with the exception that transactions are collected and then settled on the Ethereum blockchain, which gives Polygon the interoperability, liquidity, and security of Ethereum.

Polygon also has a Polygon SDK using which developers can make their own Ethereum compatible dApps and connect them to the main blockchain. These sidechains can be built using one of the scalability methods:

**Plasma Chains:** It bundles all the transactions into blocks and submits them to Ethereum blockchain as a single batch.

**zk-Rollups:** This allows multiple transfers to be bundled in a single transaction.

**Optimistic Rollups:** Similar to Plasma chains with the capability of scaling Ethereum smart contracts.

Polygon's main chain is a Proof-of-Stake (PoS) chain which I already mentioned earlier. Where MATIC token, the native token of Polygon network, is used as staking token to validate transactions and vote on network upgrades. MATIC token is also used to pay for the gas fee on Polygon.

Now that we know what Polygon is let us deploy a contract on this fantastic network. But before that, we'll need a Polygon node and set it up in MetaMask.

### Step 1: Booting your Polygon node
-------------------------

QuickNode has a global network of Polygon Mainnet and Mumbai testnet nodes, today in this guide we will deploy our contract on the Polygon Mumbai testnet so sign up and simply get a [free trial node from QuickNode](https://www.quicknode.com/chains/matic?utm_source=polygon_docs&utm_campaign=ploygon_docs_contract_guide), which is much better than investing time in looking at different custom configs to launch your own node.

![](https://lh6.googleusercontent.com/vEAp28OLizS-ZBoYU1yWthHalH0xbrgatZ1ynyA1H4y2tW-x1EHC97qk5RkHatq6tO2anLAC-ch4mfs4am2rf1zaMO5BNEAtL3anqL4UQVH5ebpQOKyItYLm4slWIurR9iznXkly=s1600)

Copy the HTTP URL, which will be needed in the next step.

### Step 2: Setting up MetaMask with Polygon node.
--------------------------------------

After creating your QuickNode Polygon Node, we'll have to [set it up in the MetaMask wallet as a custom RPC](https://www.quicknode.com/guides/knowledge-base/how-to-set-a-custom-provider-in-metamask).

![](https://lh3.googleusercontent.com/4I6N4RTWFDQ2fLhQV2sK5DczD8sm_fIV72u75p2shuCHHEzKQcYc2ZG6aK6SjOznocMKYd0ozsUh0kvHEQhxgufjy_7D76EDQ_OVOcdxgsmYwh-i_0jOVid_RsRZAdJUOox1TXpr=s1600)

### Step 3: Getting test MATIC
------------------

We will need some test MATICs to pay for gas fees to deploy and interact with the smart contract.

Copy your address from MetaMask, paste it into the address field of [Polygon faucet](https://faucet.polygon.technology/), and click on submit. The faucet will send you 0.1 test MATIC.

![](https://lh6.googleusercontent.com/kq173aYK_XB8DwuZjXXp2sot9X4enx9WXo-Xt8O93S-GohO5kx9p1iI2JQzL9wdAtiTrWfjiEodAsI_vcD1m1dUvp6koTfrKvnP4gOymP-JSDYpHVJKjWQXQ0ePNTj1MmEAJQ8Wo=s1600)

### Step 4: Writing the contract
--------------------

Time to write our smart contract, go to [REMIX Ethereum](https://remix.ethereum.org/) and make a new solidity file for example, `mumbai01.sol`

Paste the following code into your new Solidity script:
```javascript
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.0 <0.7.0;

contract SimpleStorage {

    uint storedData;

    function set(uint x) public {

        storedData = x;

    }

    function get() public view returns (uint) {

        return storedData;

    }

}
```

Explanation of the code above.

Line 1: Specifying [SPDX license](https://spdx.org/licenses/) type, which is an addition after Solidity ^0.6.8.

>Whenever the source code of a smart contract is made available to the public, these licenses can help resolve/avoid copyright issues. If you do not wish to specify any license type, you can use a special license [UNLICENSED](https://spdx.org/licenses/Unlicense.html) or simply skip the whole comment (it won't result in an error, just a warning).

Line 2: On the first line, we are declaring which Solidity compiler we want to use. For instance, we are targeting any version between ≥ 0.4.0 and <0.7.0.

Line 3: We are declaring our contract here and naming it as Simplestorage.

Line 4: Declaring a uint (Unsigned Integer) variable named storedData, this variable will be used to store data.

Line 5-7: Next, we will add a set function, using which we will change the value of our variable storeData.  The **set** function accepts a parameter x whose value we are storing into storeData. In addition, the function is marked as public which means that the function can be called outside the scope of this function and by other contracts.

Line 8-10: We will add a **get** function to retrieve the value of storeData variable. This function is marked as view, which tells the Solidity compiler that this is a read-only function.

Other than that, the get function also has returns (uint), which means that the function will return a uint value.

### Step 5: Deploying the contract
----------------------

Now click on the Solidity logo from the left menu and click on compile. After successful compilation, a green tick will appear on the Solidity logo.

![](https://lh6.googleusercontent.com/nPZvg_31tEIE-NzrCMgrGfo4nbz-UBiYqxdy0rZkUTZ2Smm526FBpHaMvCUWf-uF0-0VVIyRe9zHrI2jrPlcdHzQGV8j9Y5vaygIKqU--3NOt3ZgbEp_zCi01vCm9UjoqZsy0B4T=s1600)

Now, click on the option from the left menu to deploy the complied contract and select `Injected Web3` as the environment. Below the environment, the name and chainid of our network will appear. In this case 'custom 80001' for Matic testnet. Make sure you have the correct contract name selected under the contract option. Once you have checked everything, click on `Deploy` and accept the transaction from the MetaMask pop-up window.

![](https://lh6.googleusercontent.com/xXU6LccQoQUMVbFI_HIdzUUyvTUz0bpZUPBW2ZjEbY0qKWRIKjPUQ66nHuGtL1B-gp7cHHdsIO0LcXdE1tiJbh7YJfFosFMK50V_6Zw012Ws3ZQhwc-9w8k6xxkWVQ7KQu8Bg69s=s1600)

Once the contract deployment transaction is approved, the deployed contract will appear under the `Deployed Contracts` section.

![](https://lh3.googleusercontent.com/1Ble0P_qeM_xSA3o3qQNRjEpVl12z7eOUJsQjy7709p6b-5UlQNdaqZBgoUaVNjKiRlkYOaSPF-5S_S0unEBtCQuRH8YKBqxLD9PSMItVOOWAd3PGvr4F8WaGHE_2WFpkJYgoBVQ=s1600)

Expand the deployed contract and click on `get`; it will return the value of the **storedData**, which is  currently zero since we have not input any number yet.

![](https://lh6.googleusercontent.com/O4xP-eo65gqo2j7fb-FgECDxJXY0FONIjZghlapA_FhC5Hwxhf-QJIm1jiy1HDoQU7R_C_5h_W2JTelUqnmr6cdeRZFOWG9q5Iw_iZh94t-qgAoNwfJLjFND2XBwZtyQWuzODpxP=s1600)

To input a value, enter a number in the field near the `set` button, click on set and approve the transaction from the MetaMask pop-up. Once the transaction is approved, value of the **storedData** will be the input number. To verify this, click on `get`, and the inputed value will be printed.

![](https://lh3.googleusercontent.com/TXEC6gAAyFSmmZPKX9xUUGlJczLNAmtVb2MS6-yPR9dU-9XMef3KkcMCuCWTodfjpVgqL5cej7Ig93zsimSU8dF56KzTQEjPR9NIFAshCKlZSHCJFg0Gl9lxdy_BWG-QtWyWAS_m=s1600)

So this is how contracts are deployed and interacted on Polygon.

QuickNode just like Polygon has always had an education first approach they put out regular developer [guides](https://www.quicknode.com/guides?utm_source=polygon_docs&utm_campaign=ploygon_docs_contract_guide), [docs](https://www.quicknode.com/docs/polygon?utm_source=polygon_docs&utm_campaign=ploygon_docs_contract_guide), [tutorial videos](https://www.youtube.com/channel/UC3lhedwc0EISreYiYtQ-Gjg/videos) and have a [community of #web3 developers](https://discord.gg/DkdgEqE) who are eager to help eachother.

We hope this guide was helpful. We'll be happy to hear from you. DM us or tag us on Twiiter [@QuickNode](https://twitter.com/QuickNode)