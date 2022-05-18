---
id: avail-quick-start
title: How to use Polygon Avail
sidebar_label: How to use Polygon Avail
description: Learn how to use Polygon Avail
keywords:
  - docs
  - polygon
  - avail
  - data
  - availability
  - how-to
  - extrinsic
  - explorer
image: https://matic.network/banners/matic-network-16x9.png 
slug: avail-quick-start
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Generate an Avail account

<Tabs
  defaultValue="apps"
  values={[
    { label: 'Avail-JS Apps', value: 'apps', },
    { label: '@polkadot/api', value: 'library', },
  ]
}>
<TabItem value="apps">

Head over to [Avail-JS Apps](https://devnet-avail.polygon.technology/). 

:::note

The Avail-JS App uses an implementation of **[Polkadot-JS Apps](https://polkadot.js.org/)**. 
If you are familar with Polkadot-JS Apps, the interface and navigation are the same.

:::

Navigate to the **Accounts** tab and click on the **Accounts** sub-tab.
  
On the Accounts page, click on the **Add account** button and follow the steps in the pop-up window.

:::caution Key Management

The seed phrase is your account key, which gives control to your account.
You should not store your seed phrase on a device that has or may have access to 
an internet connection. The seed phrase should be written down stored on a non-digital 
device.

:::

:::tip Account JSON file

Storing your account's JSON file does not have to be as rigourous as storing the seed phrase,
as long as you use a strong password to encrypt the file. You can import the JSON file to access
your account.

:::

:::info Address Format

As Avail is implemented using [Substrate](https://substrate.io/), generic Substrate addresses 
always start with a 5 and follow the **[SS58 address format](https://docs.substrate.io/v3/advanced/ss58/)**.

:::

## Receive AVL testnet tokens

* On Avail-JS Apps, click on the icon next to your account name; this will copy your address.
Alternatively, you can copy the address manually.

* Head over to the [Polygon faucet](https://faucet.polygon.technology).

* On the faucet page, select `DA (Test Token)` and `DA Network` as the token and network, 
  respectively. Paste your account address and click on **Submit**. The transfer will up to one 
  minute to complete.

* Upon successful transfer, your account should now have a non-zero balance. If you face any issues obtaining tokens from the facuet, 
  please reach out to the [support team](https://support.polygon.technology/support/home).

## Submit a New Transaction

- On the explorer, go to Developer -> Extrinsics
- Select your newly created account. 
- On the extrinsic dropdown, select `dataAvailability`.
- Select the dropdown to create an application key or submit data. 
- Select the dropdown `SubmitData` and enter the value you wish to submit as part of this transaction using the `App_ID` or without its default key value as `0` . Click on submit transaction. 
- Before sending a transaction using App_ID, it must be created using the `createApplicationKey` field.
- On successful inclusion of the transaction, head over to Network -> Explorer. On the recent event list you should see your transaction. You can click on it and expand to check out the details. 

## How to get guarantees that the data behind the transaction is available?

We have abstracted out the gory details of verifying data availability and hosted a light client for your use. Just click on the block number against your desired transaction. You will see all the block details. Along with that, you will see a confidence factor. If it shows `0%`, give it some time and recheck it later. Otherwise, it should show a non-zero confidence level showing the probability with which the underlying data is available. 


</TabItem>
<TabItem value="library">

Alternatively, you can use the console/typescript to create an Avail account 
via [`@polkadot/api`](https://polkadot.js.org/docs/). Create a new folder and add the 
JS library using `yarn add @polkadot/api` or `npm install @polkadot/api`

:::note

Make sure Typescript dependencies are added for running the script. Here, we are using the 
`@polkadot/api` version `7.9.1`.

:::

To generate an account, run the following script:
  
```typescript
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');

const keyring = new Keyring({ type: 'sr25519' });

async function createApi() {

  // Create the API and wait until ready
  return ApiPromise.create({ 
    types: {
        AccountInfo: 'AccountInfoWithRefCount',
    },
  });
}

async function main () {
  // Create the API and wait until ready
  const api = await createApi(); 

  const keyring = new Keyring({ type: 'sr25519'});
  const mnemonic = mnemonicGenerate();

  const pair = keyring.createFromUri(mnemonic, { name: 'test_pair' },'sr25519');
  console.log(pair.meta.name, 'has address', pair.address, 'and the mnemonic is', mnemonic);
  process.exit(0);

}
main().catch(console.error)

```

:::info Key derivation and signing algorithm

The reasons for using `sr25519` are outlined **[here](https://wiki.polkadot.network/docs/learn-cryptography#keypairs-and-signing)**.

:::

Save the newly generated address and mnemonic phrase for next steps.

## Receive AVL testnet tokens

* Head over to the [Polygon faucet](https://faucet.polygon.technology).

* On the faucet page, select `DA (Test Token)` and `DA Network` as the token and network, 
  respectively. Paste your account address and click on **Submit**. The transfer will up to one 
  minute to complete.

* Upon successful transfer, your account should now have a non-zero balance. If you face any issues obtaining tokens from the facuet, 
  please reach out to the [support team](https://support.polygon.technology/support/home).

### Balance Check with `@polkadot/api`

Use the following script to check the balance of the account you just created:

```typescript
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');

import type { ISubmittableResult} from '@polkadot/types/types';

const keyring = new Keyring({ type: 'sr25519' });

async function createApi() {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('wss://devnet-avail.polygon.technology/ws');

  // Create the API and wait until ready
  return ApiPromise.create({ 
    provider,
    types: {
        DataLookup: {
          size: 'u32',
          index: 'Vec<(u32,u32)>'
        },
        KateExtrinsicRoot: {
          hash: 'Hash',
          commitment: 'Vec<u8>',
          rows: 'u16',
          cols: 'u16'
        },
        KateHeader: {
          parentHash: 'Hash',
          number: 'Compact<BlockNumber>',
          stateRoot: 'Hash',
          extrinsicsRoot: 'KateExtrinsicRoot',
          digest: 'Digest',
          app_data_lookup: 'DataLookup'
        },
        Header: 'KateHeader',
        AppId: 'u32',
        CheckAppId: {
            extra: {
                appId: 'u32', 
            },
            types: {}
        }
    },
    signedExtensions: {
      CheckAppId: {
        extrinsic: {
          appId: 'u32'
        },
        payload: {}
      },
    },
  });
}

async function main () {
  // Create the API and wait until ready
  const api = await createApi(); 

  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);
  
  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

    //address which is generated from previous step👇
    let ADDRESS = '_ADDRESS_';
    console.log(ADDRESS);
    try{
      let { data: { free:balance}} = await api.query.system.account(ADDRESS)
      console.log(`${ADDRESS} has balance of ${balance}`)
    }catch (e){
      console.log(e)  
    }finally{
      process.exit(0)
    }
}
main().catch(console.error)
```

> You should get balance as `0` if the account is newly created and you have not used the facuet. 
> You should also see the confirmation of the transaction.

:::tip Using Avail-JS Apps

For convienence, can add the account you generated with `@polkadot/api` on the Apps UI to perform 
account actions.

:::

## Submit a New Transaction

You can use the following script to sign and submit transactions. Replace `value` and `APP_ID` with the ones you want to submit. Also, replace the mnemonic string with your own. 
The following script is to create an Application key: 

```typescript
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');

import type { ISubmittableResult} from '@polkadot/types/types';

const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
const BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';

const keyring = new Keyring({ type: 'sr25519' });

async function createApi() {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('ws://127.0.0.1:9944');

  // Create the API and wait until ready
  return ApiPromise.create({ 
    provider,
    types: {
        DataLookup: {
          size: 'u32',
          index: 'Vec<(u32,u32)>'
        },
        KateExtrinsicRoot: {
          hash: 'Hash',
          commitment: 'Vec<u8>',
          rows: 'u16',
          cols: 'u16'
        },
        KateHeader: {
          parentHash: 'Hash',
          number: 'Compact<BlockNumber>',
          stateRoot: 'Hash',
          extrinsicsRoot: 'KateExtrinsicRoot',
          digest: 'Digest',
          app_data_lookup: 'DataLookup'
        },
        Header: 'KateHeader',
        AppId: 'u32',
        CheckAppId: {
            extra: {
                appId: 'u32', 
            },
            types: {}
        }
    },
    signedExtensions: {
      CheckAppId: {
        extrinsic: {
          appId: 'u32'
        },
        payload: {}
      },
    },
  });
}

async function main () {
  // Create the API and wait until ready
  const api = await createApi(); 

  //enter your mnemonic generated from the previous step and replace below.
  const pair = keyring.addFromUri( 'put your mnemonic', { name: 'test pair' }, 'sr25519');
  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);
  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    try{
        let KEY = 1;
        let createId = api.tx.dataAvailability.createApplicationKey(KEY);
        const unsub = await createId
            .signAndSend(
            pair, 
            { app_id: 0}, 
            ( result: ISubmittableResult ) => {
                console.log(`Tx status: ${result.status}`);
        
                if (result.status.isInBlock) {
                    console.log(`Tx included at block hash ${result.status.asInBlock}`);
                } else if (result.status.isFinalized) {
                    console.log(`Tx included at blockHash ${result.status.asFinalized}`);
        
                    result.events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
                    });
                    unsub
                    process.exit(0);
                }
            });
    }catch(e){
        console.error(e);
    }
}
main().catch(console.error)

```

This next script is to submit the data:
```typescript 
const { ApiPromise, WsProvider, Keyring } = require('@polkadot/api');
const {mnemonicGenerate, cryptoWaitReady } = require('@polkadot/util-crypto');


import type { EventRecord, ExtrinsicStatus, H256, SignedBlock } from '@polkadot/types/interfaces';
import type { ISubmittableResult} from '@polkadot/types/types';

const keyring = new Keyring({ type: 'sr25519' });

async function createApi() {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('wss://devnet-avail.polygon.technology/ws');

  // Create the API and wait until ready
  return ApiPromise.create({ 
    provider,
    types: {
        DataLookup: {
          size: 'u32',
          index: 'Vec<(u32,u32)>'
        },
        KateExtrinsicRoot: {
          hash: 'Hash',
          commitment: 'Vec<u8>',
          rows: 'u16',
          cols: 'u16'
        },
        KateHeader: {
          parentHash: 'Hash',
          number: 'Compact<BlockNumber>',
          stateRoot: 'Hash',
          extrinsicsRoot: 'KateExtrinsicRoot',
          digest: 'Digest',
          app_data_lookup: 'DataLookup'
        },
        Header: 'KateHeader',
        AppId: 'u32',
        CheckAppId: {
            extra: {
                appId: 'u32', 
            },
            types: {}
        }
    },
    signedExtensions: {
      CheckAppId: {
        extrinsic: {
          appId: 'u32'
        },
        payload: {}
      },
    },
  });
}

async function main () {
  // Create the API and wait until ready
  const api = await createApi(); 

  //enter your mnemonic generated from the previous step and replace below 👇.
  const pair = keyring.addFromUri( 'enter mnemonic here', { name: 'test pair' }, 'sr25519');
  // Retrieve the chain & node information information via rpc calls
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()
  ]);
  
  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);

    try{
        let APP_ID = 1;
        let VALUE = `iucakcbak`;
        let transfer = api.tx.dataAvailability.submitData(VALUE);
        const unsub = await transfer
            .signAndSend(
            pair, 
            { app_id: APP_ID}, 
            ( result: ISubmittableResult ) => {
                console.log(`Tx status: ${result.status}`);
        
                if (result.status.isInBlock) {
                    console.log(`Tx included at block hash ${result.status.asInBlock}`);
                } else if (result.status.isFinalized) {
                    console.log(`Tx included at blockHash ${result.status.asFinalized}`);
        
                    result.events.forEach(({ phase, event: { data, method, section } }) => {
                        console.log(`\t' ${phase}: ${section}.${method}:: ${data}`);
                    });
        
                    process.exit(0);
                }
            });
    }catch(e){
        console.error(e);
    }
    

}
main().catch(console.error)
```
You can even head over to the explorer on your browser to check your sent transaction.

## How to get guarantees that the data behind the transaction is available?

You can use the following curl request to check out the confidence level. Just replace the block number with the one you wish to get availability guarantees for. 

`curl -s -H 'Content-Type: application/json' -d '{"jsonrpc":"2.0","method":"get_blockConfidence","params": {"number": block_number_here}, "id": 1}' 'https://polygon-da-light.matic.today/v1/json-rpc'`

We appreciate you using our devnet and providing us valuable feedback. We are working on improving a lot of the current features and we will keep you updated. 

</TabItem>
</Tabs>
 