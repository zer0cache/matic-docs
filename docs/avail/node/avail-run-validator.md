---
id: avail-run-validator
title: Run an Avail Validator
sidebar_label: How to run an Avail Validator
description: Learn about running an Avail validator
keywords:
  - docs
  - polygon
  - avail
  - node
  - validator
  - validate
image: https://matic.network/banners/matic-network-16x9.png 
slug: avail-run-validator
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

To run the multi-validator `alice` and `bob`, you need to have a 
[docker daemon](https://www.docker.com/products/docker-desktop/) running locally.

Clone the [source code](https://github.com/maticnetwork/avail-deployment):

```sh
git clone https://github.com/maticnetwork/avail-deployment.git
```

This is the easiest way to deploy your own validator on Data Availability. It only needs a couple of 
steps:

Run the latest version of the container
You can run using the default parameters, and exposing the P2P port using `-p 30333`.

```sh
docker run -p 30333 --name my_val 0xpolygon/avail:latest 
```

Any extra parameter will be added to the data-avail binary as an argument. If you want to use an specific 
node key and limit the maximum number of incoming connections to 10, you can use:

```
docker run -p 30333 --name my_val 0xpolygon/avail:latest --in-peers=10 --node-key 80027666cebec66464611eb0d5c36416213d83a9c689006a80efcf479826de7d
```
