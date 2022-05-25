---
id: faq
title: FAQ
sidebar_label: FAQ
description: Frequently asked questions about Avail
keywords:
  - docs
  - polygon
  - avail
  - availability
  - client
  - consensus
image: https://matic.network/banners/matic-network-16x9.png 
slug: faq
---

# Frequently Asked Questions

## What are light clients anyways? What is a popular use case of a light client? Who uses a pure light-client in any practical application?
We refer to any node which needs not to invest many resources to be part of the system as a light client. In practice, Ethereum nodes are light clients on most shards. This allows them to keep track of the sharded chain without participating as a full node for that shard.
In the context of data availability, we consider the application clients which use the DA layer but do not want to host a full node as light clients. The goal is to not put resource assumptions on participants but still give a high guarantee that the data is available.

## The consensus already assumes  2/3 honest validators. Why do we need to use redundancy and go through so much trouble in block generation? Isn't DA guarantee already inherent to the consensus protocol? 
We want to ensure that minimum trust is needed on the DA layer. For the consensus, we assume the super-majority of validators to remain honest and make sure the blockchain progresses and finalizes. However, we want the applications using the DA layer to not have to participate as a validator or full node to ensure that the data is available. Only a very limited amount of data querying should provide enough confidence for the applications to keep using our proposed layer. This is why we modify our block structure and make sure that a block header with a constant number of data query is sufficient to provide ~100% guarantee that the entire block is available. We emphasize the fact that none of these guarantees about DA assume any dependency on any other honest participant, as far as availability is concerned.

Also, the applications can choose to keep only parts of the block which are relevant to their app. If enough such applications are present in the system, it ensures that collectively the entire block data is available.

## Why are we keeping so much extra data inside a block? Isn't it a waste of space? 
Redundancy of data is extremely important to give data availability guarantees. Suppose we have 4 data chunks. If the block producer wants to hide a particular chunk out of the 4 data chunks, then being a light client, the probability of querying a data chunk at random and selecting the exact chunk the producer wants to hide is 1/4. Now suppose the block producer erasure codes the chunks such that 4 chunks are extended to 8 chunks in a way that any 4 out of 8 chunks are sufficient to generate the entire data. Now, to even hide a particular chunk, the producer needs to make sure 5 out of 8 chunks are hidden, otherwise, revealing even one more chunk reveals the entire data. Now, a light client randomly querying a chunk has a probability of 5/8 of choosing a data chunk that the producer wants to hide, hence having a much higher chance of catching a data hiding attempt, even with a single query. Repeating such querying multiple times allows us to amplify the probability of detecting data availability attacks. Hence, redundancy is very important, even if it comes at the cost of increasing storage and communication bandwidth requirements. 

## What are Kate commitments? Why are we suddenly using them here? 
Kate commitments, introduced by Aniket Kate, Gregory M. Zaverucha, and Ian Goldberg in 2010, provided a way to commit to polynomials in a succinct manner. Recently, polynomial commitments came to the forefront, being used primarily as vector commitments in PLONK like ZK constructions. 

In our construction, we use Kate commitments due to the following features:

- It allows us to commit to values in a succinct manner to be kept inside the block header.
- Short openings are possible which helps a light client verify availability.
- The cryptographic binding property helps us avoid fraud proofs by making it computationally infeasible to produce wrong commitments. 
<!-- This allows the extension of commitments be same as the commitment to extended data, which proves correctness of commitment construction without having access to the entire data of the block. -->

In future, we might use other polynomial commitment schemes, if that gives us better bounds or guarantees.