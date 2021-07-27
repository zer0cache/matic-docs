---
id: wallet-bridge-faq
title: Wallet and Bridge FAQ 
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
  - wallet
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## The gas price is more than the amount I seek to withdraw.

A withdrawal transaction with the Plasma bridge is split into 3 steps, one that happens on the Polygon Mainnet and two steps that are to be completed on the Ethereum Mainnet. On the PoS bridge, the withdrawal transaction happens over two steps: Token burning on the Polygon network and proof submission on the Ethereum network. On the Polygon mainnet, the charges are very minimal, and the lion share of the transaction cost you see is the gas price on the Ethereum Network governed by Ethereum miners. As can be expected, this charge is outside our control, and we don't have much influence over the price point. One last thing, if your tokens are burnt, you may have to proceed with your withdrawal regardless as there is nothing we can do to reverse the process.


## Can I cancel my withdrawal transaction?

Unfortunately, Polygon cannot cancel a withdrawal once the process is initialised and the tokens are successfully burnt. A burn hash is created and the next phase of the transaction comes in immediately. If the burn transaction is still pending, you may be able to facilitate a cancellation via the following guides

[Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) <br />
[Walletlink](https://www.techdreams.org/crypto-currency/how-to-cancel-a-pending-ethereum-transaction-on-coinbase-wallet/10159-20210412)


## My transaction is stuck.

We have listed some common errors that the users might face. You can find the solution below the image of the error. In case you're shown a different error, please [raise a support ticket](https://support.polygon.technology/support/home) for our team to troubleshoot.
  
  - ### Common Errors
  a. Withdrawal stuck on the Initialised phase.   
  
    <img src={useBaseUrl("img/wallet-bridge/stuckAtIntialised.png")} height="500px"/>

    This normally occurs when the transaction gets replaced and the wallet web application is not able to detect the replaced transaction hash. Please follow the instructions on [https://polygon-withdraw.matic.network/](https://polygon-withdraw.matic.network/) and complete your withdrawal.

  b. RPC Error

    <img src={useBaseUrl("img/wallet-bridge/RPCError.png")} height="500px"/>   

    The current RPC error you're facing might be due to an RPC overload.

    Please try changing your RPC and proceed with the transaction. You may follow this link [here](https://docs.matic.network/docs/develop/network-details/network#matic-mainnet) for more information.
  
  c. 

  <img src={useBaseUrl("img/wallet-bridge/serversStumbled.png")} height="500px"/>  

  This is usually an off-and-on error that gets resolved automatically. In case you are still receiving the same error while reinitiating the step, do [raise a support ticket](https://support.polygon.technology/) with all the relevant information to troubleshoot this further. 

## I made the mistake of sending funds to an exchange/wallet directly from Polygon Wallet. Can you help?

Sadly, we regret to inform you that we may not be able to assist if you have sent tokens from the Polygon network to an exchange/wallet which is not supported.

Here is what an exchange needs to do in this case (although not sure how much flexibility the support executives have to execute this). Assuming the exchange support executive has access to the account's private keys, they can transfer the funds from their account on Polygon to your (the user's) address on Polygon.

It's important to note that you shouldn't send funds directly to exchanges that support only Ethereum. The correct procedure is you have to first withdraw from Matic to Ethereum and then send it to your exchange address.

## I'm shown an insufficient balance error.

Withdrawals and deposits on the Polygon network are cheap. What is to be understood is that the insufficient balance error can be cleared by getting some ETH balance on the ethereum mainnet. That generally clears out the problem of an insufficient balance. 

If this is a transaction on the Polygon mainnet, we'll require that you have sufficient amount of matic tokens.

## How do I bridge assets across chains?

[https://wallet.matic.network/bridge/](https://wallet.matic.network/bridge/) (ETH <-> Polygon) <br/>
[https://xpollinate.io/](https://xpollinate.io/) (BSC <-> Polygon <-> xDai) <br/>
[https://exchange.chainswap.com/](https://exchange.chainswap.com/) (ETH <-> Polygon/BSC) <br/>
[https://anyswap.exchange/bridge](https://anyswap.exchange/bridge) (ETH <-> Polygon <-> BSC/xDai) <br/>
[https://app.0.exchange/#/home](https://app.0.exchange/#/home)(ETH <-> Polygon <-> Avalanche <-> BSC)

To add, we do not endorse any external services, please make sure to always do your own research

##  I made a transfer to the wrong address. How do I retrieve the funds?

Unfortunately, nothing can be done. Only the owner of the private keys to that particular address can move those assets.


## My transactions are not visible on the explorer. What should I do?

This is probably an indexing issue with Polygonscan. Please contact the [Support Team](https://support.polygon.technology/support/home) for more clarifications. 
You may also try these block explorers 

[https://polygon-explorer-mainnet.chainstacklabs.com](https://polygon-explorer-mainnet.chainstacklabs.com/) <br />
[https://explorer-mainnet.maticvigil.com](https://explorer-mainnet.maticvigil.com/) <br />
[https://explorer.matic.network](https://explorer.matic.network/) <br />
[https://backup-explorer.matic.network](https://backup-explorer.matic.network/)


## I initiated a deposit on Ethereum but it still shows as pending. What should I do?

Your supplied gas is probably too low. You should wait a while and redo the transaction if it doesn't get mined. In case of additional help, please reach out to the [support team](https://support.polygon.technology/support/home) with your wallet address, transaction hashes (if any) and relevant screenshots.


## I have a token withdrawal issue with OpenSea or any other application which uses polygon bridge. 

If you have an issue with your withdrawal transaction being stuck, Polygon offers the withdraw bridge with https://polygon-withdraw.matic.network/ to help get you off the ground if you have your burn hash. With this tool, you're quickly onboarded and the issue will be resolved. Other questions concerning your transaction with OpenSea and other dApps will have to be handled by the application's team.


## Where can I get MATIC tokens directly?

So MATIC tokens can be bought from any centralized ([Binance](https://www.binance.com/en), [Coinbase](https://www.coinbase.com/), et.al) or Decentralised ([Uniswap](https://uniswap.org/), [QuickSwap](https://quickswap.exchange/#/swap)) exchange. You may also research and try some on-ramps like [Transak](https://transak.com/), [Ramp](https://ramp.network/). 
The purpose for your purchase of MATIC coins should also determine where you'll buy them from and the network. It is advisable to have MATIC on Ethereum Main-net if your intention is either staking or delegation. if your intent is a transaction on the Polygon mainnet, you should hold and transact with MATIC on Polygon mainnet. 


## I'm not getting a transaction hash and my deposits aren't going through? What is happening?

You probably have prior pending transactions, please cancel or speed them up first. Transactions in Ethereum can only happen one after the other.


## It shows Polygon does not charge any amount for a withdrawal but we are to pay during the transaction. 

A withdrawal transaction with the Plasma bridge is split into 3 steps, one that happens on the Polygon Mainnet and two steps that are to be completed on the Ethereum Mainnet. On the PoS bridge, the withdrawal transaction happens over two steps: Token burning on the Polygon network and proof submission on the Ethereum network. In every case, token burning that happens on the Polygon Mainnet will be a very minimal cost. The remaining steps that happen on the Ethereum Mainnet will have to be paid in ETH depending on the current gas price which can be verified [here](https://ethgasstation.info/).


## How do I contact major applications deployed on the Polygon Network?

Curve  [https://discord.gg/JnUFrsDF](https://discord.gg/JnUFrsDF) <br />
SushiSwap  [https://discord.gg/ApbE4Eau](https://discord.gg/ApbE4Eau) <br />
CREAM  [https://discord.gg/js8JpmFB](https://discord.gg/js8JpmFB) <br />
AAVE  [https://discord.gg/YYtp7N5d](https://discord.gg/YYtp7N5d) <br />
FuruCombo  [https://discord.gg/wJJ7PXAd](https://discord.gg/wJJ7PXAd) <br />
QuickSwap  [http://t.me/QuickSwapDEX](http://t.me/QuickSwapDEX) <br />

Beefy Finance - [https://discord.gg/egkEEAkC](https://discord.gg/egkEEAkC)


## List of hardware wallets supported on Polygon Network.

So the Polygon Network will support all the hardware wallets compatible with Metamask. Please follow this [link](https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet) from Metamask for more information.


## I have been scammed. How will I retrieve my tokens?

Unfortunately, there is no recovery process for lost coins. We ask that before you make a transaction, you go on to check and double-check before starting and completing. Please note that the Polygon network and our official handles do not engage in any giveaway posts or token doubling and we will never approach you on behalf of the organisation. Please disregard all attempts as they're most likely scams. All our communications are through are official 
handles.


## So Ethereum has Goerli as its test Network. Does Polygon Network have a Test Network. 

So how the Ethereum Network has Goerli as its test network, the Polygon Mainnet has Mumbai. All transactions on this test network will be indexed on the Mumbai Explorer. 


## How can  speed up my transaction on Metamask. 

For speeding up transactions via Metamask, please go to this [link](https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction) 


## What all information should I provide when I create a ticket?

- Wallet address
- Transaction hash
- Exact action intended and the result, very descriptive
- Screenshots or screen recordings of the action