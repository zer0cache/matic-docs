---
id: avail-node-management
title: Run an Avail Node
sidebar_label: How to run an Avail node
description: Learn about running an Avail node
keywords:
  - docs
  - polygon
  - avail
  - node
image: https://matic.network/banners/matic-network-16x9.png 
slug: avail-node-management
---

## Prerequisites

Users often run nodes on a cloud server. You may consider using a VPS provider to run your node.

The following list of standard hardware is a recommendation of hardware specs that your environment should have 

* CPU - Intel(R) Core(TM) i7-7700K CPU @ 4.20GHz
* Storage - A NVMe solid state drive with about 256GB. Should be reasonably sized to deal with blockchain growth. 
* Memory - 64GB ECC

### Node prerequisites: Install Rust & dependencies

:::info Installation steps by Substrate

Avail is a Substrate-based chain and requires the same configuration to run a Substrate chain.

Additional installation documentation is available in the Substrate 
**[getting started documentation](https://docs.substrate.io/v3/getting-started/installation/)**.

:::

Once you choose an environment to run your node, ensure Rust is installed.
If you already have installed Rust, run the following command to make sure you are using the latest version.

```sh
rustup update
```

If not, start by running the following command to fetch the latest version of Rust:

```sh
curl https://sh.rustup.rs -sSf | sh -s -- -y
```

To configure your shell, run:

```sh
source $HOME/.cargo/env
```

Verify your installation with:

```sh
rustc --version
```

## Run Avail Locally

Clone the [Avail source code](https://github.com/maticnetwork/avail):

```sh
git clone https://github.com/maticnetwork/avail.git
```

Compile the source code:

```sh
cargo build --release
```

:::caution This process usually takes time

:::

Run a local dev node with temporary datastore:

```sh
./target/release/data-avail --dev --tmp
```
