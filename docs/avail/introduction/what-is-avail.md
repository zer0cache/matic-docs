---
id: what-is-avail
title: Avail by Polygon
sidebar_label: Introduction to Avail
description: Learn about Polygon's data availability chain
keywords:
  - docs
  - polygon
  - avail
  - availability
  - scale
  - rollup
image: https://matic.network/banners/matic-network-16x9.png
slug: what-is-avail
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::note A Robust General-Purpose Scalable Data Availability Layer

* Enable standalone chains or sidechains with arbitrary execution environments to bootstrap
  validator security without needing to create and manage their own validator set by guaranteeing
  transaction data availability.

* Layer-2 solutions such as Validiums to offer increased scalability throughput by using Avail as an
  off-chain data availability layer.

:::

## Current Availability and Scaling Challenges

<Tabs
  defaultValue="da"
  values={[
    { label: 'Data Availability', value: 'da', },
    { label: 'Rollup Scaling', value: 'scaling', },
  ]
}>
<TabItem value="da">

### What is the data availability problem?

Peers in a blockchain network need a way to ensure that all the data of a newly proposed block is 
readily available. If the data is not available, the block might contain malicious transactions 
which are being hidden by the block producer. Even if the block contains non-malicious transactions, 
hiding them might compromise the security of the system.

### Avail's approach to data dvailability

#### High Guarantee

Avail provides a provable high guarantee that the data is available. In constant time get close to 100%
guarantee.

#### Minimum Trust

No need to be a validator or host a full node. Even with a light client, get guaranteed availability.

#### Easy to Use

Built using modified Substrate, the solution focuses on ease of use, whether you host an application or
operate an off-chain scaling solution.

#### Perfect for Off-Chain Scaling

Unlock the full scaling potential of your off-chain scaling solution by keeping the data with us and
still avoiding the DA problem on L1.

#### Bootstrapping Security

Standalone chains can use Avail to ensure ordered data is always available, irrespective of the application
logic.

#### Fast provable finality using NPoS

Fast provable finality via Nominated Proof of Stake using MATIC token. Backed by KGZ commitments and erasure
coding.

</TabItem>
<TabItem value="scaling">




</TabItem>
</Tabs>

## See also

* [Introducing Avail by Polygon — a Robust General-Purpose Scalable Data Availability Layer](https://polygontech.medium.com/introducing-avail-by-polygon-a-robust-general-purpose-scalable-data-availability-layer-98bc9814c048)
* [The Data Availability Problem](https://blog.polygon.technology/the-data-availability-problem-6b74b619ffcc/)
