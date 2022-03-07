---
id: snapshot-instructions-heimdall-bor
title: Snapshot Instructions for Heimdall and Bor
description: Snapshot Instructions for Heimdall and Bor
keywords:
  - docs
  - matic
  - polygon
  - binary
  - node
  - validator
  - sentry
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

When setting up a new Sentry, Validator, or Full Node server, it is recommended you use a snapshot for faster syncing without having to sync over the network. Using snapshots will save you several days for both Heimdall and Bor.

:::note
For the latest snapshot, please refer to [https://snapshots.matic.today](https://snapshots.matic.today).
:::

## Heimdall Snapshot

First, you need to set up your node with **pre-requisites** as per the node setup guide. Before you start services for Heimdall to sync, follow the below steps to use snapshot:

1. Download the Snapshot Tar file of Heimdall to your VM by running the following command:

```
wget -c <Snapshot URL>

// For example, This will download the Snapshot of Heimdall:
wget -c https://matic-blockchain-snapshots.s3-accelerate.amazonaws.com/matic-mainnet/heimdall-snapshot-2021-09-12.tar.gz
```

2. To unpack the Tar file in the Heimdall Data directory, run the following command:
```
// Note that you need to ensure that you are running this command
// before you start the Heimdall service on your node.
// If your Heimdall service has started, please stop and then run the below command.
// Once unpacking is complete you can start the Heimdall service again:
tar -xzvf <snapshot file> -C <HEIMDALL_DATA_DIRECTORY>

// Note that if your Heimdall data directory is different,
// then please mention that directory name correctly.
// When this command completes, you can delete the tar file to reclaim space.

// For example, this will unpack the Tar file in the Heimdall Data directory:
tar -xzvf heimdall-snapshot-2021-09-12.tar.gz -C ~/.heimdalld/data/
```


## Bor Snapshot

First, you need to set up your node with **pre-requisites** as per the node setup guide. Before you start services for Bor to sync, follow the below steps to use snapshot:

1. Download the Snapshot Tar file of Bor to your VM by running the following command:
```
wget -c <Snapshot URL>

// For example:
wget -c https://matic-blockchain-snapshots.s3-accelerate.amazonaws.com/matic-mainnet/bor-pruned-snapshot-2021-09-08.tar.gz
```
2. To unpack the Tar file in the Bor Data directory run the following command:

```
// Note that need to ensure that you are running this command
// before you start the Bor service on your node.
// If your Bor service has started, please stop and then run the below command.
// Once unpacking is complete you can start the Bor service again.

tar -xzvf <snapshot file> -C <BOR_DATA_DIRECTORY>

// Note that if your bor data directory is different
// then please mention that directory name correctly.
// When this command completes, you can delete the tar file to reclaim space.

// For example, this will unpack the Tar file in the Bor Data directory:
tar -xzvf bor-pruned-snapshot-2021-09-08.tar.gz -C ~/.bor/data/bor/chaindata
```
