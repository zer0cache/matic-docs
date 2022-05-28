---
id: avail-validiums
title: Avail-Powered Validiums
sidebar_label: Avail-Powered Validiums
description: About validiums and how to build them with Avail.
keywords:
  - docs
  - polygon
  - avail
  - data
  - availability
  - architecture
  - validium
  - rollup
image: https://matic.network/banners/matic-network-16x9.png
slug: avail-validiums
---

Monolithic blockchains (such as Ethereum as it is today) are expensive
to operate, and this results in high transaction fees. Rollups extract
the burden of execution, running transactions off-chain but posting
the execution results and the (usually compressed) transaction data.

Validiums are the next step: Instead of posting the transaction data,
it is kept available off-chain and instead only a proof/attestation is
posted to the L1. This is the most cost-effective solution because
both execution and data availability are kept off-chain, while still
allowing for final verification and settlement on the L1.

Avail is a blockchain optimized for data availability. Any rollup that
wishes to become a validium can switch to post transaction data to
Avail instead of the L1, and deploy a verification contract that in
addition to verifying the correct execution, also verifies data
availability.

The Avail team will make this data availability verification simple on
Ethereum by building an attestation bridge to post data availability
attestations directly to Ethereum. This will make the verification
contract's job a simple one, since the DA attestations will already be
on-chain. This bridge is currently in design, please reach out to the
Avail team for more information or to join our early access program.
