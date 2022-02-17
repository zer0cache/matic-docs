---
description: How to use IPFS with polygon
keywords:
  - docs
  - matic
  - IPFS
image: https://matic.network/banners/matic-network-16x9.png 
---


# Using IPFS

### Context

Polygon blockchain can be used to store data. But is it really worth the cost? To put into perspective 1 byte of a data can cost you 50 gwei gas in matic token, or equal to about $0.2655 in today's market. It maybe small for just one byte of data but let's say you want to store a file with 1 GB data (1,000,000,000 bytes) it will cost you $265500000. The solution is IPFS, the InterPlanetary File System.&#x20;

#### What is IPFS?&#x20;

IPFS is a distributed system for storing and accessing files, websites, applications, and data. Using IPFS as a storage you don't need to store entire files to polygon blockchain you just need to store the hash of the IPFS to the polygon blockchain, thus make it much more cheaper then just storing the file.&#x20;

In this tutorial, we are going to use IPFS to store some files offchain and store the hash of the file to the blockchain. And we will also get the data back from blockchain, and show it to the webpage.

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [IPFS](https://docs.ipfs.io/install/command-line/#official-distributions)
* [Metamask](https://metamask.io)

> In this entire tutorial i'm using Mac OS, but you can use any other os.


## Step 1 - Install IPFS

To install IPFS on your machine, there are so many ways to do it. You can see for yourself here [https://docs.ipfs.io/install/command-line/#official-distributions](https://docs.ipfs.io/install/command-line/#official-distributions). After that go to your command prompt and type:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "["""webui://-""", """http://localhost:3000""", """http://127.0.0.1:5001""", """https://webui.ipfs.io"""]"

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "["""PUT""", """POST"""]"
```


This command needed so that we can upload our file without any CORS problem. After that run this command to run ipfs locally:

```
ipfs daemon
```

## Step 2 - Install Metamask

There is also so many way to download metamask. If you're using chrome you can download it from here [https://metamask.io/download.html](https://metamask.io/download.html), and click on `install metamask for chrome` after you install the metamask you need to setup the metamask so that it can interact with polygon blockchain click on `Custom RPC` like below :


![networks](https://i.imgur.com/1Z69Bfm.jpg)

Then after that write this one by one:

```
Network Name :
Mumbai Testnet

New RPC URL :
https://matic-mainnet.chainstacklabs.com

Chain ID :
80001

Currency Symbol :
Matic

Block Explorer URL :
https://mumbai.polygonscan.com/
```
Now you have an Polygon mumbai testnet one account on metamask testnet we need to fill some matic token you can do that by going to polygon faucet like this one [https://faucet.polygon.technology](https://faucet.polygon.technology), to get your address click just below your account and copy your address.

Then paste it in the faucet and click submit and you will get your matic token on your address.


## Step 3 - Create a smart contract

First we need to install truffle. To install truffle go to your command prompt and type:

```
npm install -g truffle
```

Now create a folder and go inside that folder and type on the command prompt:

```
truffle init
```

After you run that command basically you will get some file and folder like this:

```
contracts/  migrations/  test/  truffle-config.js
```

So now i want you to go to `contract` folder and create a file called `IPFSstorage.sol` and paste this code in that file:

```
pragma solidity 0.8.6;
contract IPFSstorage {
 string ipfsHash;

 function sendHash(string memory x) public {
   ipfsHash = x;
 }

 function getHash() public view returns (string memory x) {
   return ipfsHash;
 }
}
```

So this is actually a really basic smart contract with the purpose of storing the hash of the blockchain. `sendHash` is to store the hash, and `getHash` is to get the hash. After that go to the `migrations` folder and create a file called `2_ipfs_storage_migration.js` and paste this code into that file :

```javascript
var IPFSstorage = artifacts.require("./IPFSstorage.sol");

module.exports = function(deployer) {
    // Demo is the contract's name
    deployer.deploy(IPFSstorage);
};
```

This code is basically used for deploying our contract to our testnet later using truffle. Now go back to the root of our folder and look for `truffle-config.js` file and replace the code inside of that file with this :

```javascript
require('dotenv').config()

const PrivateKeyProvider = require('./private-provider')