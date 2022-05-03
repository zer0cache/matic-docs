# Where can I find the Smart Contracts?
Polygon Nightfall contracts have been deployed in testnet Goerli and mainnet. The contracts addresses are (TODO):

- Mainnet:
    - Shield:
    - Proposers:
    - Challengers:
    - State:
    - Verifier: 

- Goerli
    - Shield:
    - Proposers:
    - Challengers:
    - State:
    - Verifier: 

# What's the state of Polygon Nightfall's security audit?
Polygon Nightfall is currently undergoing a security audit that is planned to be finished during Q3. Meanwhile, several restrictions have been added to the protocol:

- Single proposer and challengrt running, and managed by Polygon
- Restricted deposit and withdrawal amounts

| ERC20 token | Max Deposit | Max Withdraw |
|-------------|-------------|--------------|
| MATIC       | 1000 MATIC  | 1000 MATIC   |
| WETH        | 1 WETH      | 1 WETH       |
| DAI         | 1000 DAI    | 1000 DAI     |
| USDT        | 1000 USDT   | 1000 USDT    |
| USDC        | 1000 USDC   | 1000 USDC    |

# How do I set up my Nightfall Wallet? 
There is a complete wallet tutorial [here](../tools/nightfall-wallet.md) with all details on how to get started with Polygon Nightfall wallet.

# How long do transfers take on Polygon Nightfall Network from start to finish? 
Current proposer takes transactions from users and makes blocks of 32 transactions. As soon as enough transactions are collected to
build a block, the transaction will be processed.
Additionally, there is an upper limit on the block generation frequency so that at least one block every 6 hours (regardless of the number of transactions collected by the proposer).

# Who can I transact with? 
To transfer assets within Polygon Nightfall one only needs the `Destination Wallet Address`. Read the [wallet tutorial](../tools/nightfall-wallet.md) to understand how to share your Wallet Address to receive funds.

# What are some privacy recommendations?
Some privacy guidelines include:
- Don't deposit a very unique coin value (e.g. 3.1415 USDC) and then withdraw the same amount. People will be able to guess who you probably sent it to. Likewise don't deposit and withdraw exceptionally large values.
- Do withdraw different amounts from what you deposit. This makes it harder to guess who you paid.
- Do wait awhile. You should ensure that there are at least a few other transactions between the deposit and withdraw. If there are no other transactions in the time you make a deposit and withdraw, people may be able to guess that they are connected.
- Don't make regular or predictable transactions. For example, if a deposit from a particular Ethereum address is always made at 12:01 on the first of the month and a withdraw is always made to a particular Ethereum address at 12:05 on the second of the month people may guess that they are related; you expose yourself to statistical analysis even if the amounts are uncorrelated.

# How to withdraw funds?
Funds can be withdrawn with Polygon Nightfall wallet. Withdrawals have a **one week** finalization period from the moment when the block including the withdrawal transaction was created. Once this time period has elapsed, you can finalize the withdrawal to have your funds sent to your Ethereum account.

# How much will transactions cost on Nightfall?
There are two types of transactions that bear different costs:
- On-chain transactions: These transactions are sent to the smart contract and require gas fees on Ethereum to be mined. Any proposer can take this transaction and put it in a block. Currently, `deposit` and `finalize withdrawal` are onchain transactions.
- Off-chain transactions: These transactions are sent directly to the proposer. Currently, all `transfer` and `withdrawal` are configured as offchain transactions. These transactions cost `1 MATIC` paid in the PoS network.

# Which tokens can I use on Nightfall Network?
The following tokens are operative on Nightfall:
- MATIC
- WETH
- DAI
- USDC
- USDT

# Do I need MATIC tokens to use Nightfall?
Yes. You need MATIC on PoS to be able to send offchain transactions to the proposer.

# Where can I submit a bug report or contact Nightfall for additional help?
Best way is to join our Polygon Nightfall discord server and ... (TODO)