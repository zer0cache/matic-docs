---
id: avail-system-overview
title: System Overview
sidebar_label: System Overview
description: Learn about the architecture of the Avail chain.
keywords:
  - docs
  - polygon
  - avail
  - data
  - availability
  - architecture
image: https://matic.network/banners/matic-network-16x9.png
slug: avail-system-overview
---

<!-- Page is WIP -->

Avail makes it possible to prove that block data is available without
downloading the whole block by leveraging Kate polynomial commitments,
erasure coding, and other technologies to allow light clients (which
download only the _headers_ of the chain) to efficiently and randomly
sample small amounts of the block data to verify its full
availability.

:::info Avail does not have an execution environment

Avail does not run smart contracts itself, but it makes it possible 
for other chains to make their transaction data available through Avail. 
These chains may implement their own execution environments of any kind, 
EVM, Wasm, or anything else.

:::

:::info Data on Avail is not necessarily meant to be persistent forever

Avail is meant to act as a window in time where consensus is enforced
and trust is guaranteed about what blocks contain and represent.

:::

:::info Avail doesn't care what the data is 

Avail guarantees that block data is available, but does not care about
what that data is. The data can of course be transactions, but can take
on other forms too.

:::

:::info Blocks can be stored elsewhere

After reaching consensus, the blocks themselves can be stored elsewhere.
Historic transactions would be stored elsewhere (i.e. off chain).

:::

The Avail network consists of these types of network maintainers:

* **Validator nodes**
  - Responsible for creating and reaching consensus on the next block
    of the chain

* **Avail (DA) full nodes**
  - Download and make available all block data, for all applications
    using Avail

* **Avail (DA) light clients:**
  - Download headers, but not full blocks
  - Randomly sample small parts of the block to verify availability
  - Expose a local API to interact with the Avail network

This allows applications that wish to use Avail to embed the DA light
client. They can then build:

* **App full nodes**
  - Embed an Avail (DA) light client
  - Download all data for a specific appID
  - Implement an execution environment to run transactions
  - Maintain application state
  
* **App light clients**
  - Embed an Avail (DA) light client
  - Implement end user facing functionality

The Avail ecosystem will also feature bridges to enable specific
use-cases. One such bridge being designed at this time is an
_attestation bridge_ that will post attestations of data available on
Avail to Ethereum, thus allowing validiums to be built.

A more detailed overview of the Avail system can be found in the
this [Introduction to Avail by Polygon blog post](https://medium.com/the-polygon-blog/introducing-avail-by-polygon-a-robust-general-purpose-scalable-data-availability-layer-98bc9814c048).
