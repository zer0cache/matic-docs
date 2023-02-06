---
id: supernets-faq
title: FAQs
sidebar_label: FAQs
description: "The most common questions and answers about Supernets and the new Edge client."
keywords:
  - docs
  - Polygon
  - edge
  - supernets
  - childchain
  - network
  - modular
---

## What is the relation between Supernets and Edge?

Polygon Supernets is a cutting-edge software application built on top of
the Edge client, designed to enable EVM-compatible, application-specific
sovereign blockchains. The Supernets logic was first introduced in the
0.7.x release of the Edge client.

:::note Polygon Edge source code

The releases of the Edge client, starting from version 0.7.x and beyond
are related explicitly to Supernets, while versions 0.6.x and below are
solely the Polygon Edge client.

:::

The Supernets feature on the Edge client is designed to support and assist
enterprises in quickly and effectively creating application-specific
blockchain solutions, providing premium tooling and leveraging the benefits
of a thriving ecosystem.

## How do I run Supernets?

:::caution Active development

The site will eventually provide comprehensive technical documentation and
reference material for setting up, configuring, and deploying a Supernet,
including node configuration, cloud deployments, templates, and more.

In the meantime, for information on configuration, please see the
**[Edge client](/edge/get-started/installation.md)**.
:::

To use Supernets, you must first deploy the [Edge client](/edge/get-started/installation.md).
The Edge client acts as the foundation upon which Supernets operates,
providing the necessary infrastructure for creating an
application-specific blockchain. Ensure you are on the latest 0.7.x release.

## How do I run a validator?

Please note that as Supernets is still in active development and being audited,
these steps may change or be updated. Additionally, depending on your specific
use case, the steps may vary. For more detailed and up-to-date information on
validator hosting, please refer to the **[Edge documentation](/edge/validator-hosting.md)**.

### Setting up the infrastructure and the host configuration for your validator node

- Ensure that the Edge system service is configured to restart
  and run on boot automatically.
- Deploy the pre-built Polygon Edge binary from the GitHub releases.
- Store the blockchain data on a separate volume that can be resized.
- Properly set up local filesystem log rotation.
- Configure a static public IP address for the validator node.
- Implement daily automated backups of the Polygon Edge system or volume/VM with
  off-node storage.
- Apply security patches to the host OS daily.
- Set up metric system collection.
- Set up validator metric collection via the Polygon Edge Prometheus API.
- Expose the JSON-RPC and gRPC ports exclusively on localhost.
- Set up the required infrastructure for hosting the validator keys on a dedicated
  key management service.

### Generation of validator private & public keys

- Generate private keys and store them securely on an external secrets manager
  compatible with Polygon Edge.
- Send the public keys to the Polygon network.

### Setup of the genesis.json and the firewall rules per instructions

- Send the public static IP to the Polygon network.
- Receive the `genesis.json` and libp2p firewall rules from Polygon.
- Set up the `genesis.json` and libp2p firewall rules.
- Start chain validation.

## What tools are available for Supernets?

The team is actively developing the infrastructure for necessary tooling, and
aiming to provide an all inclusive toolkit for blockchain development.

In general, the Supernets package will include "native" tooling, while multiple
third-parties will offer integrations and additional support for Supernets.

## What infrastructure providers support Supernets?

Multiple infrastructure providers are being onboarded and we anticipate
even more support in the future. These providers are also creating their
own resources and technical documentation to aid in the utilization of
Supernets.
