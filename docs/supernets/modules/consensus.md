---
id: consensus
title: Consensus
description: ""
keywords:
  - docs
  - polygon
  - edge
  - consensus
  - module
---

:::caution WIP

This section will be updated shortly!

:::

IBFT 2.0 includes additional features such as support for dynamic
validator sets and improved transaction finality.

## Structs

### IBFT

The `IBFT` struct represents a single instance of the IBFT 2.0 consensus state machine.
It contains fields for storing the current state of the node, the message storage layer,
references to the `Backend` and `Transport` implementations, and channels for signaling
various events in the consensus process. It also contains a field for storing the base
round timeout and an additional timeout for each round of consensus.

```go
type IBFT struct {
 // log is the logger instance
 log Logger

 // state is the current IBFT node state
 state *state

 // messages is the message storage layer
 messages Messages

 // backend is the reference to the
 // Backend implementation
 backend Backend

 // transport is the reference to the
 // Transport implementation
 transport Transport

 // roundDone is the channel used for signalizing
 // consensus finalization upon a certain sequence
 roundDone chan struct{}

 // roundExpired is the channel used for signalizing
 // round changing events
 roundExpired chan struct{}

 // newProposal is the channel used for signalizing
 // when new proposals for a view greater than the current
 // one arrive
 newProposal chan newProposalEvent

 // roundCertificate is the channel used for signalizing
 // when a valid RCC for a greater round than the current
 // one is present
 roundCertificate chan uint64

 // User configured additional timeout for each round of consensus
 additionalTimeout time.Duration

 // baseRoundTimeout is the base round timeout for each round of consensus
 baseRoundTimeout time.Duration

 // wg is a simple barrier used for synchronizing
 // state modification routines
 wg sync.WaitGroup
}
```

## Functions
