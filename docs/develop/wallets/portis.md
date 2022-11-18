---
id: portis
title: Portis
description: A web-based wallet built keeping easy user-onboarding in mind.
keywords:
  - docs
  - matic
  - polygon
  - wallet
  - portis
  - integrate
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

Portis is a web-based wallet built keeping easy user-onboarding in mind. It comes with a JavaScript SDK that integrates into the dApp and creates a local wallet-less experience for the user. Further, it handles setting up the wallet, transactions, and gas fees.

Like Metamask, it is non-custodial - users control their keys, Portis just stores them securely. But, unlike Metamask, it is integrated into the application and not the browser. Users have their keys associated with their login id and passwords.

**Type**: Non-custodial/HD <br/>
**Private Key Storage**: Encrypted and stored on portis’ servers <br/>
**Communication to Ethereum Ledger**: Developer defined <br/>
**Private key encoding**: Mnemonic<br/>

## Setup Web3

Install Portis in your dApp:

```js
npm install --save @portis/web3
```

Now, register your dApp with Portis to obtain a dApp ID using the [Portis Dashboard](https://dashboard.portis.io/).

Import `portis` and `web3` object:

```js
import Portis from '@portis/web3';
import Web3 from 'web3';
```

Portis constructor takes first argument as the dApp ID and second argument as the network you would like to connect with. This can either be a string or an object.

```js
const portis = new Portis('YOUR_DAPP_ID', 'maticTestnet');
const web3 = new Web3(portis.provider);
```

## Set up Account

If the installation and instantiation of Web3 was successful, the following should successfully return the connected account:

```js
this.web3.eth.getAccounts()
.then((accounts) => {
  this.account = accounts[0];
})
```

## Instantiating Contracts

Instantiation of contracts would remain the same, as discussed above:

```js
const myContractInstance = new this.web3.eth.Contract(myContractAbi, myContractAddress)
```
## Calling Functions

Calling functions would remain the same as discussed above:

### Calling `call()` Function

```js
this.myContractInstance.methods.myMethod(myParams)
.call()
.then (
  // do stuff with returned values
)
```

### Calling `send()` Function
```js
this.myContractInstance.methods.myMethod(myParams)
.send({
  from: this.account,gasPrice: 0
})
.then ((receipt) => {
  // returns a transaction receipt
})
```