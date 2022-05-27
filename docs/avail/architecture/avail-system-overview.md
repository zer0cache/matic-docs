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

We recognize that to achieve higher throughput, we not only need to put execution off-chain but also need to have a scalable data hosting layer that guarantees data availability.

This blockchain design needs to address the following components:

* **Data Hosting and Ordering**: Receives transactional data and orders it without any execution. It would then store the data and ensure complete data availability in a decentralized manner. This is the crux of Avail.
* **Execution**: The execution component should take ordered transactions from Avail and execute them. It should create a checkpoint/assertion/proof and submit it to the data verification layer. We call this the execution layer.
* **Verification/Dispute Resolution**: This component represents the main chain to which the system is anchored. The security of the design is dependent on the robustness and security properties of this component. The checkpoints/assertion/proof submitted by the execution layer is processed by this layer to guarantee that only valid state transitions are accepted in the system (provided that the data is available). We refer to this component as the data verification layer.
