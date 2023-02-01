---
id: checkpoint
title: Checkpoint
description: ""
keywords:
  - docs
  - polygon
  - edge
  - bridge
  - fxportal
  - checkpoint
---

A user sends a transaction to an exit contract which generates a `childchain`
exit event.

The exit root is sent into a `rootchain` contract called
[`CheckpointManager`](../contracts/checkpoint-manager.md). The Edge node
will execute a different transaction to the `rootchain` to write that exit root.

![Exit Diagram](/img/supernets/exit.png)

:::info When is the exit root sent?

The exit root is not necessarily sent at the end of each epoch, despite the
diagram showing the exit root being sent at the end.

The header for each block always has an exit root. During the epoch, the exit
root is incrementally updated as it is based on the exit
events of the previous block and the current block. By doing so, a checkpoint
can be sent at anytime during the epoch.

The exit root resets at the end of each epoch.

:::

The `CheckpointManager` stores the exit root hashes for the exit event of
different `epochs`.

Similar to `StateSync`, a user can execute an exit event by querying the `rootchain`
for a specific `exit` leaf in the Merkle trie, where the Edge node will return a
proof of the Merkle trie, and the user can send a `withdraw` operation with the
proof to the `CheckpointManager`. The withdraw operation is what executes the `exit`
event. The user pays for the gas to execute on the `rootchain`.

![Exit Diagram](/img/supernets/exit-withdrawal.png)
