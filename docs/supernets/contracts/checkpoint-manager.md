---
id: checkpoint-manager
title: CheckpointManager
description: "The Checkpoint Manager contract for Polygon Edge"
keywords:
  - docs
  - polygon
  - edge
  - core
  - checkpoint
  - manager
---

## Overview

The `CheckpointManager` contract is used by validators to submit signed
checkpoints as proof of the canonical chain. The contract verifies that the
provided signature is valid and that the checkpoint has been signed as expected.
The contract also includes an initialization function that can only be
called once to set the contract's dependencies and domain.

## Functions

### initialize

```js
  function initialize(
      IBLS newBls,
      IBN256G2 newBn256G2,
      IRootValidatorSet newRootValidatorSet,
      bytes32 newDomain
  ) external initializer {
      bls = newBls;
      bn256G2 = newBn256G2;
      rootValidatorSet = newRootValidatorSet;
      domain = newDomain;
  }
```

This function is the initializer for the `CheckpointManager` contract
It sets the following contract dependencies:

- `newBls`: The address of the BLS library contract.
- `newBn256G2`: The address of the BN256G2 library contract.
- `newRootValidatorSet`: The array of validator addresses to seed the contract with.
- `newDomain`: The domain to use when hashing messages to a point.

### submit

```js
function submit(
    uint256 id,
    Checkpoint calldata checkpoint,
    uint256[2] calldata signature,
    uint256[] calldata validatorIds,
    IRootValidatorSet.Validator[] calldata newValidators
) external {
    bytes memory hash = abi.encode(keccak256(abi.encode(id, checkpoint, newValidators)));

    uint256[2] memory message = bls.hashToPoint(domain, hash);

    // slither-disable-next-line reentrancy-benign
    require(_verifySignature(message, signature, validatorIds), "SIGNATURE_VERIFICATION_FAILED");

    _verifyCheckpoint(currentCheckpointId, id, checkpoint);

    checkpoints[++currentCheckpointId] = checkpoint;

    if (newValidators.length != 0) {
        rootValidatorSet.addValidators(newValidators);
    }
}
```

This function allows a validator to submit a single checkpoint to
the `CheckpointManager` contract. It does the following:

- Hashes the `id`, `checkpoint`, and `newValidators` using `keccak256` the `abi.encode`.
- Calls `bls.hashToPoint` with the contract's domain and the hash from the previous step
  to get the message.
- Calls `_verifySignature` with the `message`, `signature`, and `validatorIds` to
  verify that the signature is valid.
- Calls `_verifyCheckpoint` with the `currentCheckpointId`, `id`, and `checkpoint` to
  verify that the checkpoint is valid.
- Increments `currentCheckpointId` and stores the `checkpoint` in the
  checkpoints mapping.
- If `newValidators` has a length greater than 0, it calls the `rootValidatorSet.addValidators`
  with `newValidators` to add the new validators to the root validator set.

### submitBatch

```js
function submitBatch(
    uint256[] calldata ids,
    Checkpoint[] calldata checkpoints,
    uint256[][2] calldata signatures,
    uint256[][] calldata validatorIds,
    IRootValidatorSet.Validator[] calldata newValidators
) external {
    for (uint256 i = 0; i < ids.length; i++) {
        submit(ids[i], checkpoints[i], signatures[i], validatorIds[i], newValidators);
    }

    if (newValidators.length != 0) {
        rootValidatorSet.addValidators(newValidators);
    }
}
```

This function allows a validator to submit a batch of `checkpoints` to the
`CheckpointManager` contract. It does the following:

- Iterates through the `ids`, `checkpoints`, `signatures`, and `validatorIds` arrays
  and calls `submit` for each element.
- Calls the `rootValidatorSet.addValidators` with `newValidators` to add the new
  validators to the root validator set.

### verifySignature

```js
function _verifySignature(uint256[2] message, uint256[2] signature, uint256[] validatorIds) internal view returns (bool) {
    for (uint256 i = 0; i < validatorIds.length; i++) {
        uint256[4] memory blsKey = rootValidatorSet.getValidatorBlsKey(validatorIds[i]);
        if (!bls.verify(blsKey, message, signature)) {
            return false;
        }
    }
    return true;
}
```

This function verifies that the provided signature is valid. It does the following:

- Iterates through the `validatorIds` and gets the `blskey` for each validator using
  the `getValidatorBlsKey`.
- Calls the `bls.verify` with the `blskey`, `message`, and `signature` for each
  validator and verifies that the signature is valid.

### verifyCheckpoint

```js
function _verifyCheckpoint(uint256 currentId, uint256 id, Checkpoint checkpoint) internal {
    require(id > currentId, "INVALID_CHECKPOINT_ID");

    if (currentId != 0) {
        Checkpoint memory previousCheckpoint = checkpoints[currentId];
        require(previousCheckpoint.eventRoot == checkpoint.eventRoot, "INVALID_EVENT_ROOT");
    }
}
```

This function verifies that the provided checkpoint is valid. It does the following:

- Verifies that `id` is greater than `currentId`.
- Verifies that the `eventRoot` in checkpoint matches the `eventRoot` in the
  previous `checkpoint` (if there is a previous checkpoint).
